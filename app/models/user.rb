class User < ActiveRecord::Base
  validates :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :email, format: {
    with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i,
    on: :create,
    message: "Invalid email address"
  }
  # TODO: allow_blank isn't the right answer
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :password_matches_verification,
    on: [:create, :update],
    message: "Password must match"

  # before_validation :clear_empty_password_string, on: :update
  after_validation :set_initial_name, on: :create
  after_initialize :ensure_session_token


  has_many(
    :classes_taught,
    class_name: 'Section',
    foreign_key: :instructor_id
  )

  has_many :enrollments, dependent: :destroy
  has_many :classes, through: :enrollments, source: :section

  has_many :posts


  attr_reader :password, :password_verify

  public
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil unless user && user.is_password?(password)
    user
  end


  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_verify=(password)
    @password_verify = password
  end


  def enrolled_in?(section)
    self.classes.include?(section)
  end

  def teaches?(section)
    self.classes_taught.include?(section)
  end


  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def set_initial_name
    self.name = self.email.match(/\A([^@\s]+)@.*/)[1]
  end

  # def clear_empty_password_string
  #   if self.password == "" && self.password_verify == ""
  #     self.password = nil
  #     self.password_verify = nil
  #   end
  # end

  def password_matches_verification
    return self.password == self.password_verify if self.password
    return true
  end

end

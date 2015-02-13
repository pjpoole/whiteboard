class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :email, format: {
    with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i,
    on: :create,
    message: "Invalid email address"
  }
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :password_matches_verification,
    on: [:create, :update],
    message: "Password must match"

  after_validation :set_initial_name, on: :create
  after_initialize :ensure_session_token


  has_many(
    :classes_taught,
    class_name: 'Section',
    foreign_key: :instructor_id
  )

  has_many :enrollments, dependent: :destroy
  has_many :classes, through: :enrollments, source: :section

  # Not a fan of dependent: :destroy here... orphaned comments have a
  # place in certain contexts. TODO: Do this how reddit does it: nullify
  # the username, but keep the text.
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_many :tasks, dependent: :destroy

  has_many(
    :messages_sent,
    class_name: 'Message',
    foreign_key: :sender_id
  )

  has_many(
    :messages,
    class_name: 'Message',
    foreign_key: :receiver_id
  )


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


  def can_see?(section)
    self.enrolled_in?(section) || self.teaches?(section)
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

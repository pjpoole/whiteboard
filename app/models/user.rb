class User < ActiveRecord::Base
  validates :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :email, format: {
    with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i,
    on: :create,
    message: "Invalid email address"
  }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_validation :set_initial_name, on: :create

  attr_reader :password

  after_initialize :ensure_session_token

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

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def set_initial_name
    puts "test"
    self.name = self.email.match(/\A([^@\s]+)@.*/)[1]
  end

end

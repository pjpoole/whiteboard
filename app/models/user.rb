class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :email, :encrypted_password, presence: true
  # validates :email, uniqueness: true
  validates :email, format: {
    with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i,
    on: :create,
    message: "Invalid email address"
  }
  # validates :password, length: { minimum: 6, allow_nil: true }

  after_validation :set_initial_name, on: :create

  # dependent: :destroy is here for guest account use.
  # It doesn't make sense, necessarily, for a class to disappear
  # just because the instructor has been replaced.
  has_many(
    :classes_taught,
    class_name: 'Section',
    foreign_key: :instructor_id,
    dependent: :destroy
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


  public
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil unless user && user.is_password?(password)
    user
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
  def set_initial_name
    self.name = self.email.match(/\A([^@\s]+)@.*/)[1] unless self.name
  end

end

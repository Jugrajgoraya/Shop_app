class Order < ApplicationRecord
  belongs_to :user

  has_many :order_details
  has_many :products, through: :order_details
end

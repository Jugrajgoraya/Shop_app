class OrderSerializer < ActiveModel::Serializer

  attributes(
    :id,
    :customer_name,
    :shipping_address,
    :email,
    :created_at,
    :updated_at
  )

  has_many :order_details

end

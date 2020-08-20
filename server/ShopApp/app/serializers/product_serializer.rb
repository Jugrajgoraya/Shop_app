class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
    attributes(
      :id,
      :name,
      :description,
      :image,
      :created_at,
      :updated_at
    )
    
    def image
        object.image
    end
end
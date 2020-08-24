class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

    attributes(
      :id,
      :name,
      :description,
      :image,
      :price,
      :weight,
      :stock,
      :created_at,
      :updated_at
    )
    
    def image
      url_for(object.image)
    end

end
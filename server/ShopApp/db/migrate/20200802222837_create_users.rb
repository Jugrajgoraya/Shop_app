class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :billing_address
      t.text :default_shipping_address
      t.integer :phone
      t.boolean :is_admin

      t.timestamps
    end
  end
end

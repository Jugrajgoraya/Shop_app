class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

    private

    def current_user
      if session[:user_id].present?
        current_user ||= User.find session[:user_id]
      end
    end
    
    def user_signed_in?
      current_user.present?
    end

    def authenticate_user!
        unless user_signed_in?
            flash[:danger] = "you need to sign in first"
        end
    end
end

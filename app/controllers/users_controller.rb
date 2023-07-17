class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only: :create

    def show
        if @user
            render json: @user, include: [:reviews, :bookings, :trips], status: :ok
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        if @user
            @user.update!(user_params)
            render json: @user, status: :ok
        else
            render json: {error: "You must be logged in to update your account!"}, status: :unprocessable_entity
        end
    end

    def destroy
        if @user
            @user.destroy
            head :no_content, status: :ok
        else
            render json: { error: "You may only delete your own account!" }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :age, :email, :image)
    end 

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
    
end
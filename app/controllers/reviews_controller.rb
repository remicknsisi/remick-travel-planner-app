class ReviewsController < ApplicationController

    def create
        review = @user.reviews.create(review_params)
        binding.pry
        if review.valid?
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if @user && @user.id == review.user_id
            review.destroy
            render json: review, status: :ok
        else
            render json: { error: "You can only delete your own reviews!" }, status: :unauthorized
        end
    end

    private

    def review_params
        params.permit(:rating, :comment, :travel_agent_id)
    end

end
class ReviewsController < ApplicationController

    def create
        review = @user.reviews.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def review_params
        params.permit(:rating, :comment, :travel_agent_id)
    end

end
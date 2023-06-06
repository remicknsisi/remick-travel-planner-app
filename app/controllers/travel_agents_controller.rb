class TravelAgentsController < ApplicationController
    def index
        agents = TravelAgent.all
        render json: agents, status: :ok
    end

    def show
        agent = TravelAgent.find_by(id: params[:id])
        if agent
            render json: agent, status: :ok
        else
            render json: {error: "Agent not found"}, status: :not_found
        end
    end
end
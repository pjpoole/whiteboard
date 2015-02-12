module Api
  class EventsController < ApiController
    def create
      @event = Event.new(event_params)

      if @event.save
        render :show
      else
        render json: @event.errors.full_messages,
          status: :unprocessable_entity
      end
    end

    def show
      @event = Event.includes(
        :section,
        posts: :user
      ).find(params[:id])
    end

    def index
      @events = Event.where(section_id: params[:section_id]).all
    end

    private
    def event_params
      params.require(:event).permit(
        :name,
        :date,
        :body,
        :event_type,
        :section_id
      )
    end
  end
end

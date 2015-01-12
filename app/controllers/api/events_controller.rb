module Api
  class EventsController < ApiController
    def create
      @event = Event.new(
        { section_id: params[:section_id] }.merge(event_params)
      )

      if @event.save
        render json: @event
      else
        render json: @event.errors.full_messages,
          status: :unprocessable_entity
      end
    end

    def index
      @events = Event.where(section_id: params[:section_id]).all

      render :index
    end

    private
    def event_params
      params.require(:event).permit(:name, :date, :body, :event_type)
    end
  end
end

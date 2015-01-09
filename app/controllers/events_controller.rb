class EventsController < ApplicationController

  # shallow
  def new
  end

  def create
    @event = Event.new(
      { section_id: params[:section_id] }.merge(event_params)
    )

    if @event.save
      flash[:notice] = ["Event created"]
      redirect_to section_url(@event.section_id)
    else
      flash.now[:errors] = @event.errors.full_messages
      render :back
    end
  end

  def index
  end


  # non-shallow
  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end


  private
  def event_params
    params.require(:event).permit(:name, :date, :event_type)
  end

end

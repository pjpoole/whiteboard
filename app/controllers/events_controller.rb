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
    @events = Event.find_by(section_id: params[:section_id])
  end


  # non-shallow
  def show
    @event = Event.includes(:posts).find(params[:id])
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])

    if @event.update(event_params)
      redirect_to @event
    else
      flash.now[:errors] = @event.errors.full_messages
      render :edit
    end
  end

  def destroy
    # TODO:
  end


  private
  def event_params
    params.require(:event).permit(:name, :date, :body, :event_type)
  end

end

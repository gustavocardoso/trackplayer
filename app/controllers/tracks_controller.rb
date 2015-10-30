class TracksController < ApplicationController
  
  layout "admin"

  def index
    @tracks = Track.order(:title)
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @tracks }
      format.json  { render :json => @tracks.to_json }
    end
  end

  def all
    @tracks = Track.order(:title)
    render :json => @tracks.to_json
  end

  def show
    @track = Track.find(params[:id])
  end

  def new
    @track = Track.new
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      redirect_to tracks_url, notice: "Track added with success!"
    else
      render :new
    end
  end

  def edit
    @track = Track.find(params[:id])
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      if !request.xhr?
        redirect_to tracks_url, notice: "Track updated with success!"
      else
        render nothing: true
      end
    else
      format.html { render :edit }
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
      redirect_to tracks_url, notice: "Track deleted with success!"
    else
      redirect_to tracks_url, notice: "An error occurred and the track wans not deleted!"
    end
  end

  private
  def track_params
    params.require(:track).permit(:title, :artist, :bpm, :duration, :observations, :file, :volume)
  end
end

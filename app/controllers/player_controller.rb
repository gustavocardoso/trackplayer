class PlayerController < ApplicationController
  def index
      @tracks = Track.order(:title)
  end
end

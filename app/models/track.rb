class Track < ActiveRecord::Base
  has_attached_file :file, :url => "/:class/:attachment/:id/:style_:filename"
  validates_presence_of :title, :artist, :bpm, :duration
  validates_format_of :duration, :with => /\A([0-9]?[0-9]):([0-9][0-9])\z/
  validates_attachment :file, :presence => true, :content_type => { :content_type => /^audio\/(mpeg|wav|mp3|ogg)/ }
end

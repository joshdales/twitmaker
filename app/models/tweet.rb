class Tweet < ActiveRecord::Base
  def to_json
    { message: message,
      time: created_at.strftime('%b %e, %l:%M %p') }
  end
end

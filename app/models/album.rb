class Album < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader
end

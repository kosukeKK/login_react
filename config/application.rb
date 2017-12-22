require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module LoginReact
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    #クロスオリジンの設定
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*' #[TODO]localhost:3000とかに設定 本番では書き換えないとセキュリティやばい
        resource '*', :headers => :any, :methods => [:get, :post, :put, :delete, :options]
      end
    end
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

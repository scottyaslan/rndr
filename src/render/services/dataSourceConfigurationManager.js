define([], function() {
    'use strict';

    return function(DataSourceConfiguration) {
        /**
         * {@link DataSourceConfigurationManager} constructor.
         */
        function DataSourceConfigurationManager() {
            this.init();
        }
        DataSourceConfigurationManager.prototype = {
            /**
             * @typedef DataSourceConfigurationManager
             * @type {object}
             * @property {object} dataSourceConfigurations - The map of registered {@link DataSourceConfiguration}'s.
             * @property {string} activeDataSourceConfiguration - The UUID of the active {@link DataSourceConfiguration}.
             */
            constructor: DataSourceConfigurationManager,
            /**
             * Initialize the {@link DataSourceConfigurationManager}.
             */
            init: function() {
                var self = this;
                self.dataSourceConfigurations = {};
                self.activeDataSourceConfiguration = undefined;
            },
            /**
             * Instantiates a {@link DataSourceConfiguration} and adds it to the manager by `name` for fast lookups.
             * 
             * @param  {string} name The name of the {@link DataSourceConfiguration}.
             * @param  {Object} httpConfig The configuration for a REST endpoint.
             * 
             * @return {string}      The UUID of the created `DataSourceConfiguration`.
             */
            create: function(name, httpConfig) {
                var self = this;
                var dataSourceConfiguration = new DataSourceConfiguration(name, httpConfig);
                self.add(dataSourceConfiguration);
                self.activeDataSourceConfiguration = dataSourceConfiguration.id;
                return dataSourceConfiguration.id;
            },
            /**
             * Adds a {@link DataSourceConfiguration} to the manager.
             * 
             * @param {DataSourceConfiguration} dataSourceConfiguration The {@link DataSourceConfiguration} to add.
             */
            add: function(dataSourceConfiguration) {
                var self = this;
                self.dataSourceConfigurations[dataSourceConfiguration.id] = dataSourceConfiguration;
            },
            /**
             * Deletes a {@link DataSourceConfiguration} from the manager by `id`.
             * 
             * @param  {string} id The UUID of the {@link DataSourceConfiguration} to remove from the manager.
             */
            delete: function(id) {
                var self = this;
                delete self.dataSourceConfigurations[id];
            }
        };

        return new DataSourceConfigurationManager();
    }
});

define(['render/directives/renderingEngineDirective',
        'render/services/aggregators',
        'render/services/aggregatorTemplates',
        'render/services/dataViews',
        'render/services/renderers',
        'render/services/RenderingEngine',
        'render/services/RenderingEngines',
        'render/services/dataUtils',
        'render/services/DataSourceConfiguration',
        'render/services/dataSourceConfigurationManager',
        'render/services/DataSource',
        'render/services/dataSourceManager'
    ],
    function(renderingEngineDirective,
        aggregators,
        aggregatorTemplates,
        dataViews,
        renderers,
        RenderingEngine,
        RenderingEngines,
        dataUtils,
        DataSourceConfiguration,
        dataSourceConfigurationManager,
        DataSource,
        dataSourceManager) {

        // Create module
        var app = angular.module('ngRndr', []);

        // Annotate module dependencies
        renderingEngineDirective.$inject = [];
        DataSourceConfiguration.$inject = ['dataUtils'];
        dataSourceConfigurationManager.$inject = ['DataSourceConfiguration'];
        DataSource.$inject = ['dataSourceConfigurationManager', '$q', '$rootScope', '$http'];
        dataSourceManager.$inject = ['DataSource'];
        aggregators.$inject = ['aggregatorTemplates', 'dataUtils'];
        aggregatorTemplates.$inject = ['dataUtils'];
        dataViews.$inject = [];
        renderers.$inject = [];
        RenderingEngine.$inject = ['aggregators', 'dataUtils', 'renderers', 'dataViews', '$q', '$timeout', '$window', '$rootScope'];
        RenderingEngines.$inject = ['RenderingEngine', 'dataSourceConfigurationManager', 'dataSourceManager', '$http'];
        dataUtils.$inject = [];

        // Module directives
        app.directive('renderingEngineDirective', renderingEngineDirective);

        // Module services
        app.service('DataSourceConfiguration', DataSourceConfiguration);
        app.service('dataSourceConfigurationManager', dataSourceConfigurationManager);
        app.service('DataSource', DataSource);
        app.service('dataSourceManager', dataSourceManager);
        app.service('aggregators', aggregators);
        app.service('aggregatorTemplates', aggregatorTemplates);
        app.service('dataViews', dataViews);
        app.service('renderers', renderers);
        app.service('RenderingEngine', RenderingEngine);
        app.service('RenderingEngines', RenderingEngines);
        app.service('dataUtils', dataUtils);
    });

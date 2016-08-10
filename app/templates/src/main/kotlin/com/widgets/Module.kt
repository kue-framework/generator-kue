package <%= basePackage %>

import com.google.inject.AbstractModule
import <%= basePackage %>.controllers.WidgetController
import <%= basePackage %>.services.WidgetService
import <%= basePackage %>.services.impl.DefaultWidgetService

class Module : AbstractModule() {

    override fun configure() {
        bind(Routes::class.java).asEagerSingleton()
        bind(WidgetController::class.java)
        bind(WidgetService::class.java).to(DefaultWidgetService::class.java)
    }
}

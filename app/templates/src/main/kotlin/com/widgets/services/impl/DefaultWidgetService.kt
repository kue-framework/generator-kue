package <%= basePackage %>.services.impl

import <%= basePackage %>.models.db.Widget
import <%= basePackage %>.models.dto.CreateWidgetRequest
import <%= basePackage %>.services.WidgetService
import com.avaje.ebean.Ebean

class DefaultWidgetService : WidgetService {

    override fun create(createWidgetRequest: CreateWidgetRequest): Widget {
        val widget = Widget(createWidgetRequest)
        widget.save()
        return widget
    }
    
    override fun list(): List<Widget> = Ebean.find(Widget::class.java).findList()

}

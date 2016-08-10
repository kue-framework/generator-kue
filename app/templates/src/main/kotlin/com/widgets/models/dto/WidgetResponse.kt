package <%= basePackage %>.models.dto

import <%= basePackage %>.models.db.Widget
import java.util.*

data class WidgetResponse(val id: UUID?, val name: String?, val color: String?)

fun widgetResponse(widget: Widget) = WidgetResponse(widget.id, widget.name, widget.color)

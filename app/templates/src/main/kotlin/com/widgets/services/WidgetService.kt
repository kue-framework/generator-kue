package <%= basePackage %>.services

import <%= basePackage %>.models.db.Widget
import <%= basePackage %>.models.dto.CreateWidgetRequest

interface WidgetService {

    fun create(createWidgetRequest: CreateWidgetRequest) : Widget

    fun list() : List<Widget>

}

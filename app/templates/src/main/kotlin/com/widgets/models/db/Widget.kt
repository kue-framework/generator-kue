package <%= basePackage %>.models.db

import com.avaje.ebean.Model
import <%= basePackage %>.models.dto.CreateWidgetRequest
import java.util.*
import javax.persistence.Entity
import javax.persistence.Id


@Entity
class Widget(
        @Id var id: UUID?,
        var name: String?,
        var color: String?
) : Model() {

    constructor(createWidgetRequest: CreateWidgetRequest) : this(null, createWidgetRequest.name,
            createWidgetRequest.color)

}

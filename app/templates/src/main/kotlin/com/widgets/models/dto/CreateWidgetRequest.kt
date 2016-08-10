package <%= basePackage %>.models.dto

import com.fasterxml.jackson.annotation.JsonProperty

data class CreateWidgetRequest(@JsonProperty("name") val name: String?, @JsonProperty("color") val color: String?)

package <%= basePackage %>.controllers

import spark.Route

fun securedPolitely(next: Route) = Route() { req, res ->
    if ("please".equals(req?.headers("Authorization") ?: "")) {
        next.handle(req, res)
    } else {
        res?.status(401)
        ""
    }
}

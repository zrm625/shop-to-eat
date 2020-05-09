package com.zrm.server;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class IndexController {

    public static final String INDEX_MAPPING = "/";
    public static final String INDEX_RETURN = "Hi!";

    @RequestMapping(INDEX_MAPPING)
    public String index() {
        return INDEX_RETURN;
    }
}
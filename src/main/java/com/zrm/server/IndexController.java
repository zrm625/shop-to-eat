package com.zrm.server;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class IndexController {

    public static final String ADD_MAPPING = "/hi";
    public static final String INDEX_RETURN = "Hi!";

    @RequestMapping(ADD_MAPPING)
    public String add() {
        return INDEX_RETURN;
    }
}
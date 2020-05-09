package com.zrm.server;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class APIController {
    static final Logger logger = LoggerFactory.getLogger(APIController.class);

    public static final String ADD_MAPPING = "/hi";
    public static final String INDEX_RETURN = "Hi!";

    @RequestMapping(ADD_MAPPING)
    public String add() {
        logger.debug(ADD_MAPPING);
        return INDEX_RETURN;
    }
}
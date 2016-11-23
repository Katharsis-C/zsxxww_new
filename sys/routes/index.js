var express = require('express');
var router = express.Router();
var path = require('path');
var dirname = path.dirname(__dirname);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(dirname + '/public/html/index.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/index.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/index.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/gallery', function (req, res, next) {
    res.sendFile(dirname +'/public/html/gallery.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/gallery.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/gallery.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_foreword.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_foreword.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_introduction.html', function (req, res, next) {
    res.sendFile(dirname + '/public/html/guide_introduction.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_clienterror.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_clienterror.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_join.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_join.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_newclient.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_newclient.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_paper.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_paper.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_pcPrepare1.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_pcPrepare1.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_pcprepare2.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_pcprepare2.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_pcset1.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_pcset1.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_pcset2.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_pcset2.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_pcset3.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_pcset3.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_phonePrepare.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_phonePrepare.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_phonerepair.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_phonerepair.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_phoneset.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_phoneset.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_pppoeerror.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_pppoeerror.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_repair.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_repair.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/guide_wechat.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/guide_wechat.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

router.get('/join.html', function (req, res, next) {
    res.sendFile(dirname +'/public/html/join.html', function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    })
});

module.exports = router;

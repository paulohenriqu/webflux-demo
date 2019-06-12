var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "59261",
        "ko": "739"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "301",
        "ko": "33"
    },
    "maxResponseTime": {
        "total": "7669",
        "ok": "7669",
        "ko": "5262"
    },
    "meanResponseTime": {
        "total": "646",
        "ok": "641",
        "ko": "1111"
    },
    "standardDeviation": {
        "total": "514",
        "ok": "508",
        "ko": "731"
    },
    "percentiles1": {
        "total": "481",
        "ok": "477",
        "ko": "1018"
    },
    "percentiles2": {
        "total": "763",
        "ok": "751",
        "ko": "1149"
    },
    "percentiles3": {
        "total": "1416",
        "ok": "1410",
        "ko": "2292"
    },
    "percentiles4": {
        "total": "3069",
        "ok": "3003",
        "ko": "4455"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 46126,
        "percentage": 77
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8362,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4773,
        "percentage": 8
    },
    "group4": {
        "name": "failed",
        "count": 739,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "588.235",
        "ok": "580.99",
        "ko": "7.245"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "60000",
        "ok": "59261",
        "ko": "739"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "301",
        "ko": "33"
    },
    "maxResponseTime": {
        "total": "7669",
        "ok": "7669",
        "ko": "5262"
    },
    "meanResponseTime": {
        "total": "646",
        "ok": "641",
        "ko": "1111"
    },
    "standardDeviation": {
        "total": "514",
        "ok": "508",
        "ko": "731"
    },
    "percentiles1": {
        "total": "481",
        "ok": "477",
        "ko": "1018"
    },
    "percentiles2": {
        "total": "763",
        "ok": "751",
        "ko": "1149"
    },
    "percentiles3": {
        "total": "1416",
        "ok": "1410",
        "ko": "2292"
    },
    "percentiles4": {
        "total": "3069",
        "ok": "3003",
        "ko": "4455"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 46126,
        "percentage": 77
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8362,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4773,
        "percentage": 8
    },
    "group4": {
        "name": "failed",
        "count": 739,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "588.235",
        "ok": "580.99",
        "ko": "7.245"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

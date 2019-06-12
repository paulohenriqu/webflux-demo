var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "90000",
        "ok": "89548",
        "ko": "452"
    },
    "minResponseTime": {
        "total": "301",
        "ok": "301",
        "ko": "1013"
    },
    "maxResponseTime": {
        "total": "31973",
        "ok": "31088",
        "ko": "31973"
    },
    "meanResponseTime": {
        "total": "1330",
        "ok": "1296",
        "ko": "8030"
    },
    "standardDeviation": {
        "total": "2857",
        "ok": "2745",
        "ko": "9399"
    },
    "percentiles1": {
        "total": "746",
        "ok": "743",
        "ko": "3419"
    },
    "percentiles2": {
        "total": "1088",
        "ok": "1081",
        "ko": "9860"
    },
    "percentiles3": {
        "total": "3745",
        "ok": "3616",
        "ko": "28716"
    },
    "percentiles4": {
        "total": "14760",
        "ok": "14414",
        "ko": "31327"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 49207,
        "percentage": 55
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23034,
        "percentage": 26
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 17307,
        "percentage": 19
    },
    "group4": {
        "name": "failed",
        "count": 452,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "676.692",
        "ok": "673.293",
        "ko": "3.398"
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
        "total": "90000",
        "ok": "89548",
        "ko": "452"
    },
    "minResponseTime": {
        "total": "301",
        "ok": "301",
        "ko": "1013"
    },
    "maxResponseTime": {
        "total": "31973",
        "ok": "31088",
        "ko": "31973"
    },
    "meanResponseTime": {
        "total": "1330",
        "ok": "1296",
        "ko": "8030"
    },
    "standardDeviation": {
        "total": "2857",
        "ok": "2745",
        "ko": "9399"
    },
    "percentiles1": {
        "total": "746",
        "ok": "743",
        "ko": "3419"
    },
    "percentiles2": {
        "total": "1087",
        "ok": "1081",
        "ko": "9860"
    },
    "percentiles3": {
        "total": "3748",
        "ok": "3613",
        "ko": "28716"
    },
    "percentiles4": {
        "total": "14760",
        "ok": "14417",
        "ko": "31327"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 49207,
        "percentage": 55
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23034,
        "percentage": 26
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 17307,
        "percentage": 19
    },
    "group4": {
        "name": "failed",
        "count": 452,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "676.692",
        "ok": "673.293",
        "ko": "3.398"
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

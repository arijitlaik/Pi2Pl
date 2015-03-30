    torad = function (degrees) {
        return degrees * Math.PI / 180;
    };

    todeg = function (radians) {
        return radians * 180 / Math.PI;
    };
    isvalid = function (strike, dip, pitch) {
        var validity = 1;
        $("#invalid").html("");
        if (strike < 0 || strike > 360) {
            $("#invalid").append("<p>Strike has to >=0&deg and < 360&deg </p>");
            validity = 0;
        }
        if (dip < 0 || dip > 91) {
            $("#invalid").append("<p>Dip amount can't be greater than 90&deg</p>");
            validity = 0;

        }
        if (pitch < 0 || pitch > 91) {
            $("#invalid").append("<p>pitch can't be greater than 90&deg</p>");
            validity = 0;
        }
        return validity;
    }

    $(document).ready(function () {

        $("#doPi2PL").click(function () {
            var da = $('#dipamt').val();
            var st = $('#strike').val();
            var pp = $('#lpitch').val();

            if (isvalid(st, da, pp)) {
                da = torad(da);
                pp = torad(pp);
                st = +st;
                $("#invalid").html("");
                var pl = todeg(Math.asin(Math.sin(da) * Math.sin(pp)));
                var of = 0;
                var ps = st;
                if ($('#psS').prop('checked')) {
                    of = 180;
                    pp = 2 * Math.PI - pp;
                    ps = (ps + of) % 360;
                };
                var pd = +of + st + todeg(Math.atan(Math.cos(da) * Math.tan(pp)));

                $("#plungeamt").val(pl);
                $("#plungedir").val(pd);

                var dd = st + 90;

                if (dd < 22.5 || dd > 337.5) {
                    dd = "N";
                }
                if (dd >= 22.5 && dd <= 67.5) {
                    dd = "NE";
                }
                if (dd > 67.5 && dd < 112.5) {
                    dd = "E";
                }
                if (dd >= 112.5 && dd <= 157.5) {
                    dd = "SE";
                }
                if (dd > 157.5 && dd < 202.5) {
                    dd = "S";
                }
                if (dd >= 202.5 && dd <= 247.5) {
                    dd = "SW";
                }
                if (dd > 247.5 && dd < 295.5) {
                    dd = "W";
                }
                if (dd >= 295.5 && dd <= 337.5) {
                    dd = "NW";
                }
                $("#datain").html(
                    'Entered Data <p>Plane: <b>' +
                    st +
                    '/' +
                    +$('#dipamt').val() +
                    '&rarr;' +
                    dd +
                    '</b></br>Pitch of the line: <b>' +
                    +$('#lpitch').val() +
                    '&deg' +
                    ' from ' +
                    ps +
                    '</b></p>');
            }
        });

        $("#roundoff").click(function () {
            $("#plungeamt").val(Math.round(+$("#plungeamt").val()));
            $("#plungedir").val(Math.round(+$("#plungedir").val()));

        });

        $("#cleanup").click(function () {
            $("input").val(' ');
            $("#datain").html('Enter new values to re-calulate');
        });

    });

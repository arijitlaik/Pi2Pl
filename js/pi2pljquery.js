    torad = function (degrees) {
        return degrees * Math.PI / 180;
    };

    todeg = function (radians) {
        return radians * 180 / Math.PI;
    };
    $(document).ready(function () {

        $("#doPi2PL").click(function () {
            var da = torad($('#dipamt').val());
            var st = +$('#strike').val() % 360;
            var pp = torad($('#lpitch').val());
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
                document.getElementById('dipamt').value +
                '&rarr;' +
                dd +
                '</b></br>Pitch of the line: <b>' +
                document.getElementById('lpitch').value +
                '&deg' +
                ' from ' +
                ps +
                '</b></p>');
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

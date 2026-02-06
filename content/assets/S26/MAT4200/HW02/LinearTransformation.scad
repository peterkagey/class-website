color("red") {
    cylinder(20,4,4);
    translate([3.5,0,0]) cube([15,8,8],center=true);
    translate([-1,2,16]) linear_extrude(height = 3) text("r");
}

color("blue")
multmatrix([
    [-0.707107, 0.408, 0.57735],
    [ 0.707107, 0.408, 0.57735],
    [ 0,        -0.816, 0.57735]
]) {
    cylinder(20,4,4);
    translate([3.5,0,0]) cube([15,8,8],center=true);
    translate([-1,2,16]) linear_extrude(height = 3) text("r");
}
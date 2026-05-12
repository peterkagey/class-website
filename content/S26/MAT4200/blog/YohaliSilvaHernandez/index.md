---
title: Reinventing Pasta Geometry: Modeling, Failure, and Discovery Inspired by Pasta by Design
author: Yohali Silva Hernandez
date: 2026-05-11
type: blog
courseNumber: MAT4280
term: S26
layout: layouts/blog.njk
---

When I first flipped through *Pasta by Design*, I expected a blend of math and food. What I didn’t expect was how deeply it would pull me into questions about structure, material behavior, and the limits of digital modeling. This project started as an attempt to recreate a few of the pasta geometries from the book, however it quickly turned into something more experimental. I began designing my own pasta shapes and learning what would work and what failed.

I started this project by going through *Pasta by Design* by George L. Legendre, and honestly it was kind of different from what I expected. It doesn’t really treat pasta like food so much as shapes you can build with math. A lot of the designs come down to pretty simple curves that get twisted, stretched, or repeated in patterns. Once I got past that idea, it made more sense to think of the pasta as something closer to a 3D model than something you’d just cook.

The first thing I tried was making a spiral shape kind of like a fusilli. I used a helix curve and then basically wrapped a circular tube around it. At first it worked, but then I started messing with the spacing and the angle of the spiral and it got weird pretty fast. If the spacing was too wide, it didn’t look like pasta anymore, just like a stretched spring. If it was too tight, parts of the shape started overlapping, which obviously wouldn’t work in real life. So even though the math part was simple, getting something that actually looked right took a lot of adjusting.

After that I started experimenting more and kind of mixing ideas. One design I came up with was a tube that twists while also changing thickness as it goes, so it kind of bulges in and out along the spiral. It looked cool, but it also made me realize how hard it is to keep everything consistent. Some parts ended up way thinner than others, which would probably make it fragile or cook unevenly if it were real pasta.

One thing I kept running into was that shapes that look nice mathematically don’t always make sense physically. Either they intersect themselves, get too thin, or would be really hard to actually produce. I also noticed that symmetry helps a lot. When something is evenly patterned, it just looks more “right,” but when I tried making more random or uneven designs, they just looked off unless I spent a lot more time tweaking them.


This post walks through three stages: 
(1) reproducing designs from the book
(2) extending them into original forms
(3) reflecting on what broke [a lot )’:] and what those failures taught me.

**1. Recreating Pasta from Mathematical Rules**
Legendre’s central idea is that pasta can be described through parametric curves and transformations. Instead of thinking “penne” or “fusilli,” you think in terms of equations:
-A base curve (often a line, sine wave, or spiral)
-A cross-sectional profile (circle, ellipse, ribbon)
-A transformation (twist, scale, extrusion)
I started with a simple model: a helical pasta inspired by fusilli. The parametric equation:
-x = r cos(t)
-y = r sin(t)
-z = kt
Where r is the radius and k controls vertical spacing.
In a 3D modeling tool (I used Blender):
-Generated a helix curve
-Created a circular profile
-Used the bevel modifier changing it (BezierCircle) from round to object

What worked:
This produced a visually accurate spiral pasta fairly quickly.
What didn’t:
The geometry looked right but wasn’t manufacturable. The spacing between coils was too tight, meaning dough would stick together in real life. 
Already, I hit the first major lesson, mathematical elegance doesn’t guarantee physical viability.

**2. Designing My Own Pasta Shapes**
After recreating a few canonical forms, I tried designing something original. 
My goal: 
A pasta shape that maximizes sauce retention while staying structurally stable.
Concept: “Wave Ribbon Pasta”
I started with a sine wave as a base curve:
-x = t
-y = sin(t)
-z = 0
Then I extruded a thin rectangular strip along that curve and added a twist proportional to curvature.

2D Version:
Here’s a simplified 2D SVG representation of the underlying waveform:
<svg width="500" height="200" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M 0 100 
           Q 50 0, 100 100 
           T 200 100 
           T 300 100 
           T 400 100 
           T 500 100"
        stroke="goldenrod" fill="none" stroke-width="4"/>
</svg>

3D Version:
In 3D, this becomes a ribbon that oscillates side to side, creating pockets for sauce.

What worked:
-The alternating curvature created natural “cups”
-The ribbon structure would likely dry faster (less bulk than solid pasta)
What didn’t:
-Twisting the ribbon introduced stress concentrations (and would likely break in real handling)

**3. Iteration Through Failure**
Most of my designs failed in one of three ways:
   A. Structural Weakness
Thin pasta looks elegant but breaks easily. I tried reducing thickness gradually, but there’s a threshold below which the geometry collapses under its own weight.
Lesson:
 Thicker pasta = durable but dense
 Thinner pasta = delicate but fragile
   B. Manufacturing Constraints
Some designs would most likely be impossible to extrude or mold.
For example, I made a “nested spiral” where two helices intertwined. It looked great digitally however it probably would not be able to extrude through a die and it required impossible internal voids.
Lesson:
Not all geometries are compatible with traditional pasta-making processes. Extrusion imposes strict topological limits.
   C. Cooking Behavior
Even if a shape prints or models well, cooking introduces new constraints, such as the following
Uneven thickness → uneven cooking
Tight folds → undercooked interiors
Flat surfaces → sauce slides off

**4. A More Successful Design: “Helical Cup Pasta”**
After several failures, I landed on a more balanced design.
Geometry:
Base: helix (like fusilli)
Cross-section: slightly concave arc (instead of a circle)
Moderate spacing between turns
Why it worked:
-The concave cross-section held sauce better
-The helix provided structural strength
-Even thickness ensured consistent cooking
Lesson:
I thought I’d need to come up with totally new shapes, but just tweaking ones that already worked turned out way better. Turns out, building off what exists beats starting from zero.

**5. Tradeoffs in Pasta Design**
No matter what I tried, I kept running into the same kind of problems
 1. Aesthetics vs Function
Some of the most better looking designs were the least practical. Complex folds and intricate curves don’t necessarily improve the eating experience.
 
 2. Mathematical Purity vs Physical Reality
The math makes everything look clean and perfect, but the dough has a mind of its own
-It sags
-It sticks
-It resists sharp curvature

 3. Novelty vs Manufacturability
If a shape can’t be extruded, stamped, or cut efficiently, it’s unlikely to exist outside a prototype.

**6. What I’d Do Next**
If I were to continue with this project, I’d push this project in two directions:
Simulation: Use physics-based modeling to predict breakage and cooking deformation
3D Printing: Actually print pasta dough to test real world viability
Right now, my designs live mostly in the digital world but pasta is ultimately about texture, taste, and physical interaction. Working through Pasta by Design honestly changed how I look at everyday stuff. Pasta isn’t just food, it’s geometry and engineering hiding in something super familiar. The biggest thing I took away wasn’t making the ‘perfect’ pasta shape. It was realizing how many limits you’re dealing with at the same time. The math might look nice, but the dough doesn’t always go along with it. A lot of this was just trying things, messing up, and figuring out why. What surprised me most was that the more I tried to come up with something totally new, the more I started to respect the traditional shapes. They actually make a lot of sense. There’s real thought behind them.  They’re not random at all!

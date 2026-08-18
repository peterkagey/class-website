---
title: Waffle fries are... Lattices?
author: Alexis Camacho
date: 2026-05-11
type: blog
courseNumber: MAT4170
term: S26
layout: layouts/blog.njk
---
Have you ever tried to go from playing Checkers to Chess?
The game of Checkers is fairly simple, every piece can make the same moves and there's not much complexity to it. But what happens when you change the pieces, give them different names, and limit what moves they can make. You end up creating a more complex game structure and we get the game of Chess. It's not exactly quite that simple, but in one way or another you can create that relation.
In algebra, many structures are the same way. We can start with something basic, like a *magma*, something that only consists of the closure property and a single binary operation, and transform it into a *Lattice* by adding structure and more properties to sustain the structure.

# What is a Lattice?


**A *Lattice* is defined as an algebraic structure that consists of a partially ordered set $(L,\\leq)$ where for any two elements in $a$ and $b$ in $L$, there exists a least upper bound (denoted as $a \\lor b$, or "join") and a greatest lower bound (denoted as $a \\land b$, or "meet")**.
The "join" operation is the smallest element that is greater or equal to both *a* and *b*. The "meet" operation is the largest element that is less than or equal to both *a* and *b*.

Part of the structure of a *lattice* is that it satisfies several properties, for both operations. A Lattice must be idempotent, commutative, and associative, as well as satisfy absorption laws.

We can generate different lattices within different contexts, such as partially ordered sets, intermediate fields, symmetry groups, vectors, or integers. One of the simplest to understand and see the structure of a lattice clearly is through a Power Set. The **join** operation is represented by the union of two subsets, while the **meet** operation is represented by the intersection of two subsets. Consider we have a set $A=\\{a,b\\}$ and its power set is: $\\{\\emptyset, \\{a\\}, \\{b\\}, \\{a,b\\}\\}$. Notice that all the elements are unique and have a well-defined "join" and "meet" operation, which is key to maintaining a lattice structure. Obviously, just by hierarchy of the sets, the empty set would be placed at the bottom of the lattice, followed by the subsets $\\{a\\}$ and $\\{b\\}$ in the second row above, and finally the subset $\\{a,b\\}$ would be at the top. Visually, it looks like a diamond shape.

Take a look at this:
```
        {a,b}
       /     \
     {a}     {b}
       \     /
         ∅

{a} ∪ {b} = {a,b}
{a} ∩ {b} = ∅
A = ∅, B = {a}, C = {b}, D = {a,b}
```
This diagram is an example of a Hasse diagram, by the way, and it just helps to visualize a partially ordered set. The "join" operation here would be the operation of taking the union of sets $\\{a\\}$ and $\\{b\\}$ to form $\\{a,b\\}$. While the "meet" operation would be intersecting those two disjoint sets to give us the empty set. Our union of the sets gives us the smallest combined set while the intersection gives us the greatest common part. When we create a divisibility lattice of integers, the join gives us the smallest common multiple while the meet gives us the greatest common factor, if that makes it easier to understand how these operations work.

**But do the properties hold??** *Yes! Yes, they do.* First, taking the union and intersection of two sets is associative:

$$
  \\begin{align*}
    (A \\cup B) \\cup C &= A \\cup (B \\cup C) \\\\
    (A \\cap B) \\cap C &= A \\cap (B \\cap C)
  \\end{align*}
$$

First one checked out.

Next step: Commutativity. Well,

$$
  \\begin{align*}
    A \\cup B &= B \\cup A \\\\
    A \\cap B &= B \\cap A
  \\end{align*}
$$

Okay, so far so good.

Next step: Idempotency. This property means repeating something over and over won't change the result and would be the same as doing it once. Once we union two sets or intersect them, it's the same as if we were to do it multiple times. It's kind of like when you push the button for the elevator multiple times, thinking it might go faster, but really it's the same as just pushing it once...(sorry if I just broke anyone's reality for saying that).

Last step, finally, what is an absorption law? It basically means whichever operation gets done first, gets absorbed into the other one done after. For example:

$$
  \\begin{align*}
    A \\cap (A \\cup B) &= A \\\\
    A \\cup (A \\cap B) &= A
  \\end{align*}
$$

Whatever operation done inside the parentheses basically doesn't matter anyway because the result will always be the original element. It really works *because* of all the other properties that lattices hold like being commutative and idempotent.

Again, a lattice of sets isn't the only example we have, and now knowing the properties we can understand why lattices of over other elements work.

## Why do we even care?
Have you ever had the waffle fries from Chick-fil-A? That's why we care! (Just kidding) But really, that waffle structure with the criss-cross pattern is very visually comparable to a lattice. Obviously the fry itself isn't the type of lattice we are referring to, since it isn't this abstract thing we defined, but it's pretty close.

In all seriousness, we care about lattices because it helps solidify reasoning about structure and order for a lot of mathematical concepts. We care about why and how things work in the math world and we use numbers and computations to make sense of things. Understanding how one thing works helps us understand how other more complex things work and when we learn new rules and how different structures work, we can generalize and understand theorems.

One really important reason of why we *care* about lattices is because of how it shows up in data science and analysis. Data programs and databases are naturally ordered and have some structure to them, and that's partially due to how lattices show up, it just provides a more formal way to understand any of the data. We can also see parts of the lattice structure within Boolean algebra, which is used heavily in coding and computer science. If you're familiar with how Boolean algebra works and things like DeMorgan's Law, the mini proofs of how the lattice properties work look and feel very similar! Maintaining a lattice's structure has a lot to do with the logic behind how the operations work.

### How did we even get here?
So, when we look hard enough, we can see that lattices show up in a lot of different ways within the math world and outside of it. Understanding how we go from something simple like a set to something more structured like a lattice, feels a lot like going from Checkers to Chess. The added rules for each piece's movement and how to win the game is like the different added properties and the operations allowed in the structure. Everything in math works the same way. If you think about it, we started with numbers and counting and somehow got the entire field of Calculus. We can even go from Lattices to more complex things (like Boolean Algebra!). If you're someone who likes structure and things with rules, lattices are a good example. If not, just enjoy your Chick-fil-A and forget I said anything!


Sources used:

GeeksforGeeks, <a href="https://www.geeksforgeeks.org/engineering-mathematics/lattices/">Lattices</a>

Algebra: abstract and concrete / Frederick M. Goodman— ed. 2.6
ISBN 978-0-9799142-1-8

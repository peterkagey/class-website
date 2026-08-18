---
title: Futurama
author: Israel Rojas
date: 2026-05-01
type: blog
courseNumber: MAT4170
term: S26
layout: layouts/blog.njk
---

Imagine you’re in a situation in which you spent your entire life working on this machine that allows you to transfer one consciousness from one body to another. After testing on rats, you make this machine completely safe for living things. You call over one of your lab partners who has been helping you throughout this entire process, and you finally use it on the two of you. Of course, as the creator of this machine, you should be one of the first people to be tested on it.

<video controls src="animation.mp4" alt=""></video>

And it worked. It actually worked! The consciousness transfer completely worked as you look at your own body through the eyes of your lab partner, and after a bit of fun in your new body, you call it enough and decide to go back to your body. However, it turns out there has been a slight oversight. The machine does not work in reverse, which means as soon as one consciousness goes from one body to another, it cannot move back. Okay, no biggie, right? We just have to call over one more person… right? Well let us gather the information of what we do know.

What is limiting us and how exactly does the machine work? What are the rules of our machine? And why didn’t you double-check your work?!

Well, we know the machine can only go “forward” in some sense since we are not allowed to reverse swaps, so we have to limit ourselves to a restriction that does not let us use the idea of an inverse. In order for us to go back into our original bodies, we need to form some sort of cycle that allows us to loop back to our original bodies.

I ended off the intro with the idea of just adding one more person, so let’s fully break that down to see if it works, heads in the right direction, or just makes the situation worse.

Your mind (mind A) is now in your partner’s body (which we can label as 2), and your partner’s mind (mind B) is in your body (which we can say is 1). Now we add in body 3 with mind C from a helpful volunteer.

So we went from
(A1)(B2) → (A2)(B1)

as we established before, we cannot just swap A and B back. So with a little help from another person C and start using swaps with them, we begin to see that we can slowly move minds back into their correct bodies without repeating any swaps. With enough steps, we can eventually return everyone to their original body.

(A2)(B1)(C3) → (A3)(B1)(C2)

At this point, there are no combinations that will allow us to see any further progress, and continuing this way will only cause more mayhem, so let’s add another person,D:

(A3)(B1)(C2)(D4)

Now we can continue:

(A3)(B1)(C2)(D4) → (A3)(B4)(C2)(D1)
(A3)(B4)(C2)(D1) → (A1)(B4)(C2)(D3)
Hey! Person A now has their original conciousness! That's one down!

(B4)(C2)(D3) → (B2)(C4)(D3)
Another one down!


(C4)(D3) → (C3)(D4)

Great! Everyone is now back in their original body. With only needing two additions, we’ve come full circle, but what if we were in an even worse scenario and started swapping without a cap and not realizing we can’t go back? Thank godness we didn't go crazy and started swapping from the rats from earlier.

Is there a solution to this? Well before we get into that let us shift to see how this connects back to our class. The majority of these concepts/ideas we have seen in class, which connect very well to our lessons and give us the foundation for the ideas we will use as we continue down this rabbit hole. We will have to discuss these when we get into the nitty-gritty of it, since every body swap can be modeled as a transposition in a symmetric group, and the entire problem comes down to figuring out how we can undo a permutation without using the inverse or reusing previous transpositions.

As we saw earlier from our short demostration, this comes in the form of adding two new people to help us. With everything laid out for our little problem, we now have our answers for our questions from the intro, our limitations, we know how much extra people we need, and a goal for the end of this.

Since we are looking at making this for a more general case, we will say there is a shuffle of n bodies that use the machine to showcase the mayhem if we never hit the wall of swap witht the same person. With the knowledge that we can always get back to our original bodies with the addition of two people who have never swapped minds with anyone, labeled X and Y, and their minds can be labeled as n+1 and n+2 respectively, we can now move forward.

With the limitations and the importance of the arrangement of our bodies, we can determine that we are working with a permutation problem. So we will suppose that π ∈ Sₙ, and it can be written as a product of distinct transpositions.

Then it follows that there exists some σ ∈ Sₙ₊₂ such that
σπ = id

which represents everyone returning to their original bodies.

With our skeleton proof ready, we can now start working through the general idea.

Let us shuffle the minds of n bodies as much as we would like, and write these combinations as a permutation in two-row notation. The top row represents the list of bodies, and the bottom row represents the minds that end up in each body. Instead of focusing on both at the same time, we can actually just focus on one cycle at a time.

Let us add a visual to understand what is happening:

(A  B  C  D)
(2  1  4  3)

which can be written in cycle notation as:

(A B)(C D)

With the interpretation of cycle notation in our heads, we can now better understand how to fix the situation without having to use trial and error. For each cycle, we use the introduction of two people X and Y, who act as temporary placeholders that allow us to move each mind step by step without fear of repeating any swaps.

So the important idea is not just the exact pattern
(AX)(BY)(CX)(DY),

but that X and Y let us break the cycle apart and move each mind back into its correct body one step at a time. X helps pull minds out of the cycle, and Y helps put them back correctly.

Since every permutation can be broken into cycles, and each cycle can be handled in the same way, we can conclude that no matter how complicated the shuffle becomes, two extra people are enough to return everyone to their original bodies.

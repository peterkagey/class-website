---
title: Ron Graham's sequence
layout: layouts/base
courseNumber: MAT4111A
term: F25
type: problems
week: 15
---
# Ron Graham's Sequence
We'll spend out final class of MAT 4111A working through and generalizing the Putnam problem that put me on the trajectory to be a math professor: 2013's A2.

{% include 'content/F25/MAT4111A/problems/contest-problems/putnam/2013_A2.html' %}

#### Problem 0
Start by computing as many terms of this function as you can, and making observations along the way.
<ol>
  <li>
    Can you show that $f(3) \leq 8$ by finding an increasing sequence
    $$3 < a_1 <\underbrace{8}_{a_2}$$
    whose product is a perfect square?
  </li>
  <li>
    Can you show that $f(5) \leq 10$ by finding an increasing sequence
    $$5 < a_1 < a_2 < \dots < a_{r-1} < \underbrace{10}_{a_r}$$
    whose product is a perfect square?
    Is this the only such sequence that proves this upper bound?
  </li>
  <li>
    Can you prove that $f(5) \neq 9$? That $f(5) \neq 8$?
  </li>
  <li>
    Can you prove that $f(8) \leq 15$? That $f(14) = 21$? That $f(52) = 65$?
  </li>
</ol>

#### Problem 1
Prove the claim in the Putnam question. (Note, we say a function is injective if
$f(m) = f(n)$ implies $m = n$.)

<details>
  <summary>Hint #1</summary>
  Set this up as a proof by contrapositive. Suppose that $m \neq n$ and conclude that $f(m) \neq f(n)$. Morever, assume without loss of generality that $m < n$.
</details>
<details>
  <summary>Hint #2</summary>
  Do a proof by contradiction. Assume that $f(m) = f(n)$ but $m < n$.
</details>
<details>
  <summary>Hint #3</summary>
  If $N$ is square and $d$ is a square divisor of $N$, then $N/d$ is square. Also if $N$ and $M$ are square, then $NM$ is square.
</details>
<details>
  <summary>Hint #4</summary>
  Let
  $$m < a_1 < \dots < a_{r-1} < \underbrace{f(m)}_{a_r}$$
  and
  $$n < b_1 < \dots < b_{t-1} < \underbrace{f(n)}_{b_t}$$
  be sequences whose products are square and notice that $a_r = b_t$.
</details>
<details>
  <summary>Hint #5</summary>
  How do you know that
  $$m \cdot a_1 \cdots a_{r-1} \cdot f(m) \cdot n \cdot b_1 \cdots b_{t-1} \cdot f(n)$$
  is a square.
  How do you know that if you divide this product by $f(n)^2$, it's still a square?
  Why does this imply that there is an increasing sequence that begins with $m$ and ends with something smaller than $f(m)$ whose product is square?
  Why is this a contradiction?
</details>

#### Problem 2
<ol>
  <li>
    We're going to extend the sequence so that $\bar f(s^2) = s^2$ for all nonnegative integers $s$. Show that prime numbers are <em>not</em> in the image of this sequence.
  </li>
  <li>
    Prove that every composite number is in the image of $\bar f\colon \mathbb{N} \to \mathbb{N}$.
    (i.e. this sequence is a <em>bijection</em> from $\mathbb{N} = \{0, 1, 2, \dots\}$ to the nonnegative non-prime integers.)
    <details>
      <summary>Hint #6</summary>
      Consider the following "dual" construction: let h(k) be the largest integer such that there exists an increasing function
      $$h(k) = a_0 < a_1 < \dots a_r = k$$
      where $a_0 a_1 \dots a_r$ is square.
    </details>
    <details>
      <summary>Hint #7</summary>
      Does $h(\bar f(n)) = n$? Does $\bar f(h(k)) = k$?
    </details>
  </li>
</ol>

#### Problem 3
<p>
  <b>Definition.</b> Let $g\colon \mathbb{N} \to \mathbb{N}$ be defined as $g(n) = k$ where $k$ is the least integer such that there exists a sequence $n < a_1 \leq a_2 \leq \dots \leq a_t$ such that $na_1a_2 \dots a_t$ is a perfect <i>cube</i>.
</p>
<p>
  Prove or disprove the following: <ul>
    <li>The function $g$ is a injection.</li>
    <li>The function $g$ is surjective onto the non-prime integers.</li>
  </ul>
</p>

---
title: Chinese remainder theorem
layout: layouts/base
courseNumber: MAT4111A
term: F25
type: problems
week: 8
---
# The Chinese Remainder Theorem
<i>See Evan Chen's 2014 article on [The Chinese Remainder Theorem](https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/crt.pdf).</i>
<p>The <b>Chinese remainder theorem</b> states that if $m_1, m_2, \dots m_k$ are pairwise coprime (i.e., $\gcd(m_i, m_j) = 1$ for all $i \neq j$) then for all $r_1, r_2, \dots, r_i,$ the system of congruences \[
  \begin{align*}
    n \equiv &\ r_1 \pmod{m_1} \\
    n \equiv &\ r_2 \pmod{m_2} \\
    \        & \vdots \\
    n \equiv &\ r_k \pmod{m_k}
  \end{align*}
\] has a unique solution for $n$ modulo $m_1m_2\cdots m_k$.</p>

## Problem 0
<p>
  Find an integer $n$ simultaneously satisfying the following congruences \[
  \begin{align*}
    n \equiv &\ 1 \pmod{2} \\
    n \equiv &\ 1 \pmod{3} \\
    n \equiv &\ 1 \pmod{5} \\
    n \equiv &\ 1 \pmod{49}.
  \end{align*}
\]
</p>

## Problem 1/2
<p>
  Follow along with the YouTube video <a href="https://www.youtube.com/watch?v=ru7mWZJlRQg">The Chinese Remainder Theorem made easy</a> (embedded below) to learn how to solve this system of congruences: \[ \begin{align*}
      x \equiv &\ 2 \pmod{3} \\
      x \equiv &\ 2 \pmod{4} \\
      x \equiv &\ 1 \pmod{5}.
    \end{align*}
  \]
</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ru7mWZJlRQg?si=9tFz1mkkJoQONvhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Problem 1
<p>
  Find an integer $n$ simultaneously satisfying the following congruences \[
  \begin{align*}
    n \equiv &\ 1 \pmod{2} \\
    n \equiv &\ 2 \pmod{3} \\
    n \equiv &\ 3 \pmod{5} \\
    n \equiv &\ 10 \pmod{49}.
  \end{align*}
\]
</p>

## Problem 2
<p>
  Use the Euclidean algorithm to show that $\gcd(726,919) = 1$, and use this to find $k$ such that $726k \equiv 1 \pmod{919}$ and to find $\ell$ such that $919\ell \equiv 1 \pmod{726}$, and use this to solve the system of congruences \[
  \begin{align*}
    n \equiv &\ 318 \pmod{919} \\
    n \equiv &\ 609 \pmod{726}.
  \end{align*}
\]
</p>

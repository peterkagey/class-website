---
title: Probability
layout: layouts/base
courseNumber: MAT4111A
term: F25
type: problems
week: 14
---
# Probability
Evan Chen's "<a href="https://web.evanchen.cc/handouts/ProbabilisticMethod/ProbabilisticMethod.pdf">Expected Uses of Probability</a>" may be a helpful resource.

#### Problem 0
<p>
  Suppose that we have a four-sided die that lands on
  <ul>
    <li>"1" with probability $p_1 = 1/3$,</li>
    <li>"2" with probability $p_2 = 1/4$,</li>
    <li>"3" with probability $p_3 = 1/5$, and</li>
    <li>"4" otherwise.</li>
  </ul>
  What is the <em>expected value</em> of a roll of the die?
</p>

### Discrete random variable (informally)
Roughly speaking, a <em>discrete random variable</em> is a "variable" that takes on a finite number of different values with different probabilities.

<p>
  In particular, we say $X$ is a discrete random variable if for some real numbers $r_1, r_2, \dots, r_n$, the probability that $X = r_i$ (written $p_X(r_i)$) has the property that
  $$p_X(r_1) + p_X(r_2) + \dots + p_X(r_n) = 1$$
  and $p_X(r) = 0$ for $r \not \in \{r_1, r_2, \dots, r_n\}$.
</p>

### Expected value
<p>
  Given a <em>discrete random variable</em> $X$ which takes on values in $\{r_1, r_2, \dots, r_n\}$, we say that the <em>expected value</em> of $X$ is
  $$\mathbb{E}[X] = \sum_{i=1}^n p_X(r_i)r_i$$
</p>

#### Problem 1
{% include 'content/F25/MAT4111A/problems/contest-problems/hmmt/2006_Guts_3.html' %}

### Linearity of expectation
Suppose $X_1, X_2, \dots, X_N$ are (discrete) random variables, then
$$\mathbb{E}[X_1 + X_2 + \dots + X_N] = \mathbb{E}[X_1] + \mathbb{E}[X_2] + \dots + \mathbb{E}[X_N].$$

Moreover, this is true even when the random variables are not <em>independent</em>.

#### Problem 2
{% include 'content/F25/MAT4111A/problems/contest-problems/putnam/2006_A4.html' %}

#### Problem 3
Suppose I have a sphere that I have partitioned into $2025^{2025}$ regions of equal area. I've colored 80% of the regions blue, and 20% of the regions green. Prove that no matter how I've colored the regions, you can find eight points on the sphere such that (1) the eight points are arranged to form the vertices of a cube and (2) all of the points are inside of blue regions.


### Probabilistic Proof (Pigeonhole principle)
<p>
  Suppose $X$ is a discrete random variable, and let $\mathbb{E}[X]$ be the expected value. Either one of the following is true: <ul>
    <li>The random variable only takes on one value: $p_X(\mathbb{E}[X]) = 1$, or</li>
    <li>There exist two real numbers $a < \mathbb{E}[X]$ and $b > \mathbb{E}[X]$ such that $p_X(a) > 0$ and $p_X(b) > 0$.</li>
  </ul>
</p>

#### Problem 4
<p>
  Suppose I have a sphere that I have partitioned into $2025^{2025}$ regions of equal area. I've colored more than 90% of the regions blue. Prove that no matter how I've colored the regions, you can find eight points on the sphere such that (1) the eight points are arranged to form the vertices of a cube and (2) all of the points are inside of blue regions.
</p>
<p>
  <b>Bonus:</b> Prove that this is not necessarily the case if 85%–86% of the regions are colored blue.
</p>

#### Problem 5
{% include 'content/F25/MAT4111A/problems/contest-problems/bamo/2004_4.html' %}

---
layout: page
title: Writing & Research
subtitle: Policy analysis, research, and commentary on housing and cities
permalink: /writing/
---

## My Analytical Approach

I combine quantitative methods with accessible policy writing to make housing research useful for practitioners, advocates, and interested readers. My work emphasizes:

- **Census & ACS data** at the tract level for demographic and housing analysis
- **Local Public Data** on housing development and policy
- **R programming** for statistical analysis, visualization, and spatial work
- **Clear translation** of statistical findings into policy recommendations

---

## Research Areas

<h3>Twin Cities</h3>

<div class="card-grid">

<div class="card" markdown="1">
<h4>Minneapolis 2040 Plan</h4>

Evaluation of development outcomes following Minneapolis's landmark comprehensive plan, including mapping permit data, analyzing housing type mix, and assessing early impacts on housing supply and prices.
</div>

<div class="card" markdown="1">
<h4>Lot Size Regulations</h4>

Research on minimum lot size requirements and their effects on housing affordability, supply, and neighborhood character. Includes parcel-level analysis and hedonic regression work (forthcoming).
</div>

<div class="card" markdown="1">
<h4>Inclusionary Zoning</h4>

Analysis of policy design choices in inclusionary zoning programs, including who bears the costs of affordability mandates and how program features affect housing production.
</div>

<div class="card" markdown="1">
<h4>State Zoning Reform</h4>

Analysis of Minnesota's HF4246 and the politics of state preemption of local zoning, including testimony at the Legislature and ongoing coverage of reform efforts.
</div>

</div>

<h3>Chicago (2024–present)</h3>

<div class="card-grid">

<div class="card" markdown="1">
<h4>Neighborhood Demographics</h4>

Census/ACS analysis of demographic change in Chicago neighborhoods—Logan Square, North Center, Lake View, downtown—focusing on population, household composition, and housing unit dynamics.
</div>

<div class="card" markdown="1">
<h4>Deconversions</h4>

Research on housing deconversions (multi-unit to single-family conversions) and their impact on neighborhood composition, affordability, and population capacity.
</div>

<div class="card" markdown="1">
<h4>Family Housing Patterns</h4>

Analysis of where families with children live in Chicago, bedroom mix in new construction, and how housing supply shapes demographic outcomes.
</div>

<div class="card" markdown="1">
<h4>Chicago Zoning History</h4>

Research on Chicago's zoning evolution, the Planned Development process, aldermanic privilege, and how institutional history shapes current policy debates.
</div>

</div>

---

## Full Writing Portfolio

Use the filters to explore by style, region, or search for specific topics.

<!-- Filter Controls -->
<div class="portfolio-filters">
  <div class="filter-group">
    <label>Style:</label>
    <div class="filter-buttons" data-filter-type="style">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="quantitative">Quantitative</button>
      <button class="filter-btn" data-filter="policy">Policy</button>
      <button class="filter-btn" data-filter="commentary">Commentary</button>
    </div>
  </div>

  <div class="filter-group">
    <label>Region:</label>
    <div class="filter-buttons" data-filter-type="region">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="twin-cities">Twin Cities</button>
      <button class="filter-btn" data-filter="chicago">Chicago</button>
      <button class="filter-btn" data-filter="comparative">Comparative</button>
    </div>
  </div>

  <div class="search-box">
    <input type="text" id="portfolio-search" placeholder="Search articles...">
  </div>
</div>

<!-- Portfolio Grid -->
<div class="portfolio-grid">
  {% for item in site.data.writing %}
  {% include portfolio-item.html item=item %}
  {% endfor %}
</div>

<p class="no-results" style="display: none;">No articles match your filters.</p>

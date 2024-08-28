# State-zip-code-GeoJSON

Zip code boundaries for each of the 50 states

This is a collection of zip code boundrary files for each of the 50 states, plus DC. Thanks to Github user
[jgoodall for his us-maps example](https://github.com/jgoodall/us-maps)! His example was how I found where to
download the shape files.

Each file from the Census is of the format:

tl_2010_STATE_FIPS_CODE_zcta510.zip

Where STATE_FIPS_CODE is the two-digit [Federal Information Processing Standard state code]
(https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard_state_code).

Each file was then unzipped, converted to GeoJSON with [ogr2ogr](http://www.gdal.org/), and minified
with [json-minify](https://www.npmjs.com/package/json-minify). Here's an example for Delaware:

#### Zip codes
* In a browser, visit: https://www.census.gov/cgi-bin/geo/shapefiles2010/main
* Choose 'Zip Code Tabulation Areas' and 'Submit'
* Choose 'Delware' for '5-Digit ZIP Code Tabulation Area (2010)' and click 'Download'

Then unzip the files, and run:

```
ogr2ogr -f "GeoJSON" de_delaware_zip_codes_geo.json tl_2010_10_zcta510.shp

json-minify de_delaware_zip_codes_geo.json > de_delaware_zip_codes_geo.min.json

```

Alaska: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ak_alaska_zip_codes_geo.min.json

Alabama: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/al_alabama_zip_codes_geo.min.json

Arkansas: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ar_arkansas_zip_codes_geo.min.json

Arizona: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/az_arizona_zip_codes_geo.min.json

California: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ca_california_zip_codes_geo.min.json

Colorado: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/co_colorado_zip_codes_geo.min.json

Connecticut: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ct_connecticut_zip_codes_geo.min.json

Delaware: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/de_delaware_zip_codes_geo.min.json

Florida: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/fl_florida_zip_codes_geo.min.json

Georgia: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ga_georgia_zip_codes_geo.min.json

Hawaii: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/hi_hawaii_zip_codes_geo.min.json

Idaho: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/id_idaho_zip_codes_geo.min.json

Illinois: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/il_illinois_zip_codes_geo.min.json

Indiana: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/in_indiana_zip_codes_geo.min.json

Iowa: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ia_iowa_zip_codes_geo.min.json

Kansas: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ks_kansas_zip_codes_geo.min.json

Kentucky: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ky_kentucky_zip_codes_geo.min.json

Louisiana: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/la_louisiana_zip_codes_geo.min.json

Maine: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/me_maine_zip_codes_geo.min.json

Maryland: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/md_maryland_zip_codes_geo.min.json

Massachusetts: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ma_massachusetts_zip_codes_geo.min.json

Michigan: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/mi_michigan_zip_codes_geo.min.json

Minnesota: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/mn_minnesota_zip_codes_geo.min.json

Mississippi: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ms_mississippi_zip_codes_geo.min.json

Missouri: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/mo_missouri_zip_codes_geo.min.json

Montana: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/mt_montana_zip_codes_geo.min.json

Nebraska: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ne_nebraska_zip_codes_geo.min.json

Nevada: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/nv_nevada_zip_codes_geo.min.json

New Hampshire: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/nh_new_hampshire_zip_codes_geo.min.json

New Jersey: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/nj_new_jersey_zip_codes_geo.min.json

New Mexico: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/nm_new_mexico_zip_codes_geo.min.json

New York: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ny_new_york_zip_codes_geo.min.json

North Carolina: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/nc_north_carolina_zip_codes_geo.min.json

North Dakota: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/nd_north_dakota_zip_codes_geo.min.json

Ohio: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/oh_ohio_zip_codes_geo.min.json

Oklahoma: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ok_oklahoma_zip_codes_geo.min.json

Oregon: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/or_oregon_zip_codes_geo.min.json

Pennsylvania: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/pa_pennsylvania_zip_codes_geo.min.json

Rhode Island: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ri_rhode_island_zip_codes_geo.min.json

South Carolina: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/sc_south_carolina_zip_codes_geo.min.json

South Dakota: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/sd_south_dakota_zip_codes_geo.min.json

Tennessee: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/tn_tennessee_zip_codes_geo.min.json

Texas: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/tx_texas_zip_codes_geo.min.json

Utah: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/ut_utah_zip_codes_geo.min.json

Vermont: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/vt_vermont_zip_codes_geo.min.json

Virginia: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/va_virginia_zip_codes_geo.min.json

Washington: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/wa_washington_zip_codes_geo.min.json

West Virginia: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/wv_west_virginia_zip_codes_geo.min.json

Wisconsin: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/wi_wisconsin_zip_codes_geo.min.json

Wyoming: https://austindevs.github.io/State-zip-code-GeoJSON/simplified/wy_wyoming_zip_codes_geo.min.json
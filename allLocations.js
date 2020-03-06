var allLocations = [
  {
    city: "Huntersville", 
    name: "Sam Furr Rd & Hwy 115", 
    country: "US", 
    lng: -80.85697174072266, 
    lat: 35.44198989868164, 
    store_id: 6589
  }, 
  {
    city: "New York", 
    name: "88th & Broadway", 
    country: "US", 
    lng: -73.97532653808594, 
    lat: 40.78928756713867, 
    store_id: 6590
  }, 
  {
    city: "Lubbock", 
    name: "80th & University", 
    country: "US", 
    lng: -101.86996459960938, 
    lat: 33.521446228027344, 
    store_id: 6592
  }, 
  {
    city: "Oak Harbor", 
    name: "Harbor Station", 
    country: "US", 
    lng: -122.64720153808594, 
    lat: 48.30305480957031, 
    store_id: 6594
  }, 
  {
    city: "Yonkers", 
    name: "Yonkers, Bronx River Road", 
    country: "US", 
    lng: -73.84294891357422, 
    lat: 40.927764892578125, 
    store_id: 6596
  }, 
  {
    city: "Cuyahoga Falls", 
    name: "Cuyahoga Falls, Howe Street", 
    country: "US", 
    lng: -81.4797134399414, 
    lat: 41.11951446533203, 
    store_id: 6597
  }, 
  {
    city: "Linthicum Heights", 
    name: "1700 W Nursery Rd.", 
    country: "US", 
    lng: -76.68319702148438, 
    lat: 39.19952392578125, 
    store_id: 6598
  }, 
  {
    city: "Athens", 
    name: "Epps Bridge Rd @ Hwy 316", 
    country: "US", 
    lng: -83.44400787353516, 
    lat: 33.91654968261719, 
    store_id: 6599
  }, 
  {
    city: "Birmingham", 
    name: "Brookwood Medical Center / Birmingh", 
    country: "US", 
    lng: -86.77693176269531, 
    lat: 33.46341323852539, 
    store_id: 6600
  }, 
  {
    city: "Phoenix", 
    name: "Safeway - Phoenix #240", 
    country: "US", 
    lng: -112.13350677490234, 
    lat: 33.640506744384766, 
    store_id: 6601
  }, 
  {
    city: "Sierra Vista", 
    name: "Fry's #59 Sierra Vista", 
    country: "US", 
    lng: -110.25546264648438, 
    lat: 31.553346633911133, 
    store_id: 6602
  }, 
  {
    city: "State College", 
    name: "South Garner Street", 
    country: "US", 
    lng: -77.85610961914062, 
    lat: 40.79741668701172, 
    store_id: 6603
  }, 
  {
    city: "Adrian", 
    name: "Adrian - Hwy 23 & Division", 
    country: "US", 
    lng: -84.0326156616211, 
    lat: 41.87446975708008, 
    store_id: 6604
  }, 
  {
    city: "Irvine", 
    name: "Irvine Spectrum Mall", 
    country: "US", 
    lng: -117.74618530273438, 
    lat: 33.652400970458984, 
    store_id: 6605
  }, 
  {
    city: "Greenwood", 
    name: "SR 135 & Faith", 
    country: "US", 
    lng: -86.15811920166016, 
    lat: 39.61075210571289, 
    store_id: 6607
  }, 
  {
    city: "Boston", 
    name: "Renaissance Boston Harbor Lobby", 
    country: "US", 
    lng: -71.0396728515625, 
    lat: 42.34794616699219, 
    store_id: 6608
  }, 
  {
    city: "Albuquerque", 
    name: "528 Lowe's Access Rd", 
    country: "US", 
    lng: -106.65049743652344, 
    lat: 35.20509719848633, 
    store_id: 6609
  }, 
  {
    city: "Fairview Park", 
    name: "Westgate Mall, Route 113", 
    country: "US", 
    lng: -81.8494644165039, 
    lat: 41.462615966796875, 
    store_id: 6610
  }, 
  {
    city: "Dallas", 
    name: "Lemmon & Inwood", 
    country: "US", 
    lng: -96.82718658447266, 
    lat: 32.8299674987793, 
    store_id: 6611
  }, 
  {
    city: "Houston", 
    name: "Hwy 249 & Louetta", 
    country: "US", 
    lng: -95.57290649414062, 
    lat: 29.996429443359375, 
    store_id: 6612
  }, 
  {
    city: "Spring", 
    name: "Kroger-Spring #373", 
    country: "US", 
    lng: -95.40728759765625, 
    lat: 30.124229431152344, 
    store_id: 6576
  }, 
  {
    city: "Roswell", 
    name: "Hwy 92 & Mabry Rd", 
    country: "US", 
    lng: -84.4206314086914, 
    lat: 34.0625114440918, 
    store_id: 6613
  }, 
  {
    city: "Neptune Beach", 
    name: "Atlantic & 3rd", 
    country: "US", 
    lng: -81.3978271484375, 
    lat: 30.32427978515625, 
    store_id: 6614
  }, 
  {
    city: "Nashua", 
    name: "Nashua, 611 Amherst St", 
    country: "US", 
    lng: -71.53758239746094, 
    lat: 42.8017463684082, 
    store_id: 6615
  }, 
  {
    city: "Upper Arlington", 
    name: "Upper Arlington, Tremont Road", 
    country: "US", 
    lng: -83.05963897705078, 
    lat: 40.0229377746582, 
    store_id: 6616
  }, 
  {
    city: "Stillwater", 
    name: "Main & Hall of Fame", 
    country: "US", 
    lng: -97.05625915527344, 
    lat: 36.127235412597656, 
    store_id: 6617
  }, 
  {
    city: "San Antonio", 
    name: "1604 & Blanco Rd", 
    country: "US", 
    lng: -98.5077896118164, 
    lat: 29.607927322387695, 
    store_id: 6618
  }, 
  {
    city: "Layton", 
    name: "Antelope & Hillfield, Layton", 
    country: "US", 
    lng: -111.9738998413086, 
    lat: 41.08945083618164, 
    store_id: 6619
  }, 
  {
    city: "Cary", 
    name: "Harris Teeter-Cary #298", 
    country: "US", 
    lng: -78.90106964111328, 
    lat: 35.820701599121094, 
    store_id: 6621
  }, 
  {
    city: "West Chester", 
    name: "West Chester University", 
    country: "US", 
    lng: -75.59740447998047, 
    lat: 39.95317077636719, 
    store_id: 6622
  }, 
  {
    city: "Bloomsburg", 
    name: "Bloomsburg University of PA - Andru", 
    country: "US", 
    lng: -76.4453125, 
    lat: 41.00898361206055, 
    store_id: 6623
  }, 
  {
    city: "Little Rock", 
    name: "Target Little Rock West T-1114", 
    country: "US", 
    lng: -92.41497039794922, 
    lat: 34.75435256958008, 
    store_id: 6625
  }, 
  {
    city: "Clermont", 
    name: "SR 50 & Hancock", 
    country: "US", 
    lng: -81.708740234375, 
    lat: 28.54610252380371, 
    store_id: 6626
  }, 
  {
    city: "Annapolis", 
    name: "Annapolis Mall - North", 
    country: "US", 
    lng: -76.54425811767578, 
    lat: 38.991424560546875, 
    store_id: 6627
  }, 
  {
    city: "Frederick", 
    name: "104 Market Street", 
    country: "US", 
    lng: -77.41065216064453, 
    lat: 39.41556930541992, 
    store_id: 6628
  }, 
  {
    city: "Las Vegas", 
    name: "Eastern & Russell", 
    country: "US", 
    lng: -115.11946105957031, 
    lat: 36.08570861816406, 
    store_id: 6629
  }, 
  {
    city: "San Antonio", 
    name: "281 & Stone Oak", 
    country: "US", 
    lng: -98.44800567626953, 
    lat: 29.651107788085938, 
    store_id: 6630
  }, 
  {
    city: "Bourne", 
    name: "Bourne, Rt. 6", 
    country: "US", 
    lng: -70.59426879882812, 
    lat: 41.75189208984375, 
    store_id: 6631
  }, 
  {
    city: "Atwater", 
    name: "Applegate & Hwy 99 - Atwater", 
    country: "US", 
    lng: -120.61568450927734, 
    lat: 37.34400939941406, 
    store_id: 6633
  }, 
  {
    city: "Gloucester", 
    name: "Gloucester, VA", 
    country: "US", 
    lng: -76.52706909179688, 
    lat: 37.39757537841797, 
    store_id: 6634
  }, 
  {
    city: "Saint Augustine", 
    name: "CR 210 & I-95", 
    country: "US", 
    lng: -81.5000991821289, 
    lat: 30.064485549926758, 
    store_id: 6635
  }, 
  {
    city: "Pembroke Pines", 
    name: "Shops at Pembroke Gardens", 
    country: "US", 
    lng: -80.33677673339844, 
    lat: 26.003459930419922, 
    store_id: 6637
  }, 
  {
    city: "Milledgeville", 
    name: "US Hwy 441 & Roberson Mill Rd", 
    country: "US", 
    lng: -83.25595092773438, 
    lat: 33.109588623046875, 
    store_id: 6638
  }, 
  {
    city: "Marietta", 
    name: "I-75 & Windy Hill Rd", 
    country: "US", 
    lng: -84.47777557373047, 
    lat: 33.90062713623047, 
    store_id: 6639
  }, 
  {
    city: "Clemson", 
    name: "Tiger Blvd & College Ave", 
    country: "US", 
    lng: -82.83442687988281, 
    lat: 34.69058609008789, 
    store_id: 6641
  }, 
  {
    city: "Gilbert", 
    name: "Bashas - Gilbert/Higley Rd #172", 
    country: "US", 
    lng: -111.72010040283203, 
    lat: 33.348575592041016, 
    store_id: 6643
  }, 
  {
    city: "Chandler", 
    name: "Ray Road & Loop 101, Chandler", 
    country: "US", 
    lng: -111.89142608642578, 
    lat: 33.31983184814453, 
    store_id: 6644
  }, 
  {
    city: "Olathe", 
    name: "119th & I 35", 
    country: "US", 
    lng: -94.77796173095703, 
    lat: 38.91239547729492, 
    store_id: 6646
  }, 
  {
    city: "Gulfport", 
    name: "I 10 & Hwy 49", 
    country: "US", 
    lng: -89.09651947021484, 
    lat: 30.437320709228516, 
    store_id: 6647
  }, 
  {
    city: "Kingsport", 
    name: "N Eastman & Ryder", 
    country: "US", 
    lng: -82.52002716064453, 
    lat: 36.54293441772461, 
    store_id: 6650
  }, 
  {
    city: "Arlington", 
    name: "Courthouse Arlington", 
    country: "US", 
    lng: -77.08607482910156, 
    lat: 38.890281677246094, 
    store_id: 6651
  }, 
  {
    city: "Kendall", 
    name: "Kendall Dr & SW 137th Ave", 
    country: "US", 
    lng: -80.41523742675781, 
    lat: 25.684782028198242, 
    store_id: 6652
  }, 
  {
    city: "Concord", 
    name: "Kannapolis Parkway", 
    country: "US", 
    lng: -80.67523193359375, 
    lat: 35.419349670410156, 
    store_id: 6653
  }, 
  {
    city: "Palos Heights", 
    name: "Palos Heights-119th & Harlem", 
    country: "US", 
    lng: -87.79837036132812, 
    lat: 41.67570877075195, 
    store_id: 6654
  }, 
  {
    city: "Goodyear", 
    name: "Dysart & McDowell, Goodyear", 
    country: "US", 
    lng: -112.34165954589844, 
    lat: 33.46532440185547, 
    store_id: 6655
  }, 
  {
    city: "Odessa", 
    name: "SR 54 & Suncoast Pkwy", 
    country: "US", 
    lng: -82.54576110839844, 
    lat: 28.18808364868164, 
    store_id: 6658
  }, 
  {
    city: "Crestview", 
    name: "SR 85 & Redstone Ave", 
    country: "US", 
    lng: -86.56654357910156, 
    lat: 30.734071731567383, 
    store_id: 6659
  }, 
  {
    city: "Shreveport", 
    name: "Barksdale AFB", 
    country: "US", 
    lng: -93.66169738769531, 
    lat: 32.50669860839844, 
    store_id: 6660
  }, 
  {
    city: "Allentown", 
    name: "Tilghman St.", 
    country: "US", 
    lng: -75.54534149169922, 
    lat: 40.59316635131836, 
    store_id: 6661
  }, 
  {
    city: "San Francisco", 
    name: "Presidio & Letterman", 
    country: "US", 
    lng: -122.44953155517578, 
    lat: 37.79924392700195, 
    store_id: 6663
  }, 
  {
    city: "Windsor", 
    name: "Windsor Town Green", 
    country: "US", 
    lng: -122.81627655029297, 
    lat: 38.5484504699707, 
    store_id: 6664
  }, 
  {
    city: "Sarasota", 
    name: "SRQ Post Security", 
    country: "US", 
    lng: -82.55242919921875, 
    lat: 27.387176513671875, 
    store_id: 6666
  }, 
  {
    city: "Jamestown", 
    name: "Furnitureland South", 
    country: "US", 
    lng: -79.9273910522461, 
    lat: 35.969505310058594, 
    store_id: 6667
  }, 
  {
    city: "Davidson", 
    name: "Harris Teeter-Davidson # 268", 
    country: "US", 
    lng: -80.86014556884766, 
    lat: 35.500789642333984, 
    store_id: 6668
  }, 
  {
    city: "Dayton", 
    name: "Kroger-Huber Heights #758", 
    country: "US", 
    lng: -84.14015197753906, 
    lat: 39.8668098449707, 
    store_id: 6669
  }, 
  {
    city: "Princeton", 
    name: "Oakvale Road, Princeton", 
    country: "US", 
    lng: -81.05255889892578, 
    lat: 37.36334228515625, 
    store_id: 6670
  }, 
  {
    city: "Grand Rapids", 
    name: "Spartan-Cascade #1573", 
    country: "US", 
    lng: -85.50994110107422, 
    lat: 42.9130973815918, 
    store_id: 6674
  }, 
  {
    city: "Scranton,", 
    name: "University of Scranton - Student Un", 
    country: "US", 
    lng: -75.6576919555664, 
    lat: 41.406192779541016, 
    store_id: 6675
  }, 
  {
    city: "St. George", 
    name: "Albertsons - St. George #329", 
    country: "US", 
    lng: -113.6248550415039, 
    lat: 37.12108612060547, 
    store_id: 6676
  }, 
  {
    city: "Palmdale", 
    name: "East Ave S & 47th St East", 
    country: "US", 
    lng: -118.0466079711914, 
    lat: 34.55862808227539, 
    store_id: 6677
  }, 
  {
    city: "Loma Linda", 
    name: "California & Barton, Loma Linda", 
    country: "US", 
    lng: -117.22570037841797, 
    lat: 34.04916000366211, 
    store_id: 6678
  }, 
  {
    city: "Superior", 
    name: "Coalton & Rock Creek- Superior", 
    country: "US", 
    lng: -105.14774322509766, 
    lat: 39.92810821533203, 
    store_id: 6679
  }, 
  {
    city: "Roseville", 
    name: "Hwy 36 and Fairview Avenue", 
    country: "US", 
    lng: -93.1763687133789, 
    lat: 45.00763702392578, 
    store_id: 6680
  }, 
  {
    city: "Irving", 
    name: "183 & Story Rd", 
    country: "US", 
    lng: -96.9791030883789, 
    lat: 32.837894439697266, 
    store_id: 6684
  }, 
  {
    city: "Mountlake Terrace", 
    name: "Cedar Plaza- Mountlake Terrace", 
    country: "US", 
    lng: -122.291748046875, 
    lat: 47.791221618652344, 
    store_id: 6685
  }, 
  {
    city: "Pollock Pines", 
    name: "Safeway - Pollock Pines #1825", 
    country: "US", 
    lng: -120.5769271850586, 
    lat: 38.76234817504883, 
    store_id: 6686
  }, 
  {
    city: "Houston", 
    name: "Kroger-Houston #346", 
    country: "US", 
    lng: -95.48612213134766, 
    lat: 29.796546936035156, 
    store_id: 6689
  }, 
  {
    city: "Pearland", 
    name: "Kroger-Pearland #343", 
    country: "US", 
    lng: -95.34891510009766, 
    lat: 29.560312271118164, 
    store_id: 6690
  }, 
  {
    city: "Mountlake Terrace", 
    name: "QFC - Mt. Lake Terrace #857", 
    country: "US", 
    lng: -122.29069519042969, 
    lat: 47.790863037109375, 
    store_id: 6691
  }, 
  {
    city: "Saint Petersburg", 
    name: "4th St & 89th Ave", 
    country: "US", 
    lng: -82.63835906982422, 
    lat: 27.852760314941406, 
    store_id: 6692
  }, 
  {
    city: "Grand Rapids", 
    name: "J.W.Marriott,Grand Rapids lobby rtl", 
    country: "US", 
    lng: -85.67469024658203, 
    lat: 42.966468811035156, 
    store_id: 6693
  }, 
  {
    city: "Anderson", 
    name: "Rhonda & Pleasant Hills - Anderson", 
    country: "US", 
    lng: -122.28728485107422, 
    lat: 40.43191146850586, 
    store_id: 6694
  }, 
  {
    city: "West Haven", 
    name: "Stop & Shop-West Haven #696", 
    country: "US", 
    lng: -72.95685577392578, 
    lat: 41.271873474121094, 
    store_id: 6697
  }, 
  {
    city: "Bentonville", 
    name: "Walton & J Street", 
    country: "US", 
    lng: -94.2001953125, 
    lat: 36.33571243286133, 
    store_id: 6698
  }, 
  {
    city: "Dublin", 
    name: "Safeway - Dublin #1932", 
    country: "US", 
    lng: -121.87235260009766, 
    lat: 37.70420455932617, 
    store_id: 6699
  }, 
  {
    city: "Travis AFB", 
    name: "Travis AFB BX", 
    country: "US", 
    lng: -121.94847106933594, 
    lat: 38.26968765258789, 
    store_id: 6700
  }, 
  {
    city: "Cockeysville", 
    name: "Yorkridge Center North", 
    country: "US", 
    lng: -76.64273071289062, 
    lat: 39.47761535644531, 
    store_id: 6702
  }, 
  {
    city: "Canton", 
    name: "Canton, Fulton Road Northwest", 
    country: "US", 
    lng: -81.48262786865234, 
    lat: 40.860076904296875, 
    store_id: 6704
  }, 
  {
    city: "Martinez", 
    name: "Kroger - Martinez #294", 
    country: "US", 
    lng: -82.10786437988281, 
    lat: 33.509315490722656, 
    store_id: 6705
  }, 
  {
    city: "Suwanee", 
    name: "Kroger-Suwanee #426", 
    country: "US", 
    lng: -84.0727767944336, 
    lat: 34.063934326171875, 
    store_id: 6706
  }, 
  {
    city: "Honolulu", 
    name: "HNL Gate 27", 
    country: "US", 
    lng: -157.92315673828125, 
    lat: 21.3311767578125, 
    store_id: 6707
  }, 
  {
    city: "Boise", 
    name: "BSU Albertsons Library", 
    country: "US", 
    lng: -116.20195770263672, 
    lat: 43.6027946472168, 
    store_id: 6708
  }, 
  {
    city: "Carbondale", 
    name: "Kroger-Carbondale #714", 
    country: "US", 
    lng: -89.18500518798828, 
    lat: 37.731590270996094, 
    store_id: 6709
  }, 
  {
    city: "Bedford Park", 
    name: "Marriott - Bedford Park - Entrance", 
    country: "US", 
    lng: -87.74465942382812, 
    lat: 41.77423095703125, 
    store_id: 6710
  }, 
  {
    city: "Memphis", 
    name: "Poplar & I-240", 
    country: "US", 
    lng: -89.8726577758789, 
    lat: 35.1040153503418, 
    store_id: 6712
  }, 
  {
    city: "Peachtree City", 
    name: "Hwy 54 & Broken Bow Ct", 
    country: "US", 
    lng: -84.55794525146484, 
    lat: 33.422725677490234, 
    store_id: 6714
  }, 
  {
    city: "Orlando", 
    name: "S Kirkman rd & Vineland Rd", 
    country: "US", 
    lng: -81.45809173583984, 
    lat: 28.481679916381836, 
    store_id: 6715
  }, 
  {
    city: "Stroudsburg", 
    name: "Downtown Stroudsburg", 
    country: "US", 
    lng: -75.19519805908203, 
    lat: 40.98487854003906, 
    store_id: 6717
  }, 
  {
    city: "Grand Rapids", 
    name: "Grand Valley State University - Pew", 
    country: "US", 
    lng: -85.6806411743164, 
    lat: 42.96364212036133, 
    store_id: 6718
  }, 
  {
    city: "Kalamazoo", 
    name: "Spartan-Parkview #1575", 
    country: "US", 
    lng: -85.61468505859375, 
    lat: 42.25983428955078, 
    store_id: 6719
  }, 
  {
    city: "Billings", 
    name: "DoubleTree by Hilton Billings", 
    country: "US", 
    lng: -108.50376892089844, 
    lat: 45.782249450683594, 
    store_id: 6720
  }, 
  {
    city: "Frankfort", 
    name: "Kroger - Frankfort, KY #397", 
    country: "US", 
    lng: -84.82637023925781, 
    lat: 38.19767761230469, 
    store_id: 6721
  }, 
  {
    city: "Murfreesboro", 
    name: "Kroger - Murfreesboro #564", 
    country: "US", 
    lng: -86.35377502441406, 
    lat: 35.87287139892578, 
    store_id: 6724
  }, 
  {
    city: "Castro Valley", 
    name: "Safeway - Castro Valley #768", 
    country: "US", 
    lng: -122.07417297363281, 
    lat: 37.69619369506836, 
    store_id: 6725
  }, 
  {
    city: "Oak Brook", 
    name: "22nd & Tower", 
    country: "US", 
    lng: -87.97737884521484, 
    lat: 41.84552001953125, 
    store_id: 6726
  }, 
  {
    city: "Plymouth", 
    name: "Plymouth, Colony Place", 
    country: "US", 
    lng: -70.71497344970703, 
    lat: 41.95405578613281, 
    store_id: 6727
  }, 
  {
    city: "Patchogue", 
    name: "Patchogue, Waverly Plaza", 
    country: "US", 
    lng: -73.0325927734375, 
    lat: 40.77784729003906, 
    store_id: 6729
  }, 
  {
    city: "St. Clairsville", 
    name: "St. Clairsville, OH", 
    country: "US", 
    lng: -80.86581420898438, 
    lat: 40.071014404296875, 
    store_id: 6730
  }, 
  {
    city: "Abilene", 
    name: "14th & Barrow", 
    country: "US", 
    lng: -99.75810241699219, 
    lat: 32.43256759643555, 
    store_id: 6731
  }, 
  {
    city: "Greenville", 
    name: "I 30 & Hwy 34", 
    country: "US", 
    lng: -96.11457824707031, 
    lat: 33.09499740600586, 
    store_id: 6732
  }, 
  {
    city: "Alexandria", 
    name: "Carlyle Center", 
    country: "US", 
    lng: -77.06193542480469, 
    lat: 38.80261993408203, 
    store_id: 6733
  }, 
  {
    city: "Oakton", 
    name: "Oakton", 
    country: "US", 
    lng: -77.29988861083984, 
    lat: 38.88275146484375, 
    store_id: 6736
  }, 
  {
    city: "Concord", 
    name: "Harris Teeter-Concord #190", 
    country: "US", 
    lng: -80.74402618408203, 
    lat: 35.41734313964844, 
    store_id: 6738
  }, 
  {
    city: "Rochester", 
    name: "University of Rochester", 
    country: "US", 
    lng: -77.62971496582031, 
    lat: 43.12897872924805, 
    store_id: 6739
  }, 
  {
    city: "Salem", 
    name: "Safeway #429 - Salem", 
    country: "US", 
    lng: -122.98223876953125, 
    lat: 44.96875762939453, 
    store_id: 6740
  }, 
  {
    city: "Nashville", 
    name: "Renaissance Nashville", 
    country: "US", 
    lng: -86.78080749511719, 
    lat: 36.16083526611328, 
    store_id: 6723
  }, 
  {
    city: "Grand Rapids", 
    name: "Spartan - Breton Village #1572", 
    country: "US", 
    lng: -85.60942077636719, 
    lat: 42.93027114868164, 
    store_id: 6742
  }, 
  {
    city: "Pataskala", 
    name: "Kroger-Pataskala, OH #591", 
    country: "US", 
    lng: -82.66487121582031, 
    lat: 40.00480651855469, 
    store_id: 6743
  }, 
  {
    city: "Kettleman City", 
    name: "Hwy 41 & Bernard, Kettleman City", 
    country: "US", 
    lng: -119.95927429199219, 
    lat: 35.98771667480469, 
    store_id: 6746
  }, 
  {
    city: "Los Angeles", 
    name: "Jefferson & Centinela", 
    country: "US", 
    lng: -118.40908813476562, 
    lat: 33.98154067993164, 
    store_id: 6747
  }, 
  {
    city: "Washington", 
    name: "Navy Yard, M Street SE", 
    country: "US", 
    lng: -77.00360107421875, 
    lat: 38.87620544433594, 
    store_id: 6750
  }, 
  {
    city: "Chicago", 
    name: "35th & State - Bronzeville", 
    country: "US", 
    lng: -87.62674713134766, 
    lat: 41.83087921142578, 
    store_id: 6751
  }, 
  {
    city: "Skokie", 
    name: "Dempster & Karlov - Skokie", 
    country: "US", 
    lng: -87.73097229003906, 
    lat: 42.0410041809082, 
    store_id: 6752
  }, 
  {
    city: "Gurnee", 
    name: "Grand & Dilly's - Gurnee", 
    country: "US", 
    lng: -87.94027709960938, 
    lat: 42.379398345947266, 
    store_id: 6753
  }, 
  {
    city: "Chicago", 
    name: "Elston & Logan - Lincoln Park", 
    country: "US", 
    lng: -87.6817398071289, 
    lat: 41.928955078125, 
    store_id: 6754
  }, 
  {
    city: "Valaparaiso", 
    name: "Valparaiso-Rte 30", 
    country: "US", 
    lng: -87.08717346191406, 
    lat: 41.46212387084961, 
    store_id: 6755
  }, 
  {
    city: "New York", 
    name: "23rd btwn 5th & 6th", 
    country: "US", 
    lng: -73.99031066894531, 
    lat: 40.741661071777344, 
    store_id: 6756
  }, 
  {
    city: "Tulsa", 
    name: "91st & Yale", 
    country: "US", 
    lng: -95.9226303100586, 
    lat: 36.032230377197266, 
    store_id: 6757
  }, 
  {
    city: "Houston", 
    name: "Westheimer & Briargreen, Houston", 
    country: "US", 
    lng: -95.64043426513672, 
    lat: 29.735254287719727, 
    store_id: 6759
  }, 
  {
    city: "Houston", 
    name: "Fannin & MacGregor", 
    country: "US", 
    lng: -95.3968505859375, 
    lat: 29.71526336669922, 
    store_id: 6760
  }, 
  {
    city: "Spring Valley", 
    name: "I-10 & Wirt", 
    country: "US", 
    lng: -95.49508666992188, 
    lat: 29.785045623779297, 
    store_id: 6761
  }, 
  {
    city: "Ashland", 
    name: "Ashland Hanover", 
    country: "US", 
    lng: -77.4697265625, 
    lat: 37.75863265991211, 
    store_id: 6762
  }, 
  {
    city: "Pearl City", 
    name: "Pearl City - Acacia Rd & Kuala St", 
    country: "US", 
    lng: -157.9741668701172, 
    lat: 21.399316787719727, 
    store_id: 6764
  }, 
  {
    city: "Clemmons", 
    name: "Clemmons", 
    country: "US", 
    lng: -80.3814697265625, 
    lat: 36.02261734008789, 
    store_id: 6768
  }, 
  {
    city: "Woodstock", 
    name: "Hwy 92 & Trickum Rd", 
    country: "US", 
    lng: -84.4778823852539, 
    lat: 34.08720016479492, 
    store_id: 6769
  }, 
  {
    city: "Scottsdale", 
    name: "Indian Bend & Loop 101, Scottsdale", 
    country: "US", 
    lng: -111.88631439208984, 
    lat: 33.538116455078125, 
    store_id: 6770
  }, 
  {
    city: "San Ramon", 
    name: "Safeway - San Ramon #2712", 
    country: "US", 
    lng: -121.92212677001953, 
    lat: 37.774574279785156, 
    store_id: 6771
  }, 
  {
    city: "Naperville", 
    name: "Naperville-Rte 59 & McDowell", 
    country: "US", 
    lng: -88.20413970947266, 
    lat: 41.797218322753906, 
    store_id: 6772
  }, 
  {
    city: "Ashland", 
    name: "Winchester & 12th", 
    country: "US", 
    lng: -82.6440658569336, 
    lat: 38.48090744018555, 
    store_id: 6773
  }, 
  {
    city: "Catonsville", 
    name: "856 Rolling Road", 
    country: "US", 
    lng: -76.75465393066406, 
    lat: 39.2832145690918, 
    store_id: 6774
  }, 
  {
    city: "Oregon City", 
    name: "Hwy 213 - Oregon City", 
    country: "US", 
    lng: -122.57943725585938, 
    lat: 45.32411575317383, 
    store_id: 6775
  }, 
  {
    city: "Euless", 
    name: "Hwy 121 & Glade", 
    country: "US", 
    lng: -97.09805297851562, 
    lat: 32.88039016723633, 
    store_id: 6776
  }, 
  {
    city: "Colorado Springs", 
    name: "Briargate and Union", 
    country: "US", 
    lng: -104.75697326660156, 
    lat: 38.964942932128906, 
    store_id: 6779
  }, 
  {
    city: "Indianapolis", 
    name: "15th & Capitol", 
    country: "US", 
    lng: -86.16150665283203, 
    lat: 39.786739349365234, 
    store_id: 6781
  }, 
  {
    city: "Broussard", 
    name: "US Hwy 90 & Albertsons", 
    country: "US", 
    lng: -91.94699096679688, 
    lat: 30.145030975341797, 
    store_id: 6782
  }, 
  {
    city: "Ann Arbor", 
    name: "Glencoe Crossing - 4585 Washtenaw", 
    country: "US", 
    lng: -83.66900634765625, 
    lat: 42.25221633911133, 
    store_id: 6784
  }, 
  {
    city: "Corpus Christi", 
    name: "Staples & Doddridge", 
    country: "US", 
    lng: -97.38805389404297, 
    lat: 27.740585327148438, 
    store_id: 6785
  }, 
  {
    city: "Wylie", 
    name: "FM 544 & Hwy 78", 
    country: "US", 
    lng: -96.54451751708984, 
    lat: 33.00955581665039, 
    store_id: 6786
  }, 
  {
    city: "San Antonio", 
    name: "1604 & Potranco", 
    country: "US", 
    lng: -98.71014404296875, 
    lat: 29.43683624267578, 
    store_id: 6787
  }, 
  {
    city: "Snoqualmie", 
    name: "Snoqualmie Ridge- Snoqualmie", 
    country: "US", 
    lng: -121.8716812133789, 
    lat: 47.53025817871094, 
    store_id: 6788
  }, 
  {
    city: "De Pere", 
    name: "Main & North 10th", 
    country: "US", 
    lng: -88.08612060546875, 
    lat: 44.451602935791016, 
    store_id: 6789
  }, 
  {
    city: "Santa Rosa", 
    name: "Airport & Aviation", 
    country: "US", 
    lng: -122.7806167602539, 
    lat: 38.51026916503906, 
    store_id: 6792
  }, 
  {
    city: "West Des Moines", 
    name: "West Des Moines-Mills Civic & 64th", 
    country: "US", 
    lng: -93.79574584960938, 
    lat: 41.561981201171875, 
    store_id: 6793
  }, 
  {
    city: "Idaho Falls", 
    name: "I-15 & Broadway- Idaho Falls", 
    country: "US", 
    lng: -112.05035400390625, 
    lat: 43.49502944946289, 
    store_id: 6794
  }, 
  {
    city: "Terre Haute", 
    name: "US 41 & 7th", 
    country: "US", 
    lng: -87.40845489501953, 
    lat: 39.40732955932617, 
    store_id: 6795
  }, 
  {
    city: "London", 
    name: "London I-75", 
    country: "US", 
    lng: -84.10030364990234, 
    lat: 37.11180114746094, 
    store_id: 6797
  }, 
  {
    city: "Greenville", 
    name: "East Carolina University", 
    country: "US", 
    lng: -77.37403106689453, 
    lat: 35.60556411743164, 
    store_id: 6798
  }, 
  {
    city: "Charlotte", 
    name: "Piper Glen", 
    country: "US", 
    lng: -80.81700897216797, 
    lat: 35.07810974121094, 
    store_id: 6799
  }, 
  {
    city: "Columbus", 
    name: "6264 East Broad Street", 
    country: "US", 
    lng: -82.8341064453125, 
    lat: 39.98111343383789, 
    store_id: 6800
  }, 
  {
    city: "Lubbock", 
    name: "Brownfield & Milwaukee", 
    country: "US", 
    lng: -101.95759582519531, 
    lat: 33.54635238647461, 
    store_id: 6802
  }, 
  {
    city: "Casper", 
    name: "Cy Ave & SW Wyoming Blvd - Casper", 
    country: "US", 
    lng: -106.36968231201172, 
    lat: 42.820316314697266, 
    store_id: 6805
  }, 
  {
    city: "Chino Hills", 
    name: "Central & Fairfield Ranch Rd.", 
    country: "US", 
    lng: -117.68919372558594, 
    lat: 33.971435546875, 
    store_id: 6807
  }, 
  {
    city: "Conifer", 
    name: "Conifer Town Center - Conifer", 
    country: "US", 
    lng: -105.30597686767578, 
    lat: 39.526920318603516, 
    store_id: 6808
  }, 
  {
    city: "Naperville", 
    name: "Naperville-Rte 59 & 75th", 
    country: "US", 
    lng: -88.20093536376953, 
    lat: 41.746517181396484, 
    store_id: 6809
  }, 
  {
    city: "Mesa", 
    name: "Signal Butte & Hwy 60, Mesa", 
    country: "US", 
    lng: -111.60076904296875, 
    lat: 33.3806266784668, 
    store_id: 6811
  }, 
  {
    city: "Delray Beach", 
    name: "502 E Atlantic Ave", 
    country: "US", 
    lng: -80.06784057617188, 
    lat: 26.461416244506836, 
    store_id: 6812
  }, 
  {
    city: "Cumming", 
    name: "Peachtree Pkwy & Ronald Reagan Blvd", 
    country: "US", 
    lng: -84.1732406616211, 
    lat: 34.152130126953125, 
    store_id: 6813
  }, 
  {
    city: "Brooksville", 
    name: "SR 50 & Mariner Blvd", 
    country: "US", 
    lng: -82.50799560546875, 
    lat: 28.53424644470215, 
    store_id: 6814
  }, 
  {
    city: "San Diego", 
    name: "Vons - San Diego #2735", 
    country: "US", 
    lng: -117.21791076660156, 
    lat: 32.735572814941406, 
    store_id: 6815
  }, 
  {
    city: "Omaha", 
    name: "Mutual of Omaha", 
    country: "US", 
    lng: -95.96186828613281, 
    lat: 41.25742721557617, 
    store_id: 6818
  }, 
  {
    city: "Fort Lee", 
    name: "Acme - Fort Lee #1065", 
    country: "US", 
    lng: -73.96617126464844, 
    lat: 40.856422424316406, 
    store_id: 6819
  }, 
  {
    city: "Allendale", 
    name: "Acme - Allendale #1095", 
    country: "US", 
    lng: -74.12710571289062, 
    lat: 41.028846740722656, 
    store_id: 6820
  }, 
  {
    city: "Lancaster", 
    name: "Park City Center", 
    country: "US", 
    lng: -76.3400650024414, 
    lat: 40.06685256958008, 
    store_id: 6821
  }, 
  {
    city: "Pottstown", 
    name: "Philadelphia Premium Outlets", 
    country: "US", 
    lng: -75.5702896118164, 
    lat: 40.23637771606445, 
    store_id: 6822
  }, 
  {
    city: "Tuscaloosa", 
    name: "McFarland Blvd & 15th St", 
    country: "US", 
    lng: -87.52774047851562, 
    lat: 33.195369720458984, 
    store_id: 6823
  }, 
  {
    city: "Peoria", 
    name: "Safeway - Peoria #2799", 
    country: "US", 
    lng: -112.26100158691406, 
    lat: 33.72330093383789, 
    store_id: 6824
  }, 
  {
    city: "Oakley", 
    name: "Main St & Carol", 
    country: "US", 
    lng: -121.7318115234375, 
    lat: 38.002437591552734, 
    store_id: 6825
  }, 
  {
    city: "Buena Park", 
    name: "Valley View & La Palma", 
    country: "US", 
    lng: -118.02806091308594, 
    lat: 33.84800720214844, 
    store_id: 6826
  }, 
  {
    city: "Visalia", 
    name: "Hwy 198 & Demaree, Visalia", 
    country: "US", 
    lng: -119.3293228149414, 
    lat: 36.326454162597656, 
    store_id: 6827
  }, 
  {
    city: "Moorpark", 
    name: "Campus Park & Collins, Moorpark", 
    country: "US", 
    lng: -118.84381866455078, 
    lat: 34.29579162597656, 
    store_id: 6828
  }, 
  {
    city: "Highlands Ranch", 
    name: "W Towne Center Dr & Santa Fe Dr", 
    country: "US", 
    lng: -105.03527069091797, 
    lat: 39.54884719848633, 
    store_id: 6829
  }, 
  {
    city: "Honolulu", 
    name: "Safeway - Kapahulu #2747", 
    country: "US", 
    lng: -157.81443786621094, 
    lat: 21.28373146057129, 
    store_id: 6830
  }, 
  {
    city: "Davenport", 
    name: "Davenport - 53rd & Elmore", 
    country: "US", 
    lng: -90.52982330322266, 
    lat: 41.574371337890625, 
    store_id: 6831
  }, 
  {
    city: "Crystal Lake", 
    name: "Route 431 & Rakow", 
    country: "US", 
    lng: -88.28570556640625, 
    lat: 42.21042251586914, 
    store_id: 6832
  }, 
  {
    city: "Manchester", 
    name: "Manchester, S. Willow St.", 
    country: "US", 
    lng: -71.43844604492188, 
    lat: 42.960289001464844, 
    store_id: 6835
  }, 
  {
    city: "Portland", 
    name: "Cascade Station- Portland", 
    country: "US", 
    lng: -122.55786895751953, 
    lat: 45.572906494140625, 
    store_id: 6837
  }, 
  {
    city: "El Paso", 
    name: "I-54 and Transmountain", 
    country: "US", 
    lng: -106.44037628173828, 
    lat: 31.899768829345703, 
    store_id: 6838
  }, 
  {
    city: "Key Largo", 
    name: "Mile Marker 100", 
    country: "US", 
    lng: -80.4408187866211, 
    lat: 25.094844818115234, 
    store_id: 6841
  }, 
  {
    city: "Chester", 
    name: "Safeway-Chester #1939", 
    country: "US", 
    lng: -76.27456665039062, 
    lat: 38.97384262084961, 
    store_id: 6843
  }, 
  {
    city: "Saginaw", 
    name: "Saginaw Valley State University", 
    country: "US", 
    lng: -83.95996856689453, 
    lat: 43.51301956176758, 
    store_id: 6844
  }, 
  {
    city: "Columbia", 
    name: "Broadway & Fairview", 
    country: "US", 
    lng: -92.38113403320312, 
    lat: 38.95541763305664, 
    store_id: 6845
  }, 
  {
    city: "Biloxi", 
    name: "Popps & Pass", 
    country: "US", 
    lng: -88.97661590576172, 
    lat: 30.402040481567383, 
    store_id: 6846
  }, 
  {
    city: "Mahwah", 
    name: "Acme - Mahwah #1058", 
    country: "US", 
    lng: -74.14667510986328, 
    lat: 41.09897232055664, 
    store_id: 6847
  }, 
  {
    city: "Langhorne", 
    name: "Target Langhorne T-1135", 
    country: "US", 
    lng: -74.8777847290039, 
    lat: 40.17681884765625, 
    store_id: 6848
  }, 
  {
    city: "Keller", 
    name: "Tom Thumb - Keller #1780", 
    country: "US", 
    lng: -97.22817993164062, 
    lat: 32.93252944946289, 
    store_id: 6849
  }, 
  {
    city: "Southlake", 
    name: "Tom Thumb - Southlake #2580", 
    country: "US", 
    lng: -97.15203094482422, 
    lat: 32.943084716796875, 
    store_id: 6850
  }, 
  {
    city: "Glen Allen", 
    name: "Target Glen Allen T-1019", 
    country: "US", 
    lng: -77.46328735351562, 
    lat: 37.673057556152344, 
    store_id: 6853
  }, 
  {
    city: "Fairbanks", 
    name: "Safeway - Fairbanks #2754", 
    country: "US", 
    lng: -147.80865478515625, 
    lat: 64.8354721069336, 
    store_id: 6854
  }, 
  {
    city: "Turlock", 
    name: "Safeway - Turlock #1968", 
    country: "US", 
    lng: -120.8828125, 
    lat: 37.52088165283203, 
    store_id: 6855
  }, 
  {
    city: "Dillon", 
    name: "City Market-Dillon #420", 
    country: "US", 
    lng: -106.05614471435547, 
    lat: 39.630252838134766, 
    store_id: 6856
  }, 
  {
    city: "Hoffman Estates", 
    name: "COMPASS @ ST ALEXIUS MC", 
    country: "US", 
    lng: -88.14421844482422, 
    lat: 42.0521354675293, 
    store_id: 6858
  }, 
  {
    city: "Wichita", 
    name: "Dillon's-Wichita #72", 
    country: "US", 
    lng: -97.4643325805664, 
    lat: 37.692684173583984, 
    store_id: 6859
  }, 
  {
    city: "Wichita", 
    name: "Dillon's-Wichita #56", 
    country: "US", 
    lng: -97.2636489868164, 
    lat: 37.75090789794922, 
    store_id: 6860
  }, 
  {
    city: "Alvin", 
    name: "Kroger-Alvin #321", 
    country: "US", 
    lng: -95.24610900878906, 
    lat: 29.400327682495117, 
    store_id: 6861
  }, 
  {
    city: "Nampa", 
    name: "Karcher Mall - Nampa, ID", 
    country: "US", 
    lng: -116.5987548828125, 
    lat: 43.602046966552734, 
    store_id: 6862
  }, 
  {
    city: "San Diego", 
    name: "Marine Corps Recruit Depot", 
    country: "US", 
    lng: -117.19821166992188, 
    lat: 32.74338912963867, 
    store_id: 6863
  }, 
  {
    city: "Glendale", 
    name: "Safeway - Glendale #1636", 
    country: "US", 
    lng: -112.18473052978516, 
    lat: 33.612022399902344, 
    store_id: 6864
  }, 
  {
    city: "Belton", 
    name: "Hwy 58 & Town Center", 
    country: "US", 
    lng: -94.51675415039062, 
    lat: 38.81366729736328, 
    store_id: 6866
  }, 
  {
    city: "Cary", 
    name: "Tryon Village", 
    country: "US", 
    lng: -78.74185943603516, 
    lat: 35.74616241455078, 
    store_id: 6867
  }, 
  {
    city: "Albuquerque", 
    name: "Eubank and Central-Albuquerque", 
    country: "US", 
    lng: -106.5328598022461, 
    lat: 35.07101821899414, 
    store_id: 6868
  }, 
  {
    city: "New York", 
    name: "42nd & 2nd", 
    country: "US", 
    lng: -73.9728012084961, 
    lat: 40.74978256225586, 
    store_id: 6869
  }, 
  {
    city: "Cedarhurst", 
    name: "Rockaway Tpke, Cedarhurst", 
    country: "US", 
    lng: -73.73606872558594, 
    lat: 40.62637710571289, 
    store_id: 6870
  }, 
  {
    city: "Beaverton", 
    name: "SW Cedar Hills and SW Hall", 
    country: "US", 
    lng: -122.80986022949219, 
    lat: 45.49361801147461, 
    store_id: 6871
  }, 
  {
    city: "San Antonio", 
    name: "1604 & Stone Oak", 
    country: "US", 
    lng: -98.4928970336914, 
    lat: 29.612167358398438, 
    store_id: 6872
  }, 
  {
    city: "West Jordan", 
    name: "9000 S. & Redwood, W. Jordan", 
    country: "US", 
    lng: -111.93583679199219, 
    lat: 40.587432861328125, 
    store_id: 6873
  }, 
  {
    city: "Littleton", 
    name: "Safeway - Littleton #2791", 
    country: "US", 
    lng: -105.0096206665039, 
    lat: 39.58592224121094, 
    store_id: 6857
  }, 
  {
    city: "Richmond", 
    name: "North Park Shopping Center", 
    country: "US", 
    lng: -77.4561538696289, 
    lat: 37.63401412963867, 
    store_id: 6874
  }, 
  {
    city: "Marina Del Rey", 
    name: "Vons - Marina Del Rey #2105", 
    country: "US", 
    lng: -118.43939971923828, 
    lat: 33.985191345214844, 
    store_id: 6875
  }, 
  {
    city: "Apple Valley", 
    name: "Apple Valley & Bear Valley", 
    country: "US", 
    lng: -117.24288177490234, 
    lat: 34.47144317626953, 
    store_id: 6876
  }, 
  {
    city: "Littleton", 
    name: "Wadsworth & Chatfield", 
    country: "US", 
    lng: -105.0803451538086, 
    lat: 39.56731033325195, 
    store_id: 6877
  }, 
  {
    city: "Fresno", 
    name: "Fig Garden Village", 
    country: "US", 
    lng: -119.8066635131836, 
    lat: 36.808815002441406, 
    store_id: 6882
  }, 
  {
    city: "Golden", 
    name: "Hwy 74 & Hotel Way-Evergreen, CO", 
    country: "US", 
    lng: -105.32940673828125, 
    lat: 39.69789123535156, 
    store_id: 6883
  }, 
  {
    city: "Boynton Beach", 
    name: "Gateway Blvd & Congress", 
    country: "US", 
    lng: -80.08794403076172, 
    lat: 26.54610252380371, 
    store_id: 6884
  }, 
  {
    city: "Fort Worth", 
    name: "8th & Rosedale", 
    country: "US", 
    lng: -97.34414672851562, 
    lat: 32.733642578125, 
    store_id: 6886
  }, 
  {
    city: "Las Vegas", 
    name: "Jones & Badura, Las Vegas", 
    country: "US", 
    lng: -115.22431945800781, 
    lat: 36.06272888183594, 
    store_id: 6890
  }, 
  {
    city: "Tualatin", 
    name: "Nyberg & I-5- Tualatin", 
    country: "US", 
    lng: -122.74931335449219, 
    lat: 45.38295364379883, 
    store_id: 6891
  }, 
  {
    city: "Cedar Park", 
    name: "Hwy 183 & FM 1431", 
    country: "US", 
    lng: -97.8144302368164, 
    lat: 30.526884078979492, 
    store_id: 6892
  }, 
  {
    city: "Lock Haven", 
    name: "Lock Haven University - Bentley Hal", 
    country: "US", 
    lng: -77.46172332763672, 
    lat: 41.141090393066406, 
    store_id: 6893
  }, 
  {
    city: "Maple Valley", 
    name: "QFC - Maple Valley/Wilderness Vlg #", 
    country: "US", 
    lng: -122.04505920410156, 
    lat: 47.38812255859375, 
    store_id: 6895
  }, 
  {
    city: "New Iberia", 
    name: "Admiral Doyle & Lewis", 
    country: "US", 
    lng: -91.8189697265625, 
    lat: 29.984909057617188, 
    store_id: 6896
  }, 
  {
    city: "Lafayette", 
    name: "Kaliste Saloom & Pinhook", 
    country: "US", 
    lng: -92.0132827758789, 
    lat: 30.188074111938477, 
    store_id: 6897
  }, 
  {
    city: "Newton", 
    name: "Hy-Vee - Newton #1", 
    country: "US", 
    lng: -93.03427124023438, 
    lat: 41.69917297363281, 
    store_id: 6898
  }, 
  {
    city: "Collinsville", 
    name: "Bluff Rd. & I-55", 
    country: "US", 
    lng: -90.01461029052734, 
    lat: 38.676185607910156, 
    store_id: 6899
  }, 
  {
    city: "Burlington", 
    name: "Kroger-Burlington, KY #434", 
    country: "US", 
    lng: -84.69213104248047, 
    lat: 39.018245697021484, 
    store_id: 6900
  }, 
  {
    city: "Westboro", 
    name: "Roche Bros - Westboro #119", 
    country: "US", 
    lng: -71.60809326171875, 
    lat: 42.269989013671875, 
    store_id: 6901
  }, 
  {
    city: "Indianapolis", 
    name: "Emerson & Elenor", 
    country: "US", 
    lng: -86.08199310302734, 
    lat: 39.700172424316406, 
    store_id: 6902
  }, 
  {
    city: "Olathe", 
    name: "151st & Blackbob", 
    country: "US", 
    lng: -94.76237487792969, 
    lat: 38.85521697998047, 
    store_id: 6903
  }, 
  {
    city: "Citrus Heights", 
    name: "Auburn & Sylvan", 
    country: "US", 
    lng: -121.29166412353516, 
    lat: 38.69389724731445, 
    store_id: 6904
  }, 
  {
    city: "Ramsey", 
    name: "Franklin Square - Ramsey", 
    country: "US", 
    lng: -74.138916015625, 
    lat: 41.07613754272461, 
    store_id: 6905
  }, 
  {
    city: "Baltimore", 
    name: "1209 N. Charles Street", 
    country: "US", 
    lng: -76.61589813232422, 
    lat: 39.3043327331543, 
    store_id: 6906
  }, 
  {
    city: "Durham", 
    name: "Imperial Corners", 
    country: "US", 
    lng: -78.84729766845703, 
    lat: 35.879329681396484, 
    store_id: 6907
  }, 
  {
    city: "Las Vegas", 
    name: "Cheyenne & Shady Timber, Las Vegas", 
    country: "US", 
    lng: -115.32462310791016, 
    lat: 36.21868133544922, 
    store_id: 6908
  }, 
  {
    city: "East Setauket", 
    name: "East Setauket, Nesconset HIghway", 
    country: "US", 
    lng: -73.07376098632812, 
    lat: 40.90430450439453, 
    store_id: 6909
  }, 
  {
    city: "Hillsboro", 
    name: "Reedville Crossing- Hillsboro", 
    country: "US", 
    lng: -122.90511322021484, 
    lat: 45.49800109863281, 
    store_id: 6910
  }, 
  {
    city: "Vail", 
    name: "Arrabelle at Vail Square Lionshead", 
    country: "US", 
    lng: -106.39064025878906, 
    lat: 39.64301300048828, 
    store_id: 6911
  }, 
  {
    city: "Mesa", 
    name: "Safeway - Mesa #247", 
    country: "US", 
    lng: -111.8598403930664, 
    lat: 33.36315155029297, 
    store_id: 6912
  }, 
  {
    city: "Henderson", 
    name: "Smith's-Henderson #346", 
    country: "US", 
    lng: -115.10272216796875, 
    lat: 35.999366760253906, 
    store_id: 6914
  }, 
  {
    city: "Warner Robins", 
    name: "Kroger - Warner Robins, GA #696", 
    country: "US", 
    lng: -83.69741821289062, 
    lat: 32.615116119384766, 
    store_id: 6915
  }, 
  {
    city: "Norwalk", 
    name: "Rosecrans & Shoemaker, Norwalk", 
    country: "US", 
    lng: -118.05499267578125, 
    lat: 33.90265655517578, 
    store_id: 6916
  }, 
  {
    city: "Westminster", 
    name: "144th and I-25-Westminster", 
    country: "US", 
    lng: -104.99137878417969, 
    lat: 39.95880126953125, 
    store_id: 6917
  }, 
  {
    city: "Indianapolis", 
    name: "Southport & Gray", 
    country: "US", 
    lng: -86.0990219116211, 
    lat: 39.66539764404297, 
    store_id: 6918
  }, 
  {
    city: "Denver", 
    name: "The Curtis Hotel Lobby", 
    country: "US", 
    lng: -104.99762725830078, 
    lat: 39.74588394165039, 
    store_id: 6919
  }, 
  {
    city: "Cave Creek", 
    name: "Fry's #67 Cave Creek", 
    country: "US", 
    lng: -111.97691345214844, 
    lat: 33.79740905761719, 
    store_id: 6920
  }, 
  {
    city: "Ft. Benning", 
    name: "AAFES Ft. Benning Shopping Center", 
    country: "US", 
    lng: -84.90229034423828, 
    lat: 32.38113784790039, 
    store_id: 6921
  }, 
  {
    city: "Fort Gordon", 
    name: "Eisenhower Hospital - Main Entry", 
    country: "US", 
    lng: -82.12581634521484, 
    lat: 33.43108367919922, 
    store_id: 6922
  }, 
  {
    city: "Quincy", 
    name: "Quincy-Broadway & 33rd", 
    country: "US", 
    lng: -91.36556243896484, 
    lat: 39.935577392578125, 
    store_id: 6923
  }, 
  {
    city: "Boston", 
    name: "Boston DoubleTree", 
    country: "US", 
    lng: -71.06415557861328, 
    lat: 42.348960876464844, 
    store_id: 6924
  }, 
  {
    city: "St. Louis", 
    name: "Manchester & McKnight", 
    country: "US", 
    lng: -90.36744689941406, 
    lat: 38.60863494873047, 
    store_id: 6925
  }, 
  {
    city: "Kenilworth", 
    name: "Acme - Kenilworth #1096", 
    country: "US", 
    lng: -74.28312683105469, 
    lat: 40.678829193115234, 
    store_id: 6926
  }, 
  {
    city: "Dublin", 
    name: "Mall at Tuttle Crossing", 
    country: "US", 
    lng: -83.13098907470703, 
    lat: 40.073123931884766, 
    store_id: 6927
  }, 
  {
    city: "North Brunswick", 
    name: "North Brunswick, NJ", 
    country: "US", 
    lng: -74.45862579345703, 
    lat: 40.46141815185547, 
    store_id: 6929
  }, 
  {
    city: "Philadelphia", 
    name: "6024 Ridge Avenue", 
    country: "US", 
    lng: -75.21391296386719, 
    lat: 40.03212356567383, 
    store_id: 6930
  }, 
  {
    city: "Shawnee", 
    name: "Shawnee Mission & Monticello", 
    country: "US", 
    lng: -94.83992767333984, 
    lat: 39.0092658996582, 
    store_id: 6933
  }, 
  {
    city: "Cypress", 
    name: "Hwy 290 & Spring Cypress", 
    country: "US", 
    lng: -95.69134521484375, 
    lat: 29.96654510498047, 
    store_id: 6934
  }, 
  {
    city: "Fort Worth", 
    name: "360 & Trinity", 
    country: "US", 
    lng: -97.05931854248047, 
    lat: 32.82278060913086, 
    store_id: 6935
  }, 
  {
    city: "Staunton", 
    name: "Staunton", 
    country: "US", 
    lng: -79.0428695678711, 
    lat: 38.1345100402832, 
    store_id: 6936
  }, 
  {
    city: "Clementon", 
    name: "1490 Blackwood-Clementon Road", 
    country: "US", 
    lng: -75.04193878173828, 
    lat: 39.80283737182617, 
    store_id: 6938
  }, 
  {
    city: "Fredericksburg", 
    name: "Harrison Crossing", 
    country: "US", 
    lng: -77.5696792602539, 
    lat: 38.292144775390625, 
    store_id: 6940
  }, 
  {
    city: "Los Angeles", 
    name: "Cahuenga & Barham", 
    country: "US", 
    lng: -118.34854125976562, 
    lat: 34.12958908081055, 
    store_id: 6941
  }, 
  {
    city: "Mississippi State", 
    name: "Missisippi State University", 
    country: "US", 
    lng: -88.79440307617188, 
    lat: 33.45370101928711, 
    store_id: 6942
  }, 
  {
    city: "Sparks", 
    name: "Pyramid & Los Altos - Sparks", 
    country: "US", 
    lng: -119.740966796875, 
    lat: 39.58369445800781, 
    store_id: 6943
  }, 
  {
    city: "New York", 
    name: "NHL store @ 47th & Sixth", 
    country: "US", 
    lng: -73.98245239257812, 
    lat: 40.75778579711914, 
    store_id: 6945
  }, 
  {
    city: "Petoskey", 
    name: "Glen's Fresh Market Petoskey North", 
    country: "US", 
    lng: -84.86540222167969, 
    lat: 45.41400146484375, 
    store_id: 6946
  }, 
  {
    city: "Coral Gables", 
    name: "475 S Dixie Hwy", 
    country: "US", 
    lng: -80.2631607055664, 
    lat: 25.725671768188477, 
    store_id: 6947
  }, 
  {
    city: "La Grange", 
    name: "Lafayette Pkwy & S Davis Rd", 
    country: "US", 
    lng: -84.9826889038086, 
    lat: 33.0416374206543, 
    store_id: 6949
  }, 
  {
    city: "Lusby", 
    name: "Lusby Commons", 
    country: "US", 
    lng: -76.44114685058594, 
    lat: 38.373409271240234, 
    store_id: 6950
  }, 
  {
    city: "Atlanta", 
    name: "North Druid Hills & Briarcliff", 
    country: "US", 
    lng: -84.33124542236328, 
    lat: 33.827518463134766, 
    store_id: 6951
  }, 
  {
    city: "Duncanville", 
    name: "Tom Thumb - Duncanville #3563", 
    country: "US", 
    lng: -96.92381286621094, 
    lat: 32.64821243286133, 
    store_id: 6952
  }, 
  {
    city: "Port Townsend", 
    name: "Safeway - Port Townsend #538", 
    country: "US", 
    lng: -122.78262329101562, 
    lat: 48.108070373535156, 
    store_id: 6953
  }, 
  {
    city: "Zionsville", 
    name: "SR 334 & Ford", 
    country: "US", 
    lng: -86.27562713623047, 
    lat: 39.95066833496094, 
    store_id: 6954
  }, 
  {
    city: "Santa Ana", 
    name: "Bristol & Warner", 
    country: "US", 
    lng: -117.88490295410156, 
    lat: 33.715858459472656, 
    store_id: 6956
  }, 
  {
    city: "Clive", 
    name: "73rd & Buffalo", 
    country: "US", 
    lng: -93.71849060058594, 
    lat: 41.59688949584961, 
    store_id: 6959
  }, 
  {
    city: "Northbrook", 
    name: "Skokie & Dundee - Northbrook", 
    country: "US", 
    lng: -87.79154205322266, 
    lat: 42.13694763183594, 
    store_id: 6960
  }, 
  {
    city: "Indianapolis", 
    name: "56th & Illinois", 
    country: "US", 
    lng: -86.15911865234375, 
    lat: 39.85444259643555, 
    store_id: 6961
  }, 
  {
    city: "Monroe", 
    name: "N 18th St & Forsythe", 
    country: "US", 
    lng: -92.11556243896484, 
    lat: 32.53000259399414, 
    store_id: 6963
  }, 
  {
    city: "Freehold", 
    name: "Freehold Raceway Mall", 
    country: "US", 
    lng: -74.3001937866211, 
    lat: 40.25340270996094, 
    store_id: 6965
  }, 
  {
    city: "Bronx", 
    name: "235th & Johnson Ave", 
    country: "US", 
    lng: -73.90997314453125, 
    lat: 40.885780334472656, 
    store_id: 6966
  }, 
  {
    city: "Columbus", 
    name: "Bethel Road", 
    country: "US", 
    lng: -83.04483795166016, 
    lat: 40.0628662109375, 
    store_id: 6968
  }, 
  {
    city: "Westchester", 
    name: "Tylersville & Cox", 
    country: "US", 
    lng: -84.36660766601562, 
    lat: 39.35348892211914, 
    store_id: 6970
  }, 
  {
    city: "Sacramento", 
    name: "Fulton & Cottage", 
    country: "US", 
    lng: -121.4017562866211, 
    lat: 38.604068756103516, 
    store_id: 6971
  }, 
  {
    city: "Burlingame", 
    name: "Marriott San Francisco Airport", 
    country: "US", 
    lng: -122.3702392578125, 
    lat: 37.601192474365234, 
    store_id: 6972
  }, 
  {
    city: "Indianapolis", 
    name: "Kroger-Indianapolis #993", 
    country: "US", 
    lng: -86.18289947509766, 
    lat: 39.66469955444336, 
    store_id: 6973
  }, 
  {
    city: "New Orleans", 
    name: "Marriott- New Orleans-Lobby", 
    country: "US", 
    lng: -90.06710052490234, 
    lat: 29.952680587768555, 
    store_id: 6974
  }, 
  {
    city: "Bowie", 
    name: "Target Bowie T-1004", 
    country: "US", 
    lng: -76.72250366210938, 
    lat: 38.95234680175781, 
    store_id: 6977
  }, 
  {
    city: "Mooresville", 
    name: "Harris Teeter - Mooresville #274", 
    country: "US", 
    lng: -80.8962173461914, 
    lat: 35.60227966308594, 
    store_id: 6980
  }, 
  {
    city: "Koloa", 
    name: "Poipu Shopping Village", 
    country: "US", 
    lng: -159.45883178710938, 
    lat: 21.879016876220703, 
    store_id: 6981
  }, 
  {
    city: "Garden Grove", 
    name: "Fairview & Garden Grove", 
    country: "US", 
    lng: -117.90264129638672, 
    lat: 33.77426528930664, 
    store_id: 6982
  }, 
  {
    city: "Castle Rock", 
    name: "Founders & Allen - Castle Rock, CO", 
    country: "US", 
    lng: -104.86392974853516, 
    lat: 39.41437530517578, 
    store_id: 6984
  }, 
  {
    city: "Westminster", 
    name: "101st & Wadsworth, Westminster", 
    country: "US", 
    lng: -105.09677124023438, 
    lat: 39.88001251220703, 
    store_id: 6985
  }, 
  {
    city: "Orlando", 
    name: "Prime Outlets at Orlando", 
    country: "US", 
    lng: -81.45134735107422, 
    lat: 28.474397659301758, 
    store_id: 6986
  }, 
  {
    city: "Shreveport", 
    name: "Bert Kouns & I-49", 
    country: "US", 
    lng: -93.76030731201172, 
    lat: 32.39788818359375, 
    store_id: 6987
  }, 
  {
    city: "Walker", 
    name: "Walker, Alpine & Coventry", 
    country: "US", 
    lng: -85.68968963623047, 
    lat: 43.0230598449707, 
    store_id: 6988
  }, 
  {
    city: "Florissant", 
    name: "Graham & I 270", 
    country: "US", 
    lng: -90.33555603027344, 
    lat: 38.77735137939453, 
    store_id: 6989
  }, 
  {
    city: "Cary", 
    name: "Crossroads Blvd & Caitboo Ave", 
    country: "US", 
    lng: -78.74101257324219, 
    lat: 35.76054000854492, 
    store_id: 6990
  }, 
  {
    city: "Huntersville", 
    name: "Rosedale", 
    country: "US", 
    lng: -80.86381530761719, 
    lat: 35.406497955322266, 
    store_id: 6991
  }, 
  {
    city: "Las Vegas", 
    name: "Eastern & Bonanza, Las Vegas", 
    country: "US", 
    lng: -115.11668395996094, 
    lat: 36.17359161376953, 
    store_id: 6992
  }, 
  {
    city: "Reno", 
    name: "Longley & McCarran - Reno", 
    country: "US", 
    lng: -119.76481628417969, 
    lat: 39.4736213684082, 
    store_id: 6993
  }, 
  {
    city: "New York", 
    name: "Houston & W. Broadway", 
    country: "US", 
    lng: -74.00025939941406, 
    lat: 40.726890563964844, 
    store_id: 6995
  }, 
  {
    city: "Surprise", 
    name: "Bashas - Surprise #137", 
    country: "US", 
    lng: -112.39167022705078, 
    lat: 33.60958480834961, 
    store_id: 6996
  }, 
  {
    city: "Clinton Township", 
    name: "The Mall at Partridge Creek", 
    country: "US", 
    lng: -82.94571685791016, 
    lat: 42.6253547668457, 
    store_id: 6997
  }, 
  {
    city: "WALLA WALLA", 
    name: "Safeway #307 - Walla Walla", 
    country: "US", 
    lng: -118.33753967285156, 
    lat: 46.07018280029297, 
    store_id: 6998
  }, 
  {
    city: "New York", 
    name: "Macy's 6th Floor", 
    country: "US", 
    lng: -73.989501953125, 
    lat: 40.75111770629883, 
    store_id: 6999
  }, 
  {
    city: "Fayetteville", 
    name: "University of Arkansas", 
    country: "US", 
    lng: -94.17512512207031, 
    lat: 36.06646728515625, 
    store_id: 7000
  }, 
  {
    city: "Indianapolis", 
    name: "Kessler & Michigan", 
    country: "US", 
    lng: -86.19523620605469, 
    lat: 39.85604476928711, 
    store_id: 7002
  }, 
  {
    city: "Frisco", 
    name: "Custer & Eldorado", 
    country: "US", 
    lng: -96.73350524902344, 
    lat: 33.1729850769043, 
    store_id: 7005
  }, 
  {
    city: "Everett", 
    name: "Safeway-Silver Firs #2645", 
    country: "US", 
    lng: -122.15396118164062, 
    lat: 47.87563705444336, 
    store_id: 7006
  }, 
  {
    city: "Glendale", 
    name: "Pacific & Stocker, Glendale", 
    country: "US", 
    lng: -118.26478576660156, 
    lat: 34.16337203979492, 
    store_id: 7007
  }, 
  {
    city: "Victorville", 
    name: "Palmdale & Kentwood", 
    country: "US", 
    lng: -117.32804107666016, 
    lat: 34.50672149658203, 
    store_id: 7008
  }, 
  {
    city: "San Pedro", 
    name: "Gaffey & 5th, San Pedro", 
    country: "US", 
    lng: -118.29210662841797, 
    lat: 33.739891052246094, 
    store_id: 7009
  }, 
  {
    city: "Red Bluff", 
    name: "I-5 & Adobe - Red Bluff", 
    country: "US", 
    lng: -122.23693084716797, 
    lat: 40.19131851196289, 
    store_id: 7010
  }, 
  {
    city: "Castaic", 
    name: "Castaic Rd & Lake Hughes", 
    country: "US", 
    lng: -118.62199401855469, 
    lat: 34.49539566040039, 
    store_id: 7011
  }, 
  {
    city: "San Rafael", 
    name: "Safeway - San Rafael #653", 
    country: "US", 
    lng: -122.52938842773438, 
    lat: 37.970306396484375, 
    store_id: 7012
  }, 
  {
    city: "San Jose", 
    name: "Safeway - San Jose #767", 
    country: "US", 
    lng: -122.01229095458984, 
    lat: 37.309749603271484, 
    store_id: 7013
  }, 
  {
    city: "Charleston", 
    name: "King St & Calhoun St", 
    country: "US", 
    lng: -79.93649291992188, 
    lat: 32.78589630126953, 
    store_id: 7015
  }, 
  {
    city: "Simpsonville", 
    name: "Fairview Rd & Hunters Wood Dr", 
    country: "US", 
    lng: -82.25597381591797, 
    lat: 34.7115592956543, 
    store_id: 7016
  }, 
  {
    city: "Victorville", 
    name: "Bear Valley & Cottonwood", 
    country: "US", 
    lng: -117.34004211425781, 
    lat: 34.47086715698242, 
    store_id: 7017
  }, 
  {
    city: "Las Vegas", 
    name: "Rainbow & Warm Springs, Las Vegas", 
    country: "US", 
    lng: -115.24227142333984, 
    lat: 36.05682373046875, 
    store_id: 7018
  }, 
  {
    city: "Edmond", 
    name: "15th & Bryant", 
    country: "US", 
    lng: -97.4610595703125, 
    lat: 35.638729095458984, 
    store_id: 7019
  }, 
  {
    city: "Belle Vernon", 
    name: "Belle Vernon", 
    country: "US", 
    lng: -79.84358978271484, 
    lat: 40.13982391357422, 
    store_id: 7020
  }, 
  {
    city: "Bellevue", 
    name: "Eastgate-Bellevue", 
    country: "US", 
    lng: -122.13481903076172, 
    lat: 47.582130432128906, 
    store_id: 7021
  }, 
  {
    city: "Dearborn Heights", 
    name: "Target Dearborn Heights T-353", 
    country: "US", 
    lng: -83.30240631103516, 
    lat: 42.328208923339844, 
    store_id: 7022
  }, 
  {
    city: "Huntersville", 
    name: "Teeter-Huntersville #272", 
    country: "US", 
    lng: -80.89580535888672, 
    lat: 35.443626403808594, 
    store_id: 7023
  }, 
  {
    city: "Carmichael", 
    name: "Landis & Fair Oaks", 
    country: "US", 
    lng: -121.32764434814453, 
    lat: 38.626258850097656, 
    store_id: 7025
  }, 
  {
    city: "Bolingbrook", 
    name: "Bolingbrook-Rte 53 & Remington", 
    country: "US", 
    lng: -88.06864929199219, 
    lat: 41.68818283081055, 
    store_id: 7026
  }, 
  {
    city: "Logansport", 
    name: "Martins-Logansport #18", 
    country: "US", 
    lng: -86.33073425292969, 
    lat: 40.75770950317383, 
    store_id: 7027
  }, 
  {
    city: "Las Vegas", 
    name: "Red Rock Station - Food Court", 
    country: "US", 
    lng: -115.33350372314453, 
    lat: 36.158382415771484, 
    store_id: 7028
  }, 
  {
    city: "Sioux Falls", 
    name: "Hy Vee Foods-Sioux Falls #5", 
    country: "US", 
    lng: -96.68792724609375, 
    lat: 43.54767990112305, 
    store_id: 7029
  }, 
  {
    city: "Issaquah", 
    name: "QFC - Issaquah #821", 
    country: "US", 
    lng: -122.0603256225586, 
    lat: 47.54638671875, 
    store_id: 7031
  }, 
  {
    city: "Fond Du Lac", 
    name: "Target Fond Du Lac T-808", 
    country: "US", 
    lng: -88.48450469970703, 
    lat: 43.79079818725586, 
    store_id: 7032
  }, 
  {
    city: "Casa Grande", 
    name: "Florence & Peart, Casa Grande", 
    country: "US", 
    lng: -111.72323608398438, 
    lat: 32.879024505615234, 
    store_id: 7034
  }, 
  {
    city: "Phoenix", 
    name: "Fry's #121 Phoenix", 
    country: "US", 
    lng: -111.9946517944336, 
    lat: 33.611087799072266, 
    store_id: 7035
  }, 
  {
    city: "Colorado Springs", 
    name: "Safeway - Colorado Springs #2816", 
    country: "US", 
    lng: -104.82308959960938, 
    lat: 38.806034088134766, 
    store_id: 7036
  }, 
  {
    city: "Fairfax", 
    name: "East Market at Fairlakes", 
    country: "US", 
    lng: -77.38117218017578, 
    lat: 38.85740280151367, 
    store_id: 7038
  }, 
  {
    city: "Miami", 
    name: "Eden Roc South Beach", 
    country: "US", 
    lng: -80.12194061279297, 
    lat: 25.81957244873047, 
    store_id: 7039
  }, 
  {
    city: "North Hollywood", 
    name: "Target North Hollywood T-294", 
    country: "US", 
    lng: -118.37135314941406, 
    lat: 34.188114166259766, 
    store_id: 7040
  }, 
  {
    city: "Aurora", 
    name: "Aurora-Ogden & Eola", 
    country: "US", 
    lng: -88.25254821777344, 
    lat: 41.737403869628906, 
    store_id: 7041
  }, 
  {
    city: "Menlo Park", 
    name: "Safeway - Menlo Park #2719", 
    country: "US", 
    lng: -122.17886352539062, 
    lat: 37.450836181640625, 
    store_id: 7042
  }, 
  {
    city: "Duluth", 
    name: "Satellite Blvd & Old P'tree Rd", 
    country: "US", 
    lng: -84.083740234375, 
    lat: 34.001956939697266, 
    store_id: 7043
  }, 
  {
    city: "Washington", 
    name: "Washington Harbour", 
    country: "US", 
    lng: -77.06024169921875, 
    lat: 38.902278900146484, 
    store_id: 7045
  }, 
  {
    city: "Glen Cove", 
    name: "Sea Cliff, Glen Cove Ave", 
    country: "US", 
    lng: -73.63491821289062, 
    lat: 40.84906768798828, 
    store_id: 7047
  }, 
  {
    city: "San Jose", 
    name: "Berryessa & King St", 
    country: "US", 
    lng: -121.87294006347656, 
    lat: 37.37310791015625, 
    store_id: 7048
  }, 
  {
    city: "San Jose", 
    name: "Target San Jose College Park T-2088", 
    country: "US", 
    lng: -121.90455627441406, 
    lat: 37.33936309814453, 
    store_id: 7049
  }, 
  {
    city: "Sacramento", 
    name: "Target Sacramento T-2115", 
    country: "US", 
    lng: -121.49879455566406, 
    lat: 38.64090347290039, 
    store_id: 7050
  }, 
  {
    city: "Milford", 
    name: "Target Milford T-2045", 
    country: "US", 
    lng: -73.03742218017578, 
    lat: 41.235084533691406, 
    store_id: 7051
  }, 
  {
    city: "Chicago", 
    name: "Target Chicago McKinley Park T-2078", 
    country: "US", 
    lng: -87.67486572265625, 
    lat: 41.835533142089844, 
    store_id: 7053
  }, 
  {
    city: "Hoffman Estates", 
    name: "Target Hoffman Estates T-2122", 
    country: "US", 
    lng: -88.19280242919922, 
    lat: 42.06650161743164, 
    store_id: 7054
  }, 
  {
    city: "Lanesboro", 
    name: "Target Lanesborough T-2127", 
    country: "US", 
    lng: -73.18317413330078, 
    lat: 42.54493713378906, 
    store_id: 7055
  }, 
  {
    city: "Topsham", 
    name: "Target Topsham T-2130", 
    country: "US", 
    lng: -69.96420288085938, 
    lat: 43.944698333740234, 
    store_id: 7056
  }, 
  {
    city: "Howell", 
    name: "Target Hartland T-1971", 
    country: "US", 
    lng: -83.75592041015625, 
    lat: 42.63315963745117, 
    store_id: 7057
  }, 
  {
    city: "Branson", 
    name: "Target Branson T-2098", 
    country: "US", 
    lng: -93.25180053710938, 
    lat: 36.650001525878906, 
    store_id: 7058
  }, 
  {
    city: "Charlotte", 
    name: "Target Charlotte Far South T-2090", 
    country: "US", 
    lng: -80.80817413330078, 
    lat: 35.03744888305664, 
    store_id: 7059
  }, 
  {
    city: "Boynton Beach", 
    name: "Super Target Boynton Beach ST-2067", 
    country: "US", 
    lng: -80.16557312011719, 
    lat: 26.52631187438965, 
    store_id: 7052
  }, 
  {
    city: "Keene", 
    name: "Target Keene T-2120", 
    country: "US", 
    lng: -72.30549621582031, 
    lat: 42.92799758911133, 
    store_id: 7060
  }, 
  {
    city: "South Plainfield", 
    name: "Target South Plainfield T-1929", 
    country: "US", 
    lng: -74.42669677734375, 
    lat: 40.548622131347656, 
    store_id: 7061
  }, 
  {
    city: "Riverside", 
    name: "Target Delran T-2104", 
    country: "US", 
    lng: -74.95919036865234, 
    lat: 40.01236343383789, 
    store_id: 7062
  }, 
  {
    city: "Staten Island", 
    name: "Target Staten Island T-2006", 
    country: "US", 
    lng: -74.23331451416016, 
    lat: 40.52827835083008, 
    store_id: 7063
  }, 
  {
    city: "Newburgh", 
    name: "Target Newburgh T-2076", 
    country: "US", 
    lng: -74.0586166381836, 
    lat: 41.50543975830078, 
    store_id: 7064
  }, 
  {
    city: "Wadsworth", 
    name: "Target Wadsworth T-2119", 
    country: "US", 
    lng: -81.69007110595703, 
    lat: 41.04054260253906, 
    store_id: 7065
  }, 
  {
    city: "Keizer", 
    name: "Target Keizer T-2110", 
    country: "US", 
    lng: -122.99453735351562, 
    lat: 45.012229919433594, 
    store_id: 7066
  }, 
  {
    city: "Pittsburgh", 
    name: "Target Mount Nebo T-2077", 
    country: "US", 
    lng: -80.06840515136719, 
    lat: 40.53590393066406, 
    store_id: 7067
  }, 
  {
    city: "Monaca", 
    name: "Target Monaca T-2100", 
    country: "US", 
    lng: -80.30343627929688, 
    lat: 40.683834075927734, 
    store_id: 7068
  }, 
  {
    city: "Carlisle", 
    name: "Target Carlisle T-2099", 
    country: "US", 
    lng: -77.15904235839844, 
    lat: 40.196044921875, 
    store_id: 7069
  }, 
  {
    city: "North Huntingdon", 
    name: "Target Irwin T-2114", 
    country: "US", 
    lng: -79.68870544433594, 
    lat: 40.32124710083008, 
    store_id: 7070
  }, 
  {
    city: "Mount Juliet", 
    name: "Target Mount Juliet T-2126", 
    country: "US", 
    lng: -86.50838470458984, 
    lat: 36.16884231567383, 
    store_id: 7071
  }, 
  {
    city: "Laredo", 
    name: "Target Laredo T-2112", 
    country: "US", 
    lng: -99.4489974975586, 
    lat: 27.51592254638672, 
    store_id: 7072
  }, 
  {
    city: "South Jordan", 
    name: "Target South Jordan T-2123", 
    country: "US", 
    lng: -111.98273468017578, 
    lat: 40.54158020019531, 
    store_id: 7073
  }, 
  {
    city: "Las Vegas", 
    name: "Excalibur - Las Vegas Food Court", 
    country: "US", 
    lng: -115.17361450195312, 
    lat: 36.09953308105469, 
    store_id: 7074
  }, 
  {
    city: "Ocala", 
    name: "Target Ocala T-873", 
    country: "US", 
    lng: -82.15723419189453, 
    lat: 29.17398452758789, 
    store_id: 7075
  }, 
  {
    city: "Moline", 
    name: "Target Moline T-926", 
    country: "US", 
    lng: -90.52506256103516, 
    lat: 41.46932601928711, 
    store_id: 7076
  }, 
  {
    city: "Riverbank", 
    name: "Oakdale & Claribel - Riverbank", 
    country: "US", 
    lng: -120.95789337158203, 
    lat: 37.71183395385742, 
    store_id: 7077
  }, 
  {
    city: "Atlanta", 
    name: "Piedmont & Sydney Marcus", 
    country: "US", 
    lng: -84.36557006835938, 
    lat: 33.82564926147461, 
    store_id: 7078
  }, 
  {
    city: "Antioch", 
    name: "18th & A Street", 
    country: "US", 
    lng: -121.80616760253906, 
    lat: 38.00400161743164, 
    store_id: 7079
  }, 
  {
    city: "Homewood", 
    name: "Homewood-Halsted & Ridge", 
    country: "US", 
    lng: -87.63675689697266, 
    lat: 41.56496810913086, 
    store_id: 7080
  }, 
  {
    city: "Chicago", 
    name: "LaSalle & Monroe", 
    country: "US", 
    lng: -87.63214111328125, 
    lat: 41.88079071044922, 
    store_id: 7081
  }, 
  {
    city: "Liberty", 
    name: "I-35 & SR-152", 
    country: "US", 
    lng: -94.44992065429688, 
    lat: 39.245086669921875, 
    store_id: 7082
  }, 
  {
    city: "New York", 
    name: "55th & Lex", 
    country: "US", 
    lng: -73.96997833251953, 
    lat: 40.75944519042969, 
    store_id: 7083
  }, 
  {
    city: "Beaverton", 
    name: "Valley Plaza- Beaverton", 
    country: "US", 
    lng: -122.77273559570312, 
    lat: 45.486080169677734, 
    store_id: 7084
  }, 
  {
    city: "Vancouver", 
    name: "Vancouver Park Place- Vancouver", 
    country: "US", 
    lng: -122.58863067626953, 
    lat: 45.654720306396484, 
    store_id: 7085
  }, 
  {
    city: "Kirkland", 
    name: "Bridle Trails Center- Kirkland", 
    country: "US", 
    lng: -122.16587829589844, 
    lat: 47.66524887084961, 
    store_id: 7086
  }, 
  {
    city: "Franklin", 
    name: "27th & Sycamore", 
    country: "US", 
    lng: -87.95020294189453, 
    lat: 42.92538833618164, 
    store_id: 7087
  }, 
  {
    city: "Novato", 
    name: "Redwood & Olive", 
    country: "US", 
    lng: -122.56822204589844, 
    lat: 38.11180114746094, 
    store_id: 7088
  }, 
  {
    city: "Glendora", 
    name: "Route 66 & Lone Hill, Glendora", 
    country: "US", 
    lng: -117.83023071289062, 
    lat: 34.128536224365234, 
    store_id: 7089
  }, 
  {
    city: "San Jose", 
    name: "Coleman & Taylor", 
    country: "US", 
    lng: -121.91156768798828, 
    lat: 37.34136962890625, 
    store_id: 7091
  }, 
  {
    city: "Grand Junction", 
    name: "24 Rd & Kassandra- Grand Junction", 
    country: "US", 
    lng: -108.60872650146484, 
    lat: 39.09579849243164, 
    store_id: 7092
  }, 
  {
    city: "Noblesville", 
    name: "SR-32 & SR-38", 
    country: "US", 
    lng: -86.02604675292969, 
    lat: 40.0472412109375, 
    store_id: 7094
  }, 
  {
    city: "Olathe", 
    name: "119th & Blackbob", 
    country: "US", 
    lng: -94.75601959228516, 
    lat: 38.912479400634766, 
    store_id: 7095
  }, 
  {
    city: "Waite Park", 
    name: "Waite Park - 2nd St S & Waite Park", 
    country: "US", 
    lng: -94.217529296875, 
    lat: 45.54951858520508, 
    store_id: 7096
  }, 
  {
    city: "Independence", 
    name: "23rd & Lee's Summit", 
    country: "US", 
    lng: -94.39380645751953, 
    lat: 39.07889175415039, 
    store_id: 7097
  }, 
  {
    city: "New York", 
    name: "Roosevelt Island", 
    country: "US", 
    lng: -73.95288848876953, 
    lat: 40.75932693481445, 
    store_id: 7098
  }, 
  {
    city: "Reno", 
    name: "The Summit at Sierra - Reno", 
    country: "US", 
    lng: -119.75094604492188, 
    lat: 39.40458297729492, 
    store_id: 7099
  }, 
  {
    city: "Dallas", 
    name: "DFW - Term C, Gate C6", 
    country: "US", 
    lng: -97.03662109375, 
    lat: 32.89926528930664, 
    store_id: 7100
  }, 
  {
    city: "Cookeville", 
    name: "Jefferson & Interstate", 
    country: "US", 
    lng: -85.50567626953125, 
    lat: 36.138580322265625, 
    store_id: 7101
  }, 
  {
    city: "Harlingen", 
    name: "Target Harlingen T-802", 
    country: "US", 
    lng: -97.72175598144531, 
    lat: 26.182968139648438, 
    store_id: 7102
  }, 
  {
    city: "San Antonio", 
    name: "The Shops at LaCantera", 
    country: "US", 
    lng: -98.61524963378906, 
    lat: 29.594989776611328, 
    store_id: 7103
  }, 
  {
    city: "Louisville", 
    name: "Mall St. Matthews", 
    country: "US", 
    lng: -85.62364959716797, 
    lat: 38.24882888793945, 
    store_id: 7106
  }, 
  {
    city: "Slingerlands", 
    name: "Price Chopper - Slingerlands #159", 
    country: "US", 
    lng: -73.8566665649414, 
    lat: 42.63893508911133, 
    store_id: 7107
  }, 
  {
    city: "Tucson", 
    name: "Safeway-Tucson #1986", 
    country: "US", 
    lng: -110.79845428466797, 
    lat: 32.11806869506836, 
    store_id: 7108
  }, 
  {
    city: "San Bruno", 
    name: "Target San Bruno T-1054", 
    country: "US", 
    lng: -122.41877746582031, 
    lat: 37.63597106933594, 
    store_id: 7109
  }, 
  {
    city: "Des Moines", 
    name: "Hy-Vee West Des Moines #4", 
    country: "US", 
    lng: -93.77466583251953, 
    lat: 41.56135177612305, 
    store_id: 7110
  }, 
  {
    city: "Troy", 
    name: "Beaumont Hospital Troy", 
    country: "US", 
    lng: -83.09159851074219, 
    lat: 42.622615814208984, 
    store_id: 7111
  }, 
  {
    city: "Plano", 
    name: "Tom Thumb - Plano #2554", 
    country: "US", 
    lng: -96.75233459472656, 
    lat: 33.039249420166016, 
    store_id: 7112
  }, 
  {
    city: "Seattle", 
    name: "QFC - West Wood Village #825", 
    country: "US", 
    lng: -122.36566162109375, 
    lat: 47.52223205566406, 
    store_id: 7113
  }, 
  {
    city: "San Leandro", 
    name: "MacArthur & Estudillo", 
    country: "US", 
    lng: -122.13967895507812, 
    lat: 37.73187255859375, 
    store_id: 7114
  }, 
  {
    city: "Carson", 
    name: "Avalon & 91 Fwy, Carson", 
    country: "US", 
    lng: -118.27044677734375, 
    lat: 33.87183380126953, 
    store_id: 7115
  }, 
  {
    city: "Palm Desert", 
    name: "Monterey & El Paseo, Palm Desert", 
    country: "US", 
    lng: -116.39129638671875, 
    lat: 33.72075271606445, 
    store_id: 7116
  }, 
  {
    city: "Washington", 
    name: "3rd & D", 
    country: "US", 
    lng: -77.01536560058594, 
    lat: 38.8847541809082, 
    store_id: 7119
  }, 
  {
    city: "Peoria", 
    name: "Peoria-University & Main", 
    country: "US", 
    lng: -89.61277770996094, 
    lat: 40.699485778808594, 
    store_id: 7120
  }, 
  {
    city: "Highwood", 
    name: "Sheridan Rd & Old Elm - Highwood", 
    country: "US", 
    lng: -87.82020568847656, 
    lat: 42.2169303894043, 
    store_id: 7121
  }, 
  {
    city: "Las Vegas", 
    name: "Luxor Hotel and Casino - Las Vegas", 
    country: "US", 
    lng: -115.17688751220703, 
    lat: 36.09389877319336, 
    store_id: 7123
  }, 
  {
    city: "McLean", 
    name: "Safeway - McLean #1300", 
    country: "US", 
    lng: -77.17559051513672, 
    lat: 38.93928909301758, 
    store_id: 7125
  }, 
  {
    city: "Folsom", 
    name: "E Natoma & Blue Ravine", 
    country: "US", 
    lng: -121.12242889404297, 
    lat: 38.69019317626953, 
    store_id: 7129
  }, 
  {
    city: "Brighton", 
    name: "Hwy 85 & Bridge- Brighton", 
    country: "US", 
    lng: -104.82282257080078, 
    lat: 39.985557556152344, 
    store_id: 7130
  }, 
  {
    city: "Concord", 
    name: "Concord, Loudon Road", 
    country: "US", 
    lng: -71.4917984008789, 
    lat: 43.222537994384766, 
    store_id: 7131
  }, 
  {
    city: "Albuquerque", 
    name: "Target Albuquerque T-356", 
    country: "US", 
    lng: -106.54773712158203, 
    lat: 35.12976837158203, 
    store_id: 7132
  }, 
  {
    city: "Dallas", 
    name: "Gaston & Haskell", 
    country: "US", 
    lng: -96.77725982666016, 
    lat: 32.79387664794922, 
    store_id: 7134
  }, 
  {
    city: "Dayton", 
    name: "Sinclair Community College", 
    country: "US", 
    lng: -84.19768524169922, 
    lat: 39.75813674926758, 
    store_id: 7135
  }, 
  {
    city: "Sacramento", 
    name: "Mack & Hwy 99", 
    country: "US", 
    lng: -121.42996215820312, 
    lat: 38.47370529174805, 
    store_id: 7136
  }, 
  {
    city: "Loveland", 
    name: "Loveland Marketplace, CO", 
    country: "US", 
    lng: -105.07807159423828, 
    lat: 40.425987243652344, 
    store_id: 7137
  }, 
  {
    city: "New York", 
    name: "58th btwn 3rd & Lex", 
    country: "US", 
    lng: -73.96788787841797, 
    lat: 40.76142120361328, 
    store_id: 7138
  }, 
  {
    city: "Dallas", 
    name: "AAFES HQ Food Court", 
    country: "US", 
    lng: -96.89671325683594, 
    lat: 32.695762634277344, 
    store_id: 7140
  }, 
  {
    city: "Mercer Island", 
    name: "QFC - South Mercer Island #806", 
    country: "US", 
    lng: -122.2258529663086, 
    lat: 47.54103469848633, 
    store_id: 7141
  }, 
  {
    city: "Shelton", 
    name: "Safeway - Shelton #585", 
    country: "US", 
    lng: -123.10600280761719, 
    lat: 47.21419906616211, 
    store_id: 7142
  }, 
  {
    city: "Goshen", 
    name: "Martins #24 - Goshen", 
    country: "US", 
    lng: -85.8583984375, 
    lat: 41.59519958496094, 
    store_id: 7143
  }, 
  {
    city: "Little Rock", 
    name: "Kavanaugh & Pierce", 
    country: "US", 
    lng: -92.3380126953125, 
    lat: 34.77012634277344, 
    store_id: 7144
  }, 
  {
    city: "Miami", 
    name: "SW 120th St & SW 127th Ave", 
    country: "US", 
    lng: -80.3962173461914, 
    lat: 25.656063079833984, 
    store_id: 7147
  }, 
  {
    city: "Neenah", 
    name: "Winneconne & South Lake", 
    country: "US", 
    lng: -88.48274230957031, 
    lat: 44.17791748046875, 
    store_id: 7148
  }, 
  {
    city: "Rapid City", 
    name: "Rapid City-1705 W Main", 
    country: "US", 
    lng: -103.2463150024414, 
    lat: 44.08127975463867, 
    store_id: 7150
  }, 
  {
    city: "Sierra Vista", 
    name: "Target Sierra Vista T-735", 
    country: "US", 
    lng: -110.25566864013672, 
    lat: 31.556211471557617, 
    store_id: 7151
  }, 
  {
    city: "Sand City", 
    name: "Target Sand City T-1062", 
    country: "US", 
    lng: -121.8431396484375, 
    lat: 36.62089157104492, 
    store_id: 7152
  }, 
  {
    city: "Anderson", 
    name: "Safeway - Anderson #273", 
    country: "US", 
    lng: -122.28837585449219, 
    lat: 40.45296859741211, 
    store_id: 7153
  }, 
  {
    city: "Arvada", 
    name: "Target Arvada T-48", 
    country: "US", 
    lng: -105.0849609375, 
    lat: 39.84011459350586, 
    store_id: 7154
  }, 
  {
    city: "Captiva", 
    name: "South Seas Resort Entrance", 
    country: "US", 
    lng: -82.19171905517578, 
    lat: 26.52509117126465, 
    store_id: 7155
  }, 
  {
    city: "Boston", 
    name: "BOS - Terminal E food court", 
    country: "US", 
    lng: -71.01966857910156, 
    lat: 42.37013244628906, 
    store_id: 7157
  }, 
  {
    city: "Medford", 
    name: "Station Landing, Wellington Circle", 
    country: "US", 
    lng: -71.0812759399414, 
    lat: 42.404327392578125, 
    store_id: 7158
  }, 
  {
    city: "Dublin", 
    name: "Kroger-Dublin #581", 
    country: "US", 
    lng: -83.09153747558594, 
    lat: 40.120849609375, 
    store_id: 7161
  }, 
  {
    city: "Virginia Beach", 
    name: "Farm Fresh-Virginia Beach #804", 
    country: "US", 
    lng: -76.01573181152344, 
    lat: 36.76816940307617, 
    store_id: 7162
  }, 
  {
    city: "Tacoma", 
    name: "QFC - North Shore #831", 
    country: "US", 
    lng: -122.38035583496094, 
    lat: 47.293827056884766, 
    store_id: 7163
  }, 
  {
    city: "Madison", 
    name: "Target Madison T-1060", 
    country: "US", 
    lng: -89.52484130859375, 
    lat: 43.06226348876953, 
    store_id: 7164
  }, 
  {
    city: "San Carlos", 
    name: "Laurel & Arroyo", 
    country: "US", 
    lng: -122.25718688964844, 
    lat: 37.50294876098633, 
    store_id: 7165
  }, 
  {
    city: "San Francisco", 
    name: "Third & Market", 
    country: "US", 
    lng: -122.40318298339844, 
    lat: 37.78736114501953, 
    store_id: 7166
  }, 
  {
    city: "Denver", 
    name: "Alameda & Broadway- Denver", 
    country: "US", 
    lng: -104.98777770996094, 
    lat: 39.709659576416016, 
    store_id: 7168
  }, 
  {
    city: "Boulder", 
    name: "Baseline Rd & Broadway - Boulder", 
    country: "US", 
    lng: -105.26312255859375, 
    lat: 39.99990463256836, 
    store_id: 7169
  }, 
  {
    city: "Parker", 
    name: "E Lincoln Ave & S Jordan Rd", 
    country: "US", 
    lng: -104.79025268554688, 
    lat: 39.5350341796875, 
    store_id: 7170
  }, 
  {
    city: "Grand Rapids", 
    name: "Kentwood, 28th & M-37", 
    country: "US", 
    lng: -85.58409881591797, 
    lat: 42.91330337524414, 
    store_id: 7172
  }, 
  {
    city: "North Las Vegas", 
    name: "Craig & Losee, North Las Vegas", 
    country: "US", 
    lng: -115.11644744873047, 
    lat: 36.2393913269043, 
    store_id: 7173
  }, 
  {
    city: "High Point", 
    name: "Harris Teeter - High Point #341", 
    country: "US", 
    lng: -80.01927947998047, 
    lat: 35.984405517578125, 
    store_id: 7176
  }, 
  {
    city: "Las Vegas", 
    name: "Monte Carlo Food Ct", 
    country: "US", 
    lng: -115.17538452148438, 
    lat: 36.10490036010742, 
    store_id: 7177
  }, 
  {
    city: "Houston", 
    name: "I-10 & Durham", 
    country: "US", 
    lng: -95.41088104248047, 
    lat: 29.77657127380371, 
    store_id: 7178
  }, 
  {
    city: "Centralia", 
    name: "Safeway - Centralia #1495", 
    country: "US", 
    lng: -122.98072052001953, 
    lat: 46.72794723510742, 
    store_id: 7179
  }, 
  {
    city: "San Diego", 
    name: "Camino Del Rio N & Mission Gorge", 
    country: "US", 
    lng: -117.1028060913086, 
    lat: 32.77981185913086, 
    store_id: 7182
  }, 
  {
    city: "Lindsay", 
    name: "Hwy 65 & Hermosa, Lindsay", 
    country: "US", 
    lng: -119.10294342041016, 
    lat: 36.20206832885742, 
    store_id: 7183
  }, 
  {
    city: "Denver", 
    name: "Lowry Town Center - Denver", 
    country: "US", 
    lng: -104.9031982421875, 
    lat: 39.72062301635742, 
    store_id: 7184
  }, 
  {
    city: "Clinton", 
    name: "Clinton, MD", 
    country: "US", 
    lng: -76.88800811767578, 
    lat: 38.76812744140625, 
    store_id: 7187
  }, 
  {
    city: "Las Vegas", 
    name: "Durango & Elkhorn, Las Vegas", 
    country: "US", 
    lng: -115.28732299804688, 
    lat: 36.29109191894531, 
    store_id: 7188
  }, 
  {
    city: "Brooklyn", 
    name: "Cropsey Ave & Hart Place", 
    country: "US", 
    lng: -73.98542785644531, 
    lat: 40.58110809326172, 
    store_id: 7189
  }, 
  {
    city: "Champaign", 
    name: "Champaign - N Prospect Ave", 
    country: "US", 
    lng: -88.25724029541016, 
    lat: 40.148250579833984, 
    store_id: 7190
  }, 
  {
    city: "Cedar Rapids", 
    name: "Cedar Rapids-Williams & Wilson", 
    country: "US", 
    lng: -91.71805572509766, 
    lat: 41.95765686035156, 
    store_id: 7191
  }, 
  {
    city: "Crosby", 
    name: "Hwy 90 & FM 2100", 
    country: "US", 
    lng: -95.0636215209961, 
    lat: 29.886085510253906, 
    store_id: 7192
  }, 
  {
    city: "Galveston", 
    name: "61st & Avenue T 1/2", 
    country: "US", 
    lng: -94.82799530029297, 
    lat: 29.270809173583984, 
    store_id: 7194
  }, 
  {
    city: "Foley", 
    name: "Hwy 59 at Riviera Center", 
    country: "US", 
    lng: -87.68202209472656, 
    lat: 30.3761043548584, 
    store_id: 7195
  }, 
  {
    city: "Mountain View", 
    name: "Safeway - Mountain View #705", 
    country: "US", 
    lng: -122.08550262451172, 
    lat: 37.38169860839844, 
    store_id: 7196
  }, 
  {
    city: "Mobile", 
    name: "I-65 at Airport Blvd", 
    country: "US", 
    lng: -88.12297821044922, 
    lat: 30.67595672607422, 
    store_id: 7197
  }, 
  {
    city: "westmoreland", 
    name: "NY Oneida Travel Plaza", 
    country: "US", 
    lng: -75.40499877929688, 
    lat: 43.11951446533203, 
    store_id: 7199
  }, 
  {
    city: "Ruby", 
    name: "NY Ulster Travel Plaza", 
    country: "US", 
    lng: -74.01447296142578, 
    lat: 42.01765060424805, 
    store_id: 7200
  }, 
  {
    city: "Prineville", 
    name: "Combs Flat Crossing- Prineville", 
    country: "US", 
    lng: -120.82720947265625, 
    lat: 44.302276611328125, 
    store_id: 7202
  }, 
  {
    city: "Redlands", 
    name: "Vons - Redlands #1734", 
    country: "US", 
    lng: -117.18145751953125, 
    lat: 34.06016159057617, 
    store_id: 7203
  }, 
  {
    city: "Newport News", 
    name: "J. Clyde Morris", 
    country: "US", 
    lng: -76.46089935302734, 
    lat: 37.07973098754883, 
    store_id: 7206
  }, 
  {
    city: "Stevens Point", 
    name: "Division & Maria", 
    country: "US", 
    lng: -89.5744400024414, 
    lat: 44.53374481201172, 
    store_id: 7207
  }, 
  {
    city: "Milwaukee", 
    name: "Oakland & Olive", 
    country: "US", 
    lng: -87.88710021972656, 
    lat: 43.09341812133789, 
    store_id: 7208
  }, 
  {
    city: "Seattle", 
    name: "SEA SeaTac Concourse C, C12", 
    country: "US", 
    lng: -122.30369567871094, 
    lat: 47.44551467895508, 
    store_id: 7209
  }, 
  {
    city: "Carlisle", 
    name: "Carlisle Crossing", 
    country: "US", 
    lng: -77.15567016601562, 
    lat: 40.1974983215332, 
    store_id: 7210
  }, 
  {
    city: "Spokane", 
    name: "W. Sunset Hwy & S Hayford Rd", 
    country: "US", 
    lng: -117.55622863769531, 
    lat: 47.64384078979492, 
    store_id: 7211
  }, 
  {
    city: "La Grande", 
    name: "2712 Island Ave-La Grande", 
    country: "US", 
    lng: -118.06800842285156, 
    lat: 45.33341979980469, 
    store_id: 7213
  }, 
  {
    city: "Spokane", 
    name: "W. Francis & N. Ash", 
    country: "US", 
    lng: -117.43660736083984, 
    lat: 47.715721130371094, 
    store_id: 7214
  }, 
  {
    city: "Gainesville", 
    name: "NW 43rd & Millhopper", 
    country: "US", 
    lng: -82.39056396484375, 
    lat: 29.702903747558594, 
    store_id: 7215
  }, 
  {
    city: "Oswego", 
    name: "Oswego-Rte. 34 & Douglass", 
    country: "US", 
    lng: -88.31459045410156, 
    lat: 41.70013427734375, 
    store_id: 7216
  }, 
  {
    city: "Bloomington", 
    name: "Walnut & Miller", 
    country: "US", 
    lng: -86.5317153930664, 
    lat: 39.14549255371094, 
    store_id: 7217
  }, 
  {
    city: "Edgewater", 
    name: "Safeway-Edgewater #2608", 
    country: "US", 
    lng: -76.56285858154297, 
    lat: 38.939334869384766, 
    store_id: 7219
  }, 
  {
    city: "Columbus", 
    name: "CMH - Columbus B Concourse", 
    country: "US", 
    lng: -82.89091491699219, 
    lat: 39.99894714355469, 
    store_id: 7220
  }, 
  {
    city: "Cupertino", 
    name: "Target Cupertino T-323", 
    country: "US", 
    lng: -122.03642272949219, 
    lat: 37.32396697998047, 
    store_id: 7221
  }, 
  {
    city: "Colorado Springs", 
    name: "Safeway - Colorado Springs #1577", 
    country: "US", 
    lng: -104.8149642944336, 
    lat: 38.76737594604492, 
    store_id: 7222
  }, 
  {
    city: "Idaho Falls", 
    name: "Fred Meyer - Idaho Falls #156", 
    country: "US", 
    lng: -112.02006530761719, 
    lat: 43.5103759765625, 
    store_id: 7224
  }, 
  {
    city: "Richmond", 
    name: "Kroger-Richmond #705", 
    country: "US", 
    lng: -84.2765884399414, 
    lat: 37.740074157714844, 
    store_id: 7225
  }, 
  {
    city: "Las Vegas", 
    name: "Luxor Hotel and Casino - Photo Shop", 
    country: "US", 
    lng: -115.17670440673828, 
    lat: 36.09359359741211, 
    store_id: 7226
  }, 
  {
    city: "Molalla", 
    name: "Safeway - Molalla #1751", 
    country: "US", 
    lng: -122.60375213623047, 
    lat: 45.150848388671875, 
    store_id: 7227
  }, 
  {
    city: "Smithfield", 
    name: "Farm Fresh-Smithfield #238", 
    country: "US", 
    lng: -76.60348510742188, 
    lat: 36.95592498779297, 
    store_id: 7228
  }, 
  {
    city: "Puyallup", 
    name: "Fred Meyer-Puyallup #424", 
    country: "US", 
    lng: -122.296875, 
    lat: 47.09869384765625, 
    store_id: 7229
  }, 
  {
    city: "Los Angeles", 
    name: "Wilshire & Detroit", 
    country: "US", 
    lng: -118.34536743164062, 
    lat: 34.06251525878906, 
    store_id: 7232
  }, 
  {
    city: "Murrieta", 
    name: "Murrieta Hot Springs & Hancock", 
    country: "US", 
    lng: -117.1858139038086, 
    lat: 33.555965423583984, 
    store_id: 7233
  }, 
  {
    city: "Broomfield", 
    name: "Flatiron Crossing", 
    country: "US", 
    lng: -105.13447570800781, 
    lat: 39.93206024169922, 
    store_id: 7234
  }, 
  {
    city: "Lakewood", 
    name: "S Union Blvd - Lakewood", 
    country: "US", 
    lng: -105.13294982910156, 
    lat: 39.71378707885742, 
    store_id: 7235
  }, 
  {
    city: "Milford", 
    name: "Milford, Boston Post Rd.", 
    country: "US", 
    lng: -73.0353775024414, 
    lat: 41.238521575927734, 
    store_id: 7237
  }, 
  {
    city: "Bloomfield", 
    name: "Bloomfield - Gillete Ridge Plaza", 
    country: "US", 
    lng: -72.7397232055664, 
    lat: 41.8172607421875, 
    store_id: 7238
  }, 
  {
    city: "Fairfield", 
    name: "Fairfield, Boston Post Rd", 
    country: "US", 
    lng: -73.26225280761719, 
    lat: 41.14143753051758, 
    store_id: 7239
  }, 
  {
    city: "Camarillo", 
    name: "Verdugo & Camino Ruiz, Camarillo", 
    country: "US", 
    lng: -119.00443267822266, 
    lat: 34.215999603271484, 
    store_id: 7240
  }, 
  {
    city: "San Antonio", 
    name: "Bitters & Embassy Row", 
    country: "US", 
    lng: -98.48527526855469, 
    lat: 29.566761016845703, 
    store_id: 7241
  }, 
  {
    city: "Fremont", 
    name: "Mowry & I880", 
    country: "US", 
    lng: -122.0022964477539, 
    lat: 37.532596588134766, 
    store_id: 7242
  }, 
  {
    city: "Carlsbad", 
    name: "Palomar Airport  & Loker, Carlsbad", 
    country: "US", 
    lng: -117.26055145263672, 
    lat: 33.130836486816406, 
    store_id: 7244
  }, 
  {
    city: "Jacksonville Beach", 
    name: "Target Jacksonville Beach T-967", 
    country: "US", 
    lng: -81.39047241210938, 
    lat: 30.25385093688965, 
    store_id: 7223
  }, 
  {
    city: "San Mateo", 
    name: "38th & El Camino Real", 
    country: "US", 
    lng: -122.29388427734375, 
    lat: 37.533599853515625, 
    store_id: 7245
  }, 
  {
    city: "Hickory", 
    name: "Hickory North", 
    country: "US", 
    lng: -81.3358383178711, 
    lat: 35.75115966796875, 
    store_id: 7246
  }, 
  {
    city: "Dayton", 
    name: "Pine Cone Rd & Hwy 50 - Dayton", 
    country: "US", 
    lng: -119.58214569091797, 
    lat: 39.262569427490234, 
    store_id: 7247
  }, 
  {
    city: "Missouri City", 
    name: "Kroger-Missouri City #334", 
    country: "US", 
    lng: -95.56531524658203, 
    lat: 29.56374740600586, 
    store_id: 7248
  }, 
  {
    city: "McKinney", 
    name: "Virginia & Stonebridge", 
    country: "US", 
    lng: -96.70686340332031, 
    lat: 33.19844055175781, 
    store_id: 7249
  }, 
  {
    city: "Austin", 
    name: "I-35 & Slaughter", 
    country: "US", 
    lng: -97.78817749023438, 
    lat: 30.165437698364258, 
    store_id: 7250
  }, 
  {
    city: "Rowlett", 
    name: "Hwy 66 & Kenwood", 
    country: "US", 
    lng: -96.57569122314453, 
    lat: 32.90811538696289, 
    store_id: 7251
  }, 
  {
    city: "Riverton", 
    name: "134th South & Bangerter, Riverton", 
    country: "US", 
    lng: -111.97970581054688, 
    lat: 40.508480072021484, 
    store_id: 7252
  }, 
  {
    city: "Federal Way", 
    name: "Federal Way Crossing", 
    country: "US", 
    lng: -122.31629180908203, 
    lat: 47.28939437866211, 
    store_id: 7253
  }, 
  {
    city: "Oxford", 
    name: "Target Oxford T-2153", 
    country: "US", 
    lng: -85.7849349975586, 
    lat: 33.608802795410156, 
    store_id: 7255
  }, 
  {
    city: "Phoenix", 
    name: "Target Phoenix SW T-2149", 
    country: "US", 
    lng: -112.27061462402344, 
    lat: 33.42136764526367, 
    store_id: 7256
  }, 
  {
    city: "Ventura", 
    name: "Vons - Ventura #2096", 
    country: "US", 
    lng: -119.30237579345703, 
    lat: 34.28195571899414, 
    store_id: 7257
  }, 
  {
    city: "Gardena", 
    name: "Target Gardena T-290", 
    country: "US", 
    lng: -118.31684875488281, 
    lat: 33.88669204711914, 
    store_id: 7258
  }, 
  {
    city: "Irvine", 
    name: "Target Irvine/Spectrum T-2128", 
    country: "US", 
    lng: -117.74513244628906, 
    lat: 33.650474548339844, 
    store_id: 7259
  }, 
  {
    city: "Cumming", 
    name: "Kroger - Cumming #432", 
    country: "US", 
    lng: -84.19335174560547, 
    lat: 34.238250732421875, 
    store_id: 7260
  }, 
  {
    city: "Duluth", 
    name: "Kroger-Duluth #476", 
    country: "US", 
    lng: -84.09038543701172, 
    lat: 33.99788284301758, 
    store_id: 7261
  }, 
  {
    city: "Lombard", 
    name: "Target Lombard T-1024", 
    country: "US", 
    lng: -88.0083236694336, 
    lat: 41.84022521972656, 
    store_id: 7263
  }, 
  {
    city: "Redmond", 
    name: "Target Redmond T-995", 
    country: "US", 
    lng: -122.10355377197266, 
    lat: 47.67250061035156, 
    store_id: 7265
  }, 
  {
    city: "Parker", 
    name: "Safeway - Parker #2075", 
    country: "US", 
    lng: -114.27987670898438, 
    lat: 34.15433120727539, 
    store_id: 7266
  }, 
  {
    city: "Davis", 
    name: "Safeway - Davis #1205", 
    country: "US", 
    lng: -121.7660140991211, 
    lat: 38.56096267700195, 
    store_id: 7267
  }, 
  {
    city: "Millville", 
    name: "Giant-Millville #389", 
    country: "US", 
    lng: -75.11322021484375, 
    lat: 38.54632568359375, 
    store_id: 7269
  }, 
  {
    city: "Adelanto", 
    name: "Palmdale & Hwy 395", 
    country: "US", 
    lng: -117.39971160888672, 
    lat: 34.506866455078125, 
    store_id: 7272
  }, 
  {
    city: "Louisville", 
    name: "Jefferson Mall", 
    country: "US", 
    lng: -85.67179870605469, 
    lat: 38.1416130065918, 
    store_id: 7274
  }, 
  {
    city: "Savage", 
    name: "Savage-CR 42 & Hwy 13", 
    country: "US", 
    lng: -93.37897491455078, 
    lat: 44.750648498535156, 
    store_id: 7275
  }, 
  {
    city: "Phoenix", 
    name: "Safeway - Phoenix #2651", 
    country: "US", 
    lng: -112.0672378540039, 
    lat: 33.46617889404297, 
    store_id: 7277
  }, 
  {
    city: "San Diego", 
    name: "Vons - San Diego #2012", 
    country: "US", 
    lng: -117.22370910644531, 
    lat: 32.86250305175781, 
    store_id: 7278
  }, 
  {
    city: "Pittsburg", 
    name: "Safeway - Pittsburg #1215", 
    country: "US", 
    lng: -121.9432601928711, 
    lat: 38.016136169433594, 
    store_id: 7279
  }, 
  {
    city: "Fort Campbell", 
    name: "Fort Campbell", 
    country: "US", 
    lng: -87.47108459472656, 
    lat: 36.667083740234375, 
    store_id: 7281
  }, 
  {
    city: "Cape Girardeau", 
    name: "Target Cape Girardeau T-992", 
    country: "US", 
    lng: -89.5635986328125, 
    lat: 37.32709884643555, 
    store_id: 7282
  }, 
  {
    city: "Las Vegas", 
    name: "MGM Grand - Buffet", 
    country: "US", 
    lng: -115.17211151123047, 
    lat: 36.101688385009766, 
    store_id: 7283
  }, 
  {
    city: "Coconut Grove", 
    name: "Cocowalk", 
    country: "US", 
    lng: -80.24201202392578, 
    lat: 25.72831153869629, 
    store_id: 7284
  }, 
  {
    city: "Hoboken", 
    name: "Hoboken, Washington St.", 
    country: "US", 
    lng: -74.0301284790039, 
    lat: 40.74072265625, 
    store_id: 7285
  }, 
  {
    city: "Coconut Creek", 
    name: "Sawgrass Rd & Lyons Rd", 
    country: "US", 
    lng: -80.18698120117188, 
    lat: 26.304859161376953, 
    store_id: 7286
  }, 
  {
    city: "Warwick", 
    name: "Target Warwick North T-2430", 
    country: "US", 
    lng: -71.47566986083984, 
    lat: 41.7226676940918, 
    store_id: 7287
  }, 
  {
    city: "Franklin", 
    name: "Target Franklin T-2388", 
    country: "US", 
    lng: -88.03902435302734, 
    lat: 42.9050178527832, 
    store_id: 7288
  }, 
  {
    city: "Palmdale", 
    name: "Super Target Palmdale East ST-2350", 
    country: "US", 
    lng: -118.04439544677734, 
    lat: 34.57776641845703, 
    store_id: 7289
  }, 
  {
    city: "Ft. Irwin", 
    name: "Fort Irwin", 
    country: "US", 
    lng: -116.64082336425781, 
    lat: 35.2987174987793, 
    store_id: 7290
  }, 
  {
    city: "Atwater", 
    name: "Super Target Atwater ST-2386", 
    country: "US", 
    lng: -120.59459686279297, 
    lat: 37.339698791503906, 
    store_id: 7291
  }, 
  {
    city: "Lathrop", 
    name: "Target Lathrop T-2347", 
    country: "US", 
    lng: -121.29883575439453, 
    lat: 37.808021545410156, 
    store_id: 7293
  }, 
  {
    city: "Richmond", 
    name: "Target Richmond T-1507", 
    country: "US", 
    lng: -122.32732391357422, 
    lat: 37.9324951171875, 
    store_id: 7294
  }, 
  {
    city: "Anaheim", 
    name: "Target Anaheim T-2421", 
    country: "US", 
    lng: -117.9419937133789, 
    lat: 33.83086395263672, 
    store_id: 7297
  }, 
  {
    city: "Woodland", 
    name: "Target  Woodland T-2408", 
    country: "US", 
    lng: -121.7242431640625, 
    lat: 38.670108795166016, 
    store_id: 7298
  }, 
  {
    city: "Los Banos", 
    name: "Target Los Banos T-2359", 
    country: "US", 
    lng: -120.87195587158203, 
    lat: 37.056732177734375, 
    store_id: 7299
  }, 
  {
    city: "Fort Collins", 
    name: "SuperTarget Fort Collins East ST-24", 
    country: "US", 
    lng: -105.07884979248047, 
    lat: 40.527217864990234, 
    store_id: 7300
  }, 
  {
    city: "Olive Branch", 
    name: "Target Olive Branch West T-2442", 
    country: "US", 
    lng: -89.89813232421875, 
    lat: 34.96335220336914, 
    store_id: 7301
  }, 
  {
    city: "Humble", 
    name: "Kroger-Humble #318", 
    country: "US", 
    lng: -95.16203308105469, 
    lat: 29.99873924255371, 
    store_id: 7302
  }, 
  {
    city: "Burlington", 
    name: "Fred Meyer-Burlington #24", 
    country: "US", 
    lng: -122.33428192138672, 
    lat: 48.46670913696289, 
    store_id: 7271
  }, 
  {
    city: "National City", 
    name: "Target Natl City Plza Bonita T-2232", 
    country: "US", 
    lng: -117.0665512084961, 
    lat: 32.65717697143555, 
    store_id: 7295
  }, 
  {
    city: "La Habra", 
    name: "Target La Habra T-2397", 
    country: "US", 
    lng: -117.95758819580078, 
    lat: 33.91587448120117, 
    store_id: 7296
  }, 
  {
    city: "Minneapolis", 
    name: "Target Minneapolis T-52", 
    country: "US", 
    lng: -93.23636627197266, 
    lat: 44.949337005615234, 
    store_id: 7303
  }, 
  {
    city: "Yulee", 
    name: "Target Yulee T-2155", 
    country: "US", 
    lng: -81.56199645996094, 
    lat: 30.628999710083008, 
    store_id: 7304
  }, 
  {
    city: "Phoenix", 
    name: "Phoenix Convention Center", 
    country: "US", 
    lng: -112.07111358642578, 
    lat: 33.44950866699219, 
    store_id: 7305
  }, 
  {
    city: "West Burlington", 
    name: "Target Burlington T-860", 
    country: "US", 
    lng: -91.17233276367188, 
    lat: 40.82105255126953, 
    store_id: 7306
  }, 
  {
    city: "Oklahoma City", 
    name: "Saint Anthony Hospital", 
    country: "US", 
    lng: -97.5217514038086, 
    lat: 35.47726821899414, 
    store_id: 7307
  }, 
  {
    city: "Oklahoma City", 
    name: "36th & May", 
    country: "US", 
    lng: -97.56536102294922, 
    lat: 35.507389068603516, 
    store_id: 7308
  }, 
  {
    city: "Oakland", 
    name: "OAK T - 1 Gate 11", 
    country: "US", 
    lng: -122.20858764648438, 
    lat: 37.71675109863281, 
    store_id: 7309
  }, 
  {
    city: "Aurora", 
    name: "King Soopers-Aurora #84", 
    country: "US", 
    lng: -104.80290985107422, 
    lat: 39.60022735595703, 
    store_id: 7311
  }, 
  {
    city: "East Point", 
    name: "I-285 & Camp Creek Pkwy", 
    country: "US", 
    lng: -84.50321960449219, 
    lat: 33.65443420410156, 
    store_id: 7312
  }, 
  {
    city: "Fort Bragg", 
    name: "Fort Bragg - Mini Mall", 
    country: "US", 
    lng: -78.99620819091797, 
    lat: 35.13149642944336, 
    store_id: 7313
  }, 
  {
    city: "Elkhart", 
    name: "CR 15 & US 33", 
    country: "US", 
    lng: -85.90975952148438, 
    lat: 41.62801742553711, 
    store_id: 7315
  }, 
  {
    city: "Louisville", 
    name: "Bardstown & Heather", 
    country: "US", 
    lng: -85.66622161865234, 
    lat: 38.20560836791992, 
    store_id: 7316
  }, 
  {
    city: "Bedford", 
    name: "Bedford, Great Road", 
    country: "US", 
    lng: -71.27234649658203, 
    lat: 42.489620208740234, 
    store_id: 7317
  }, 
  {
    city: "Hingham", 
    name: "Hingham, Rte. 53", 
    country: "US", 
    lng: -70.90171813964844, 
    lat: 42.180973052978516, 
    store_id: 7318
  }, 
  {
    city: "Fishkill", 
    name: "Fishkill, Ransley Square", 
    country: "US", 
    lng: -73.89339447021484, 
    lat: 41.53071212768555, 
    store_id: 7320
  }, 
  {
    city: "Little falls", 
    name: "NY Indian Castle Travel Plaza", 
    country: "US", 
    lng: -74.84760284423828, 
    lat: 43.05339813232422, 
    store_id: 7322
  }, 
  {
    city: "Plattekill", 
    name: "NY Plattekill Travel Plaza", 
    country: "US", 
    lng: -74.0763168334961, 
    lat: 41.61750030517578, 
    store_id: 7323
  }, 
  {
    city: "Clifton Springs", 
    name: "NY Clifton Springs Travel Plaza", 
    country: "US", 
    lng: -77.17137908935547, 
    lat: 42.97134017944336, 
    store_id: 7324
  }, 
  {
    city: "Hastings on Hudson", 
    name: "NY Ardsley Travel Plaza", 
    country: "US", 
    lng: -73.87200164794922, 
    lat: 40.989898681640625, 
    store_id: 7325
  }, 
  {
    city: "Kirkland", 
    name: "QFC - Totem Lake #828", 
    country: "US", 
    lng: -122.19117736816406, 
    lat: 47.71228790283203, 
    store_id: 7326
  }, 
  {
    city: "Seattle", 
    name: "James Tower", 
    country: "US", 
    lng: -122.30924987792969, 
    lat: 47.607059478759766, 
    store_id: 7327
  }, 
  {
    city: "Seattle", 
    name: "Two Union Square", 
    country: "US", 
    lng: -122.33307647705078, 
    lat: 47.61015319824219, 
    store_id: 7328
  }, 
  {
    city: "Moab", 
    name: "City Market-Moab #410", 
    country: "US", 
    lng: -109.54943084716797, 
    lat: 38.566890716552734, 
    store_id: 7330
  }, 
  {
    city: "Little Rock", 
    name: "Hwy 10 & Sam Peck", 
    country: "US", 
    lng: -92.4154281616211, 
    lat: 34.797542572021484, 
    store_id: 7331
  }, 
  {
    city: "Flagstaff", 
    name: "1307 S. Milton Rd., Flagstaff", 
    country: "US", 
    lng: -111.6618423461914, 
    lat: 35.187400817871094, 
    store_id: 7332
  }, 
  {
    city: "Phoenix", 
    name: "5557 N. 7th Street, Phoenix", 
    country: "US", 
    lng: -112.06463623046875, 
    lat: 33.51824188232422, 
    store_id: 7333
  }, 
  {
    city: "Fowler", 
    name: "Merced & 10th, Fowler", 
    country: "US", 
    lng: -119.68331909179688, 
    lat: 36.62776184082031, 
    store_id: 7334
  }, 
  {
    city: "Cedar Rapids", 
    name: "Cedar Rapids-Blairs Ferry & I-380", 
    country: "US", 
    lng: -91.68000030517578, 
    lat: 42.034385681152344, 
    store_id: 7335
  }, 
  {
    city: "Vernon Hills", 
    name: "Vernon Hills-Rte 60 & Aspen Dr", 
    country: "US", 
    lng: -87.97103881835938, 
    lat: 42.24028396606445, 
    store_id: 7336
  }, 
  {
    city: "Chicago", 
    name: "87th & Lafayatte - Chatham", 
    country: "US", 
    lng: -87.62877655029297, 
    lat: 41.73647689819336, 
    store_id: 7337
  }, 
  {
    city: "Decatur", 
    name: "Decatur-Rte 51 & Mound Rd", 
    country: "US", 
    lng: -88.95757293701172, 
    lat: 39.89095687866211, 
    store_id: 7338
  }, 
  {
    city: "Loganville", 
    name: "Hwy 78 & Hwy 20 - Loganville", 
    country: "US", 
    lng: -83.90634155273438, 
    lat: 33.840789794921875, 
    store_id: 7341
  }, 
  {
    city: "Harrisburg", 
    name: "Union Deposit Road", 
    country: "US", 
    lng: -76.8240737915039, 
    lat: 40.276973724365234, 
    store_id: 7350
  }, 
  {
    city: "Allentown", 
    name: "South Mall", 
    country: "US", 
    lng: -75.48961639404297, 
    lat: 40.556705474853516, 
    store_id: 7351
  }, 
  {
    city: "York", 
    name: "Olde Tollgate Village", 
    country: "US", 
    lng: -76.68193817138672, 
    lat: 39.91176223754883, 
    store_id: 7352
  }, 
  {
    city: "Myrtle Beach", 
    name: "US 17 & 29th Ave", 
    country: "US", 
    lng: -78.88288879394531, 
    lat: 33.71567153930664, 
    store_id: 7354
  }, 
  {
    city: "Wauwatosa", 
    name: "Macy's-Wauwatosa", 
    country: "US", 
    lng: -88.04561614990234, 
    lat: 43.06516647338867, 
    store_id: 7355
  }, 
  {
    city: "Tillamook", 
    name: "Safeway - Tillamook #2723", 
    country: "US", 
    lng: -123.84540557861328, 
    lat: 45.455169677734375, 
    store_id: 7356
  }, 
  {
    city: "Winter Park", 
    name: "University & Goldenrod", 
    country: "US", 
    lng: -81.28897094726562, 
    lat: 28.597082138061523, 
    store_id: 7358
  }, 
  {
    city: "Augusta", 
    name: "Augusta Mall", 
    country: "US", 
    lng: -82.08011627197266, 
    lat: 33.464141845703125, 
    store_id: 7359
  }, 
  {
    city: "Jackson", 
    name: "Jackson, I-94 and M50", 
    country: "US", 
    lng: -84.42494201660156, 
    lat: 42.270198822021484, 
    store_id: 7360
  }, 
  {
    city: "O'Fallon", 
    name: "SR-K & Weldon Spring", 
    country: "US", 
    lng: -90.7021255493164, 
    lat: 38.71916580200195, 
    store_id: 7362
  }, 
  {
    city: "Lake Placid", 
    name: "Lake Placid, Main St", 
    country: "US", 
    lng: -73.9854507446289, 
    lat: 44.288360595703125, 
    store_id: 7364
  }, 
  {
    city: "Massillon", 
    name: "Massillon Marketplace", 
    country: "US", 
    lng: -81.5225830078125, 
    lat: 40.76803207397461, 
    store_id: 7365
  }, 
  {
    city: "Pittsburgh", 
    name: "Eastside", 
    country: "US", 
    lng: -79.92760467529297, 
    lat: 40.459041595458984, 
    store_id: 7366
  }, 
  {
    city: "Sioux Falls", 
    name: "Sioux Falls-57th & Western", 
    country: "US", 
    lng: -96.74701690673828, 
    lat: 43.49934387207031, 
    store_id: 7367
  }, 
  {
    city: "Houston", 
    name: "Main & Dallas", 
    country: "US", 
    lng: -95.36653137207031, 
    lat: 29.755592346191406, 
    store_id: 7368
  }, 
  {
    city: "Covington", 
    name: "SE 272nd St & 172nd Ave SE", 
    country: "US", 
    lng: -122.11080169677734, 
    lat: 47.358497619628906, 
    store_id: 7370
  }, 
  {
    city: "Shoreline", 
    name: "Hwy 99 & 185th- Shoreline", 
    country: "US", 
    lng: -122.34447479248047, 
    lat: 47.76249313354492, 
    store_id: 7371
  }, 
  {
    city: "Phoenix", 
    name: "75th Ave. & McDowell, Phoenix", 
    country: "US", 
    lng: -112.22130584716797, 
    lat: 33.46603775024414, 
    store_id: 7372
  }, 
  {
    city: "Mountain View", 
    name: "Shoreline & Pear", 
    country: "US", 
    lng: -122.07769775390625, 
    lat: 37.41575241088867, 
    store_id: 7373
  }, 
  {
    city: "Hesperia", 
    name: "Main & Mountain Vista", 
    country: "US", 
    lng: -117.3764877319336, 
    lat: 34.42689514160156, 
    store_id: 7374
  }, 
  {
    city: "Ontario", 
    name: "Mountain & 6th", 
    country: "US", 
    lng: -117.6697006225586, 
    lat: 34.08575439453125, 
    store_id: 7375
  }, 
  {
    city: "Woodland Hills", 
    name: "Canoga & Oxnard", 
    country: "US", 
    lng: -118.59674835205078, 
    lat: 34.17893981933594, 
    store_id: 7376
  }, 
  {
    city: "Garden Grove", 
    name: "Magnolia & Trask", 
    country: "US", 
    lng: -117.97271728515625, 
    lat: 33.76713943481445, 
    store_id: 7377
  }, 
  {
    city: "Fremont", 
    name: "Mission & Las Palmas", 
    country: "US", 
    lng: -121.95235443115234, 
    lat: 37.556331634521484, 
    store_id: 7379
  }, 
  {
    city: "Mountain View", 
    name: "Charleston & Independence", 
    country: "US", 
    lng: -122.09639739990234, 
    lat: 37.421836853027344, 
    store_id: 7381
  }, 
  {
    city: "Milwaukee", 
    name: "I-94 & Holt", 
    country: "US", 
    lng: -87.91162109375, 
    lat: 42.9826774597168, 
    store_id: 7383
  }, 
  {
    city: "Willits", 
    name: "Safeway - Willits #965", 
    country: "US", 
    lng: -123.34989929199219, 
    lat: 39.40347671508789, 
    store_id: 7384
  }, 
  {
    city: "Lakeland", 
    name: "Florida Ave & Lake Miriam", 
    country: "US", 
    lng: -81.95757293701172, 
    lat: 27.978195190429688, 
    store_id: 7386
  }, 
  {
    city: "Joliet", 
    name: "Harrah's Joliet - Joliet - Lobby", 
    country: "US", 
    lng: -88.08455657958984, 
    lat: 41.52634811401367, 
    store_id: 7388
  }, 
  {
    city: "Olathe", 
    name: "Price Chopper-Olathe #40", 
    country: "US", 
    lng: -94.78160095214844, 
    lat: 38.839210510253906, 
    store_id: 7389
  }, 
  {
    city: "Lexington", 
    name: "Nicholasville & New Circle", 
    country: "US", 
    lng: -84.52100372314453, 
    lat: 37.99777603149414, 
    store_id: 7390
  }, 
  {
    city: "Greenville", 
    name: "Downtown/Westend", 
    country: "US", 
    lng: -82.40237426757812, 
    lat: 34.845733642578125, 
    store_id: 7391
  }, 
  {
    city: "Fort Mohave", 
    name: "Safeway - Fort Mohave #1474", 
    country: "US", 
    lng: -114.59912109375, 
    lat: 35.01702880859375, 
    store_id: 7392
  }, 
  {
    city: "St Louis", 
    name: "St. Louis Hilton at the Ballpark", 
    country: "US", 
    lng: -90.19058227539062, 
    lat: 38.62517166137695, 
    store_id: 7393
  }, 
  {
    city: "Atlantic City", 
    name: "Caesars - Atlantic City - The Pier", 
    country: "US", 
    lng: -74.4340591430664, 
    lat: 39.353702545166016, 
    store_id: 7394
  }, 
  {
    city: "Las Vegas", 
    name: "The Signature @ MGM", 
    country: "US", 
    lng: -115.16647338867188, 
    lat: 36.10680389404297, 
    store_id: 7395
  }, 
  {
    city: "Las Vegas", 
    name: "Excalibur Hotel & Casino - Las Vega", 
    country: "US", 
    lng: -115.17659759521484, 
    lat: 36.098873138427734, 
    store_id: 7396
  }, 
  {
    city: "Aiea", 
    name: "Waimalu Shopping Center", 
    country: "US", 
    lng: -157.95272827148438, 
    lat: 21.389070510864258, 
    store_id: 7397
  }, 
  {
    city: "American Canyon", 
    name: "Napa Junction & Hwy 29", 
    country: "US", 
    lng: -122.25442504882812, 
    lat: 38.18205261230469, 
    store_id: 7398
  }, 
  {
    city: "Rocklin", 
    name: "Rocklin & Sierra College - Rocklin", 
    country: "US", 
    lng: -121.20648193359375, 
    lat: 38.788387298583984, 
    store_id: 7399
  }, 
  {
    city: "Hayward", 
    name: "Foothill & City Center", 
    country: "US", 
    lng: -122.08335876464844, 
    lat: 37.679115295410156, 
    store_id: 7400
  }, 
  {
    city: "Elk Grove", 
    name: "Elk Grove & Franklin - Elk Grove", 
    country: "US", 
    lng: -121.44969177246094, 
    lat: 38.40774154663086, 
    store_id: 7401
  }, 
  {
    city: "Redlands", 
    name: "Alabama & Orange Tree Lane", 
    country: "US", 
    lng: -117.20916748046875, 
    lat: 34.06926727294922, 
    store_id: 7402
  }, 
  {
    city: "Los Gatos", 
    name: "Los Gatos & Hwy 85", 
    country: "US", 
    lng: -121.95256042480469, 
    lat: 37.25366973876953, 
    store_id: 7404
  }, 
  {
    city: "Centennial", 
    name: "Araphoe Village - Centennial, CO", 
    country: "US", 
    lng: -104.9285888671875, 
    lat: 39.59396743774414, 
    store_id: 7406
  }, 
  {
    city: "Jackson", 
    name: "I 55 & Northside", 
    country: "US", 
    lng: -90.14954376220703, 
    lat: 32.356319427490234, 
    store_id: 7409
  }, 
  {
    city: "Washington", 
    name: "901 New York Avenue, NW", 
    country: "US", 
    lng: -77.02559661865234, 
    lat: 38.901817321777344, 
    store_id: 7410
  }, 
  {
    city: "Washington", 
    name: "500 New Jersey Ave.", 
    country: "US", 
    lng: -77.01171112060547, 
    lat: 38.89620590209961, 
    store_id: 7411
  }, 
  {
    city: "Warminster", 
    name: "Warminster", 
    country: "US", 
    lng: -75.09920501708984, 
    lat: 40.205970764160156, 
    store_id: 7412
  }, 
  {
    city: "Las Vegas", 
    name: "Ft. Apache & Patrick, Las Vegas", 
    country: "US", 
    lng: -115.29798889160156, 
    lat: 36.07736587524414, 
    store_id: 7413
  }, 
  {
    city: "Tuckahoe", 
    name: "Tuckahoe Train Station", 
    country: "US", 
    lng: -73.8283462524414, 
    lat: 40.950469970703125, 
    store_id: 7414
  }, 
  {
    city: "Warren", 
    name: "Niles Cortland Road", 
    country: "US", 
    lng: -80.74125671386719, 
    lat: 41.217491149902344, 
    store_id: 7416
  }, 
  {
    city: "Tulsa", 
    name: "61st & Yale", 
    country: "US", 
    lng: -95.92423248291016, 
    lat: 36.07704162597656, 
    store_id: 7417
  }, 
  {
    city: "Nashville", 
    name: "Target Nashville T-146", 
    country: "US", 
    lng: -86.85428619384766, 
    lat: 36.130714416503906, 
    store_id: 7418
  }, 
  {
    city: "Chesapeake", 
    name: "Farm Fresh-Chesapeake #669", 
    country: "US", 
    lng: -76.16293334960938, 
    lat: 36.71623229980469, 
    store_id: 7419
  }, 
  {
    city: "Seattle", 
    name: "Safeway - Seattle #1062", 
    country: "US", 
    lng: -122.38489532470703, 
    lat: 47.55982971191406, 
    store_id: 7420
  }, 
  {
    city: "Bellevue", 
    name: "Bellevue Courtyard", 
    country: "US", 
    lng: -122.19314575195312, 
    lat: 47.61758804321289, 
    store_id: 7421
  }, 
  {
    city: "Tacoma", 
    name: "Fred Meyer - Tacoma Pacific #385", 
    country: "US", 
    lng: -122.4351806640625, 
    lat: 47.190608978271484, 
    store_id: 7422
  }, 
  {
    city: "E Wenatchee", 
    name: "Safeway - E Wenatchee #3521", 
    country: "US", 
    lng: -120.2808609008789, 
    lat: 47.40489196777344, 
    store_id: 7423
  }, 
  {
    city: "Gallatin", 
    name: "Nashville Pike & Hwy 109 Bypass", 
    country: "US", 
    lng: -86.46668243408203, 
    lat: 36.378639221191406, 
    store_id: 7425
  }, 
  {
    city: "League City", 
    name: "FM 518 & Hwy 3", 
    country: "US", 
    lng: -95.09504699707031, 
    lat: 29.507978439331055, 
    store_id: 7426
  }, 
  {
    city: "Ritzville", 
    name: "Galbreath Way & Weber", 
    country: "US", 
    lng: -118.3675537109375, 
    lat: 47.11745071411133, 
    store_id: 7427
  }, 
  {
    city: "Edmonds", 
    name: "Downtown Edmonds", 
    country: "US", 
    lng: -122.37738800048828, 
    lat: 47.81039810180664, 
    store_id: 7428
  }, 
  {
    city: "Fort Myers", 
    name: "US 41 & Daniels", 
    country: "US", 
    lng: -81.86864471435547, 
    lat: 26.54570960998535, 
    store_id: 7429
  }, 
  {
    city: "Newberry", 
    name: "Tioga Town Center", 
    country: "US", 
    lng: -82.47964477539062, 
    lat: 29.656391143798828, 
    store_id: 7430
  }, 
  {
    city: "Safety Harbor", 
    name: "Main St & Bayshore", 
    country: "US", 
    lng: -82.68902587890625, 
    lat: 27.990615844726562, 
    store_id: 7431
  }, 
  {
    city: "Wellington", 
    name: "Forest Hill Blvd & Wellington Trace", 
    country: "US", 
    lng: -80.24826049804688, 
    lat: 26.673105239868164, 
    store_id: 7432
  }, 
  {
    city: "Fayetteville", 
    name: "Walter Reed Road", 
    country: "US", 
    lng: -78.93507385253906, 
    lat: 35.039024353027344, 
    store_id: 7433
  }, 
  {
    city: "Burlington", 
    name: "University Commons", 
    country: "US", 
    lng: -79.52041625976562, 
    lat: 36.06816482543945, 
    store_id: 7435
  }, 
  {
    city: "Pocatello", 
    name: "Fred Meyer-Pocatello #260", 
    country: "US", 
    lng: -112.44965362548828, 
    lat: 42.88923645019531, 
    store_id: 7436
  }, 
  {
    city: "Ann Arbor", 
    name: "Target Ann Arbor T-634", 
    country: "US", 
    lng: -83.76939392089844, 
    lat: 42.24372100830078, 
    store_id: 7437
  }, 
  {
    city: "Lakeland", 
    name: "Socrum Loop & I-4", 
    country: "US", 
    lng: -81.95069885253906, 
    lat: 28.10389518737793, 
    store_id: 7439
  }, 
  {
    city: "Miami", 
    name: "8th St & 142nd Ave", 
    country: "US", 
    lng: -80.42530059814453, 
    lat: 25.76053810119629, 
    store_id: 7440
  }, 
  {
    city: "Greenwood", 
    name: "Hwy 25 & Hwy 72", 
    country: "US", 
    lng: -82.1788558959961, 
    lat: 34.21113586425781, 
    store_id: 7442
  }, 
  {
    city: "Vestal", 
    name: "Vestal Parkway East", 
    country: "US", 
    lng: -75.95015716552734, 
    lat: 42.09237289428711, 
    store_id: 7443
  }, 
  {
    city: "El Centro", 
    name: "Von's - El Centro #2406", 
    country: "US", 
    lng: -115.57157897949219, 
    lat: 32.798885345458984, 
    store_id: 7444
  }, 
  {
    city: "Denver", 
    name: "King Soopers - Denver #1", 
    country: "US", 
    lng: -104.99735260009766, 
    lat: 39.73751449584961, 
    store_id: 7445
  }, 
  {
    city: "Bennett", 
    name: "King Soopers-Bennett #112", 
    country: "US", 
    lng: -104.4333724975586, 
    lat: 39.76641845703125, 
    store_id: 7446
  }, 
  {
    city: "Fayetteville", 
    name: "Target Fayetteville T-778", 
    country: "US", 
    lng: -84.44381713867188, 
    lat: 33.47938919067383, 
    store_id: 7448
  }, 
  {
    city: "Augusta", 
    name: "Target Augusta T-1090", 
    country: "US", 
    lng: -82.08136749267578, 
    lat: 33.49018859863281, 
    store_id: 7449
  }, 
  {
    city: "Moscow", 
    name: "Safeway - Moscow #383", 
    country: "US", 
    lng: -116.98320770263672, 
    lat: 46.722354888916016, 
    store_id: 7450
  }, 
  {
    city: "Daphne", 
    name: "I-10 & Jubilee Square Shopping Ctr", 
    country: "US", 
    lng: -87.90665435791016, 
    lat: 30.654775619506836, 
    store_id: 7452
  }, 
  {
    city: "Rialto", 
    name: "Riverside & I-210", 
    country: "US", 
    lng: -117.37108612060547, 
    lat: 34.13717269897461, 
    store_id: 7453
  }, 
  {
    city: "Jupiter", 
    name: "Indian Creek Pkwy & Military Trail", 
    country: "US", 
    lng: -80.10147857666016, 
    lat: 26.911317825317383, 
    store_id: 7454
  }, 
  {
    city: "Dobbs Ferry", 
    name: "Dobbs Ferry", 
    country: "US", 
    lng: -73.85688781738281, 
    lat: 41.0030632019043, 
    store_id: 7455
  }, 
  {
    city: "Morehead City", 
    name: "Morehead City, NC", 
    country: "US", 
    lng: -76.80854797363281, 
    lat: 34.73918914794922, 
    store_id: 7457
  }, 
  {
    city: "New York", 
    name: "103rd & Broadway", 
    country: "US", 
    lng: -73.96836853027344, 
    lat: 40.79888153076172, 
    store_id: 7458
  }, 
  {
    city: "Pleasantville", 
    name: "Pleasantville, Memorial Plaza", 
    country: "US", 
    lng: -73.79325103759766, 
    lat: 41.134315490722656, 
    store_id: 7459
  }, 
  {
    city: "Norman", 
    name: "Boyd & Asp", 
    country: "US", 
    lng: -97.44355010986328, 
    lat: 35.211334228515625, 
    store_id: 7460
  }, 
  {
    city: "Austin", 
    name: "Parmer & Mopac", 
    country: "US", 
    lng: -97.70271301269531, 
    lat: 30.418882369995117, 
    store_id: 7461
  }, 
  {
    city: "Austin", 
    name: "I-35 & Barbara Jordan - Mueller W.", 
    country: "US", 
    lng: -97.70800018310547, 
    lat: 30.305797576904297, 
    store_id: 7462
  }, 
  {
    city: "Richmond", 
    name: "Omni Hotel Richmond @ 100 S. 12th S", 
    country: "US", 
    lng: -77.43512725830078, 
    lat: 37.53601837158203, 
    store_id: 7463
  }, 
  {
    city: "Tacoma", 
    name: "6th & Sprague - Tacoma", 
    country: "US", 
    lng: -122.46372985839844, 
    lat: 47.255455017089844, 
    store_id: 7464
  }, 
  {
    city: "Carson", 
    name: "Target Carson T-2328", 
    country: "US", 
    lng: -118.28628540039062, 
    lat: 33.80878448486328, 
    store_id: 7466
  }, 
  {
    city: "Escalon", 
    name: "Hwy 120 & Plaza - Escalon", 
    country: "US", 
    lng: -120.99755859375, 
    lat: 37.79886245727539, 
    store_id: 7468
  }, 
  {
    city: "Sacramento", 
    name: "Power Inn & Ramona", 
    country: "US", 
    lng: -121.40840911865234, 
    lat: 38.541751861572266, 
    store_id: 7470
  }, 
  {
    city: "Fortuna", 
    name: "N Fortuna & Redwood", 
    country: "US", 
    lng: -124.14634704589844, 
    lat: 40.57889175415039, 
    store_id: 7471
  }, 
  {
    city: "Cameron Park", 
    name: "Green Valley & Cambridge", 
    country: "US", 
    lng: -121.00211334228516, 
    lat: 38.69759750366211, 
    store_id: 7472
  }, 
  {
    city: "Stockton", 
    name: "March & West, Stockton", 
    country: "US", 
    lng: -121.28927612304688, 
    lat: 37.99964141845703, 
    store_id: 7473
  }, 
  {
    city: "Cuyahoga Falls", 
    name: "Target Cuyahoga Falls T-793", 
    country: "US", 
    lng: -81.47740173339844, 
    lat: 41.120548248291016, 
    store_id: 7475
  }, 
  {
    city: "Bradenton", 
    name: "Lakewood Ranch Blvd & Main St", 
    country: "US", 
    lng: -82.43559265136719, 
    lat: 27.393341064453125, 
    store_id: 7477
  }, 
  {
    city: "Ormond Beach", 
    name: "SR 40 & I-95", 
    country: "US", 
    lng: -81.11017608642578, 
    lat: 29.26053810119629, 
    store_id: 7478
  }, 
  {
    city: "Mission Viejo", 
    name: "Target Mission Viejo 2163", 
    country: "US", 
    lng: -117.6668930053711, 
    lat: 33.61009979248047, 
    store_id: 7479
  }, 
  {
    city: "Upper Darby", 
    name: "Upper Darby", 
    country: "US", 
    lng: -75.28751373291016, 
    lat: 39.95957565307617, 
    store_id: 7480
  }, 
  {
    city: "Venice", 
    name: "41 Center Road", 
    country: "US", 
    lng: -82.42543029785156, 
    lat: 27.078611373901367, 
    store_id: 7481
  }, 
  {
    city: "Bakersfield", 
    name: "Von's - Bakersfield #2033", 
    country: "US", 
    lng: -119.09087371826172, 
    lat: 35.40024948120117, 
    store_id: 7483
  }, 
  {
    city: "Pensacola", 
    name: "Sodexho/government services/mwr/pen", 
    country: "US", 
    lng: -87.27639770507812, 
    lat: 30.346900939941406, 
    store_id: 7485
  }, 
  {
    city: "Harwich", 
    name: "Stop & Shop-Harwich #475", 
    country: "US", 
    lng: -70.01911926269531, 
    lat: 41.70693588256836, 
    store_id: 7488
  }, 
  {
    city: "Bayonne", 
    name: "Stop & Shop - Bayonne #853", 
    country: "US", 
    lng: -74.10708618164062, 
    lat: 40.6687126159668, 
    store_id: 7489
  }, 
  {
    city: "Pittsburgh", 
    name: "Point Park University - Conestoga", 
    country: "US", 
    lng: -80.00267791748047, 
    lat: 40.43766403198242, 
    store_id: 7490
  }, 
  {
    city: "Brooklyn", 
    name: "1971 86th Street", 
    country: "US", 
    lng: -73.99861145019531, 
    lat: 40.605018615722656, 
    store_id: 7491
  }, 
  {
    city: "Urbana", 
    name: "Urbana-Main & Vine", 
    country: "US", 
    lng: -88.20462036132812, 
    lat: 40.11294174194336, 
    store_id: 7493
  }, 
  {
    city: "Gretna", 
    name: "Terry Pkwy & Belle Chase Hwy", 
    country: "US", 
    lng: -90.03076171875, 
    lat: 29.889110565185547, 
    store_id: 7494
  }, 
  {
    city: "Wilson", 
    name: "Wilson, NC", 
    country: "US", 
    lng: -77.96167755126953, 
    lat: 35.74111557006836, 
    store_id: 7495
  }, 
  {
    city: "jamaica", 
    name: "JFK T1 pre security food court", 
    country: "US", 
    lng: -73.7912826538086, 
    lat: 40.642642974853516, 
    store_id: 7497
  }, 
  {
    city: "Grand Rapids", 
    name: "Target Grand Rapids T-904", 
    country: "US", 
    lng: -93.52691650390625, 
    lat: 47.209564208984375, 
    store_id: 7498
  }, 
  {
    city: "Santa Clara", 
    name: "Safeway - Santa Clara #1990", 
    country: "US", 
    lng: -121.94754791259766, 
    lat: 37.39467239379883, 
    store_id: 7500
  }, 
  {
    city: "Charlotte", 
    name: "Harris Teeter Charlotte #30", 
    country: "US", 
    lng: -80.78460693359375, 
    lat: 35.096527099609375, 
    store_id: 7503
  }, 
  {
    city: "Midland Park", 
    name: "Midland Park Shopping Center", 
    country: "US", 
    lng: -74.13916015625, 
    lat: 40.98439025878906, 
    store_id: 7504
  }, 
  {
    city: "Aurora", 
    name: "Price Cutter #15 Aurora, MO", 
    country: "US", 
    lng: -93.71792602539062, 
    lat: 36.96802520751953, 
    store_id: 7505
  }, 
  {
    city: "Missoula", 
    name: "Target Missoula T-885", 
    country: "US", 
    lng: -114.03704071044922, 
    lat: 46.888038635253906, 
    store_id: 7506
  }, 
  {
    city: "Lawrenceville", 
    name: "Rider University/Student Rec Center", 
    country: "US", 
    lng: -74.73279571533203, 
    lat: 40.27867889404297, 
    store_id: 7507
  }, 
  {
    city: "Albuquerque", 
    name: "Target - Albuquerque T-0357", 
    country: "US", 
    lng: -106.5277099609375, 
    lat: 35.08574676513672, 
    store_id: 7508
  }, 
  {
    city: "Columbus", 
    name: "CMH A-Concourse", 
    country: "US", 
    lng: -82.89098358154297, 
    lat: 39.99930191040039, 
    store_id: 7511
  }, 
  {
    city: "Cleveland", 
    name: "Target Cleveland West T-2226", 
    country: "US", 
    lng: -81.77137756347656, 
    lat: 41.46817398071289, 
    store_id: 7512
  }, 
  {
    city: "Fairview Park", 
    name: "Target Fairview Park T-2266", 
    country: "US", 
    lng: -81.85070037841797, 
    lat: 41.45827102661133, 
    store_id: 7513
  }, 
  {
    city: "Portland", 
    name: "Fred Meyer-Portland #125", 
    country: "US", 
    lng: -122.59593200683594, 
    lat: 45.52727508544922, 
    store_id: 7514
  }, 
  {
    city: "Quakertown", 
    name: "Target Richlandtown (Quakertown) T-", 
    country: "US", 
    lng: -75.36861419677734, 
    lat: 40.459922790527344, 
    store_id: 7515
  }, 
  {
    city: "Mechanicsburg", 
    name: "Target Mechanicsburg T-2202", 
    country: "US", 
    lng: -77.00987243652344, 
    lat: 40.249874114990234, 
    store_id: 7516
  }, 
  {
    city: "Philadelphia", 
    name: "Target Philadelphia T-2124", 
    country: "US", 
    lng: -75.21244812011719, 
    lat: 40.006492614746094, 
    store_id: 7517
  }, 
  {
    city: "Gibsonia", 
    name: "Target Richland Township North T-22", 
    country: "US", 
    lng: -80.01422882080078, 
    lat: 40.623016357421875, 
    store_id: 7518
  }, 
  {
    city: "Lexington", 
    name: "Target Lexington T-2277", 
    country: "US", 
    lng: -81.19633483886719, 
    lat: 34.007076263427734, 
    store_id: 7519
  }, 
  {
    city: "Rowlett", 
    name: "Super Target Rowlett ST-2234", 
    country: "US", 
    lng: -96.55812072753906, 
    lat: 32.90876007080078, 
    store_id: 7520
  }, 
  {
    city: "San Antonio", 
    name: "Super Target San Antonio/Stone Oak-", 
    country: "US", 
    lng: -98.4468002319336, 
    lat: 29.65528106689453, 
    store_id: 7521
  }, 
  {
    city: "Temple", 
    name: "Target Temple T-2278", 
    country: "US", 
    lng: -97.3857192993164, 
    lat: 31.09198570251465, 
    store_id: 7522
  }, 
  {
    city: "Bristol", 
    name: "Target Bristol T-2308", 
    country: "US", 
    lng: -82.09990692138672, 
    lat: 36.64258575439453, 
    store_id: 7523
  }, 
  {
    city: "Sterling", 
    name: "Target Sterling West T-2272", 
    country: "US", 
    lng: -77.43934631347656, 
    lat: 39.0091438293457, 
    store_id: 7524
  }, 
  {
    city: "Stanwood", 
    name: "QFC-Stanwood #879", 
    country: "US", 
    lng: -122.35835266113281, 
    lat: 48.240291595458984, 
    store_id: 7526
  }, 
  {
    city: "Fitchburg", 
    name: "Super Target Fitchburg ST-2106", 
    country: "US", 
    lng: -89.48149108886719, 
    lat: 43.015380859375, 
    store_id: 7527
  }, 
  {
    city: "Cheney", 
    name: "Safeway - Cheney #1740", 
    country: "US", 
    lng: -117.56682586669922, 
    lat: 47.50596237182617, 
    store_id: 7529
  }, 
  {
    city: "Waikoloa", 
    name: "Queens Marketplace", 
    country: "US", 
    lng: -155.88011169433594, 
    lat: 19.914203643798828, 
    store_id: 7530
  }, 
  {
    city: "Cherry Hill", 
    name: "Garden State Park", 
    country: "US", 
    lng: -75.03529357910156, 
    lat: 39.92054748535156, 
    store_id: 7531
  }, 
  {
    city: "Pensacola", 
    name: "Bayou Blvd & Rave Access Dr", 
    country: "US", 
    lng: -87.2157974243164, 
    lat: 30.474212646484375, 
    store_id: 7533
  }, 
  {
    city: "Lexington", 
    name: "Hamburg Pavilion Winchester Rd", 
    country: "US", 
    lng: -84.42448425292969, 
    lat: 38.04095458984375, 
    store_id: 7534
  }, 
  {
    city: "Palm Desert", 
    name: "Monterey Avenue & Dinah Shore", 
    country: "US", 
    lng: -116.38740539550781, 
    lat: 33.80006408691406, 
    store_id: 7535
  }, 
  {
    city: "Tallahassee", 
    name: "Thomasville & Kerry Forest Pkwy", 
    country: "US", 
    lng: -84.22975158691406, 
    lat: 30.542646408081055, 
    store_id: 7536
  }, 
  {
    city: "Riverview", 
    name: "Bloomingdale & Providence", 
    country: "US", 
    lng: -82.31661224365234, 
    lat: 27.892887115478516, 
    store_id: 7537
  }, 
  {
    city: "Alabaster", 
    name: "I-65 & US HWY 31", 
    country: "US", 
    lng: -86.8022232055664, 
    lat: 33.2238883972168, 
    store_id: 7538
  }, 
  {
    city: "SPRING HILL", 
    name: "Hwy 31 & Spring Hill Circle", 
    country: "US", 
    lng: -86.91450500488281, 
    lat: 35.78013229370117, 
    store_id: 7539
  }, 
  {
    city: "Phoenix", 
    name: "44th St. & Thomas, Phoenix", 
    country: "US", 
    lng: -111.98756408691406, 
    lat: 33.47930145263672, 
    store_id: 7540
  }, 
  {
    city: "Brawley", 
    name: "Von's - Brawley #1767", 
    country: "US", 
    lng: -115.54889678955078, 
    lat: 32.97999572753906, 
    store_id: 7541
  }, 
  {
    city: "Irvine", 
    name: "Irvine Center Drive & Sand Canyon", 
    country: "US", 
    lng: -117.76347351074219, 
    lat: 33.668434143066406, 
    store_id: 7543
  }, 
  {
    city: "Wildomar", 
    name: "Clinton Keith & Hidden Springs", 
    country: "US", 
    lng: -117.24775695800781, 
    lat: 33.59324264526367, 
    store_id: 7544
  }, 
  {
    city: "Lisle", 
    name: "Lisle-Rte 53 & Maple", 
    country: "US", 
    lng: -88.07339477539062, 
    lat: 41.787200927734375, 
    store_id: 7545
  }, 
  {
    city: "Schiller Park", 
    name: "Irving Park & 25th - Schiller Park", 
    country: "US", 
    lng: -87.87153625488281, 
    lat: 41.95518112182617, 
    store_id: 7546
  }, 
  {
    city: "Damascus", 
    name: "Safeway-Damascus #2794", 
    country: "US", 
    lng: -77.20266723632812, 
    lat: 39.289859771728516, 
    store_id: 7548
  }, 
  {
    city: "New York", 
    name: "Empire State Building", 
    country: "US", 
    lng: -73.98561096191406, 
    lat: 40.748661041259766, 
    store_id: 7549
  }, 
  {
    city: "New City", 
    name: "New City", 
    country: "US", 
    lng: -73.99024963378906, 
    lat: 41.144588470458984, 
    store_id: 7550
  }, 
  {
    city: "Fort Wainwright", 
    name: "Fort Wainwright", 
    country: "US", 
    lng: -147.6525115966797, 
    lat: 64.83148193359375, 
    store_id: 7551
  }, 
  {
    city: "Canton", 
    name: "Ingles-Canton #55", 
    country: "US", 
    lng: -82.84459686279297, 
    lat: 35.53899383544922, 
    store_id: 7552
  }, 
  {
    city: "Asheville", 
    name: "Ingles-Asheville #62", 
    country: "US", 
    lng: -82.63145446777344, 
    lat: 35.614112854003906, 
    store_id: 7553
  }, 
  {
    city: "Asheville", 
    name: "Ingles-Asheville #4", 
    country: "US", 
    lng: -82.48834991455078, 
    lat: 35.58576965332031, 
    store_id: 7554
  }, 
  {
    city: "Front Royal", 
    name: "Target Front Royal T-2297", 
    country: "US", 
    lng: -78.19202423095703, 
    lat: 38.963558197021484, 
    store_id: 7525
  }, 
  {
    city: "Minneapolis", 
    name: "U of MN/Minneapolis - W Campus", 
    country: "US", 
    lng: -93.24512481689453, 
    lat: 44.97019577026367, 
    store_id: 7555
  }, 
  {
    city: "Turlock", 
    name: "Monte Vista & Hwy 99", 
    country: "US", 
    lng: -120.88114166259766, 
    lat: 37.52311706542969, 
    store_id: 7556
  }, 
  {
    city: "East Boston", 
    name: "McClellan Hwy & Boardman St.", 
    country: "US", 
    lng: -71.0130615234375, 
    lat: 42.39199447631836, 
    store_id: 7561
  }, 
  {
    city: "New Rochelle", 
    name: "Stop & Shop-New Rochelle #529", 
    country: "US", 
    lng: -73.77356719970703, 
    lat: 40.92201614379883, 
    store_id: 7562
  }, 
  {
    city: "Front Royal", 
    name: "Front Royal", 
    country: "US", 
    lng: -78.1893310546875, 
    lat: 38.964664459228516, 
    store_id: 7563
  }, 
  {
    city: "Naples", 
    name: "Vanderbilt & Airport", 
    country: "US", 
    lng: -81.77225494384766, 
    lat: 26.244312286376953, 
    store_id: 7564
  }, 
  {
    city: "Key Biscayne", 
    name: "200 Crandon Blvd", 
    country: "US", 
    lng: -80.16320037841797, 
    lat: 25.69778060913086, 
    store_id: 7565
  }, 
  {
    city: "Puyallup", 
    name: "132nd & Meridian- Puyallup", 
    country: "US", 
    lng: -122.2923812866211, 
    lat: 47.13669204711914, 
    store_id: 7566
  }, 
  {
    city: "Longview", 
    name: "US 259 & Hawkins", 
    country: "US", 
    lng: -94.72763061523438, 
    lat: 32.54605484008789, 
    store_id: 7568
  }, 
  {
    city: "Washougal", 
    name: "2nd Street & C Street- Washougal", 
    country: "US", 
    lng: -122.37610626220703, 
    lat: 45.58144760131836, 
    store_id: 7569
  }, 
  {
    city: "Hermitage", 
    name: "Hermitage Square", 
    country: "US", 
    lng: -80.44873046875, 
    lat: 41.23131561279297, 
    store_id: 7570
  }, 
  {
    city: "Pittsburgh", 
    name: "Banksville Plaza", 
    country: "US", 
    lng: -80.04377746582031, 
    lat: 40.399505615234375, 
    store_id: 7571
  }, 
  {
    city: "St Helens", 
    name: "Hwy 30 & Gable- St Helens", 
    country: "US", 
    lng: -122.8307876586914, 
    lat: 45.84864044189453, 
    store_id: 7573
  }, 
  {
    city: "Hillsboro", 
    name: "Cornell Rd & 48th Ave- Hillsboro", 
    country: "US", 
    lng: -122.93533325195312, 
    lat: 45.533756256103516, 
    store_id: 7575
  }, 
  {
    city: "Lincoln", 
    name: "Lincoln Crossing - Lincoln", 
    country: "US", 
    lng: -121.30323028564453, 
    lat: 38.87299728393555, 
    store_id: 7576
  }, 
  {
    city: "Petaluma", 
    name: "Sonoma Mountain & Riesling", 
    country: "US", 
    lng: -122.63931274414062, 
    lat: 38.26856994628906, 
    store_id: 7577
  }, 
  {
    city: "CLEVELAND", 
    name: "Doubletree Cleveland City Center La", 
    country: "US", 
    lng: -81.69017791748047, 
    lat: 41.507083892822266, 
    store_id: 7581
  }, 
  {
    city: "Minneapolis", 
    name: "Target Minneapolis T-1095", 
    country: "US", 
    lng: -93.22994232177734, 
    lat: 45.00479507446289, 
    store_id: 7584
  }, 
  {
    city: "Salt Lake City", 
    name: "Smith's - Downtown Utah #94", 
    country: "US", 
    lng: -111.8757095336914, 
    lat: 40.75933837890625, 
    store_id: 7585
  }, 
  {
    city: "Aurora", 
    name: "Parker & Iliff, Aurora", 
    country: "US", 
    lng: -104.87002563476562, 
    lat: 39.67441940307617, 
    store_id: 7588
  }, 
  {
    city: "Gainesville", 
    name: "Kroger-Gainsville, GA #437", 
    country: "US", 
    lng: -83.87036895751953, 
    lat: 34.37337112426758, 
    store_id: 7589
  }, 
  {
    city: "Little Rock", 
    name: "LIT Baggage Claim A", 
    country: "US", 
    lng: -92.21866607666016, 
    lat: 34.72804641723633, 
    store_id: 7590
  }, 
  {
    city: "Bellevue", 
    name: "Offutt AFB - Bellevue - Mini Mall", 
    country: "US", 
    lng: -95.91070556640625, 
    lat: 41.14970016479492, 
    store_id: 7591
  }, 
  {
    city: "San Marcos", 
    name: "Albertsons - San Marcos #6750", 
    country: "US", 
    lng: -117.19969177246094, 
    lat: 33.09688186645508, 
    store_id: 7592
  }, 
  {
    city: "Thousand Oaks", 
    name: "Target Thousand Oaks T-1100", 
    country: "US", 
    lng: -118.9345474243164, 
    lat: 34.190914154052734, 
    store_id: 7593
  }, 
  {
    city: "Dillon", 
    name: "Safeway - DILLON #1581", 
    country: "US", 
    lng: -112.63262939453125, 
    lat: 45.22146987915039, 
    store_id: 7594
  }, 
  {
    city: "Polson", 
    name: "Safeway-Polson #1646", 
    country: "US", 
    lng: -114.12238311767578, 
    lat: 47.689064025878906, 
    store_id: 7595
  }, 
  {
    city: "Pearland", 
    name: "Randalls - Pearland #1858", 
    country: "US", 
    lng: -95.37967681884766, 
    lat: 29.554616928100586, 
    store_id: 7598
  }, 
  {
    city: "Benicia", 
    name: "Rose Dr & Columbus Pkwy - Benicia", 
    country: "US", 
    lng: -122.1935806274414, 
    lat: 38.08204650878906, 
    store_id: 7599
  }, 
  {
    city: "Elko", 
    name: "Mountain City Hwy & Aspen - Elko", 
    country: "US", 
    lng: -115.78638458251953, 
    lat: 40.83430099487305, 
    store_id: 7600
  }, 
  {
    city: "Holyoke", 
    name: "Holyoke Mall", 
    country: "US", 
    lng: -72.64098358154297, 
    lat: 42.16825485229492, 
    store_id: 7603
  }, 
  {
    city: "Tillamook", 
    name: "Fred Meyer-#377 Tillamook", 
    country: "US", 
    lng: -123.84554290771484, 
    lat: 45.47487258911133, 
    store_id: 7604
  }, 
  {
    city: "El Paso", 
    name: "ELP Pre Security - La Placita", 
    country: "US", 
    lng: -106.39603424072266, 
    lat: 31.798912048339844, 
    store_id: 7605
  }, 
  {
    city: "Anchorage", 
    name: "Safeway-Anchorage #1812", 
    country: "US", 
    lng: -149.95602416992188, 
    lat: 61.13725280761719, 
    store_id: 7606
  }, 
  {
    city: "Los Alamitos", 
    name: "Katella & Los Alamitos", 
    country: "US", 
    lng: -118.07074737548828, 
    lat: 33.8033332824707, 
    store_id: 7607
  }, 
  {
    city: "Bellflower", 
    name: "Rosecrans & Bellflower, Bellflower", 
    country: "US", 
    lng: -118.12560272216797, 
    lat: 33.9017448425293, 
    store_id: 7608
  }, 
  {
    city: "San Jacinto", 
    name: "State & Ramona Expressway", 
    country: "US", 
    lng: -116.97171020507812, 
    lat: 33.80292892456055, 
    store_id: 7609
  }, 
  {
    city: "Alcoa", 
    name: "TYS Foodcourt (Knoxville)", 
    country: "US", 
    lng: -83.98670959472656, 
    lat: 35.80581283569336, 
    store_id: 7610
  }, 
  {
    city: "Port St. Lucie", 
    name: "St Lucie West & I-95", 
    country: "US", 
    lng: -80.40644836425781, 
    lat: 27.312408447265625, 
    store_id: 7611
  }, 
  {
    city: "Indian Trail", 
    name: "Sun Valley", 
    country: "US", 
    lng: -80.64703369140625, 
    lat: 35.048484802246094, 
    store_id: 7613
  }, 
  {
    city: "Jackson Heights", 
    name: "78-25 37th Avenue", 
    country: "US", 
    lng: -73.88735961914062, 
    lat: 40.74943923950195, 
    store_id: 7615
  }, 
  {
    city: "Lynden", 
    name: "Lynden Retail - Lynden", 
    country: "US", 
    lng: -122.48461151123047, 
    lat: 48.93427276611328, 
    store_id: 7616
  }, 
  {
    city: "Surprise", 
    name: "Fry's #61 Surprise", 
    country: "US", 
    lng: -112.39511108398438, 
    lat: 33.63987731933594, 
    store_id: 7617
  }, 
  {
    city: "San Mateo", 
    name: "Safeway - San Mateo #999", 
    country: "US", 
    lng: -122.27548217773438, 
    lat: 37.55589294433594, 
    store_id: 7618
  }, 
  {
    city: "Colorado Springs", 
    name: "King Soopers-Colorado Springs #119", 
    country: "US", 
    lng: -104.75736999511719, 
    lat: 38.964080810546875, 
    store_id: 7620
  }, 
  {
    city: "Queen Creek", 
    name: "Fry's #84 Queen Creek", 
    country: "US", 
    lng: -111.562255859375, 
    lat: 33.16032028198242, 
    store_id: 7621
  }, 
  {
    city: "Centralia", 
    name: "Great Wolf Lodge Grand Mound, WA", 
    country: "US", 
    lng: -123.01056671142578, 
    lat: 46.7902946472168, 
    store_id: 7597
  }, 
  {
    city: "East Lansing", 
    name: "Grand River & Stoddard", 
    country: "US", 
    lng: -84.4673080444336, 
    lat: 42.73095703125, 
    store_id: 7622
  }, 
  {
    city: "Independence", 
    name: "Hwy 40 & Blue Ridge", 
    country: "US", 
    lng: -94.44019317626953, 
    lat: 39.045528411865234, 
    store_id: 7623
  }, 
  {
    city: "Mattituck", 
    name: "Mattituck", 
    country: "US", 
    lng: -72.53791809082031, 
    lat: 40.985843658447266, 
    store_id: 7624
  }, 
  {
    city: "Auburn", 
    name: "Auburn Way S & M Street", 
    country: "US", 
    lng: -122.21365356445312, 
    lat: 47.2946891784668, 
    store_id: 7625
  }, 
  {
    city: "Tallahassee", 
    name: "Florida State University/ Wildwood", 
    country: "US", 
    lng: -84.29833984375, 
    lat: 30.44270896911621, 
    store_id: 7626
  }, 
  {
    city: "Clifton", 
    name: "Stop & Shop-Clifton #813", 
    country: "US", 
    lng: -74.13983154296875, 
    lat: 40.82704544067383, 
    store_id: 7631
  }, 
  {
    city: "Maryville", 
    name: "Watkins & Lamar Alexander Pkwy", 
    country: "US", 
    lng: -83.99222564697266, 
    lat: 35.74983215332031, 
    store_id: 7632
  }, 
  {
    city: "Morgan Hill", 
    name: "Target Morgan Hill T-2252", 
    country: "US", 
    lng: -121.65421295166016, 
    lat: 37.157379150390625, 
    store_id: 7633
  }, 
  {
    city: "Apple Valley", 
    name: "SuperTarget - Apple Valley T-2260", 
    country: "US", 
    lng: -117.22265625, 
    lat: 34.52809143066406, 
    store_id: 7634
  }, 
  {
    city: "Moreno Valley", 
    name: "Super Target Moreno Valley East ST-", 
    country: "US", 
    lng: -117.18905639648438, 
    lat: 33.93764877319336, 
    store_id: 7635
  }, 
  {
    city: "Tustin", 
    name: "Target Irvine/Tustin T-2151", 
    country: "US", 
    lng: -117.82735443115234, 
    lat: 33.70000076293945, 
    store_id: 7636
  }, 
  {
    city: "Westminster", 
    name: "Target Westminster NW T-2304", 
    country: "US", 
    lng: -118.01206970214844, 
    lat: 33.74567413330078, 
    store_id: 7638
  }, 
  {
    city: "Long Beach", 
    name: "Target Long Beach/Sgnal Hill T-2319", 
    country: "US", 
    lng: -118.18194580078125, 
    lat: 33.816646575927734, 
    store_id: 7639
  }, 
  {
    city: "Glendale", 
    name: "Target Glendale T-2307", 
    country: "US", 
    lng: -118.25806427001953, 
    lat: 34.14358901977539, 
    store_id: 7640
  }, 
  {
    city: "Colorado Springs", 
    name: "Super Target Colo Springs ST-2221", 
    country: "US", 
    lng: -104.76799774169922, 
    lat: 38.9546012878418, 
    store_id: 7641
  }, 
  {
    city: "Ansonia", 
    name: "Target Ansonia T-2249", 
    country: "US", 
    lng: -73.0795669555664, 
    lat: 41.34214401245117, 
    store_id: 7642
  }, 
  {
    city: "Pace", 
    name: "Target Pace (Milton) T-2279", 
    country: "US", 
    lng: -87.12694549560547, 
    lat: 30.6013240814209, 
    store_id: 7645
  }, 
  {
    city: "Naples", 
    name: "Super Target Naples North ST-2063", 
    country: "US", 
    lng: -81.73770904541016, 
    lat: 26.27189826965332, 
    store_id: 7647
  }, 
  {
    city: "Brunswick", 
    name: "Target Brunswick T-2301", 
    country: "US", 
    lng: -81.48204803466797, 
    lat: 31.201736450195312, 
    store_id: 7648
  }, 
  {
    city: "Matteson", 
    name: "Target Matteson T-2263", 
    country: "US", 
    lng: -87.73062896728516, 
    lat: 41.49988555908203, 
    store_id: 7649
  }, 
  {
    city: "Bossier City", 
    name: "Target Bossier City T-2273", 
    country: "US", 
    lng: -93.7074203491211, 
    lat: 32.5590705871582, 
    store_id: 7650
  }, 
  {
    city: "Easton", 
    name: "Target Easton T-2267", 
    country: "US", 
    lng: -71.12969970703125, 
    lat: 42.02429962158203, 
    store_id: 7651
  }, 
  {
    city: "La Plata", 
    name: "Target La Plata T-2133", 
    country: "US", 
    lng: -76.97924041748047, 
    lat: 38.54302215576172, 
    store_id: 7652
  }, 
  {
    city: "Livonia", 
    name: "Target Livonia T-2230", 
    country: "US", 
    lng: -83.33424377441406, 
    lat: 42.36670684814453, 
    store_id: 7653
  }, 
  {
    city: "St. Paul", 
    name: "SuperTarget - St. Paul T-2229", 
    country: "US", 
    lng: -93.1553955078125, 
    lat: 44.954349517822266, 
    store_id: 7654
  }, 
  {
    city: "Washington", 
    name: "Target Washington T-2255", 
    country: "US", 
    lng: -90.98167419433594, 
    lat: 38.534751892089844, 
    store_id: 7655
  }, 
  {
    city: "Lincoln", 
    name: "Super Target Lincoln SW  T-2303", 
    country: "US", 
    lng: -96.66358184814453, 
    lat: 40.72343826293945, 
    store_id: 7656
  }, 
  {
    city: "South Brunswick", 
    name: "Target South Brunswick NJ T-2256", 
    country: "US", 
    lng: -74.5741958618164, 
    lat: 40.38243865966797, 
    store_id: 7657
  }, 
  {
    city: "Cicero", 
    name: "Target Cicero T-2295", 
    country: "US", 
    lng: -76.12123107910156, 
    lat: 43.15950393676758, 
    store_id: 7658
  }, 
  {
    city: "Glendale", 
    name: "Fry's-Glendale, AZ #60", 
    country: "US", 
    lng: -112.18846130371094, 
    lat: 33.66960906982422, 
    store_id: 7660
  }, 
  {
    city: "Antioch", 
    name: "Somersville & Delta Fair", 
    country: "US", 
    lng: -121.84014892578125, 
    lat: 38.00189208984375, 
    store_id: 7661
  }, 
  {
    city: "Ontario", 
    name: "Vineyard & Holt", 
    country: "US", 
    lng: -117.611328125, 
    lat: 34.064212799072266, 
    store_id: 7662
  }, 
  {
    city: "Los Angeles", 
    name: "Crenshaw & Washington, Los Angeles", 
    country: "US", 
    lng: -118.33049774169922, 
    lat: 34.0401496887207, 
    store_id: 7663
  }, 
  {
    city: "Bethel", 
    name: "Bethel, Big Y Plaza", 
    country: "US", 
    lng: -73.37744903564453, 
    lat: 41.413734436035156, 
    store_id: 7664
  }, 
  {
    city: "Garden City", 
    name: "Garden City, Stewart Avenue", 
    country: "US", 
    lng: -73.61274719238281, 
    lat: 40.73197937011719, 
    store_id: 7665
  }, 
  {
    city: "Highland Heights", 
    name: "Northern Kentucky U Student Union", 
    country: "US", 
    lng: -84.46632385253906, 
    lat: 39.033382415771484, 
    store_id: 7666
  }, 
  {
    city: "Silver Spring", 
    name: "Giant-Silver Spring #354", 
    country: "US", 
    lng: -77.02985382080078, 
    lat: 38.990936279296875, 
    store_id: 7667
  }, 
  {
    city: "Clackamas", 
    name: "Target Clackamas T-346", 
    country: "US", 
    lng: -122.57064056396484, 
    lat: 45.43180847167969, 
    store_id: 7668
  }, 
  {
    city: "Woodstock", 
    name: "Safeway - Portland/Woodstock #1523", 
    country: "US", 
    lng: -122.61620330810547, 
    lat: 45.47990798950195, 
    store_id: 7669
  }, 
  {
    city: "Richmond", 
    name: "Target Richmond West T-1041", 
    country: "US", 
    lng: -77.60494995117188, 
    lat: 37.50407028198242, 
    store_id: 7670
  }, 
  {
    city: "Wytheville", 
    name: "Wytheville", 
    country: "US", 
    lng: -81.09751892089844, 
    lat: 36.9571647644043, 
    store_id: 7671
  }, 
  {
    city: "Fairfax", 
    name: "Safeway - Fairfax #1365", 
    country: "US", 
    lng: -77.27506256103516, 
    lat: 38.81666564941406, 
    store_id: 7672
  }, 
  {
    city: "Bakersfield", 
    name: "Hageman & Calloway, Bakersfield", 
    country: "US", 
    lng: -119.11099243164062, 
    lat: 35.39761734008789, 
    store_id: 7673
  }, 
  {
    city: "Beaver", 
    name: "Downtown Beaver", 
    country: "US", 
    lng: -80.3044204711914, 
    lat: 40.69561004638672, 
    store_id: 7674
  }, 
  {
    city: "Oakland", 
    name: "OAK T -1 Gate 4", 
    country: "US", 
    lng: -122.20858764648438, 
    lat: 37.71675109863281, 
    store_id: 7675
  }, 
  {
    city: "Daytona Beach", 
    name: "Embry-Riddle Student Center", 
    country: "US", 
    lng: -81.04926300048828, 
    lat: 29.18825340270996, 
    store_id: 7676
  }, 
  {
    city: "Titusville", 
    name: "Target Titusville T-2269", 
    country: "US", 
    lng: -80.84077453613281, 
    lat: 28.552719116210938, 
    store_id: 7643
  }, 
  {
    city: "Port St. Lucie", 
    name: "Target St. Lucie West T-2248", 
    country: "US", 
    lng: -80.42960357666016, 
    lat: 27.268299102783203, 
    store_id: 7644
  }, 
  {
    city: "Boynton Beach", 
    name: "Super Target Boynton Beach Southeas", 
    country: "US", 
    lng: -80.08380126953125, 
    lat: 26.53190040588379, 
    store_id: 7646
  }, 
  {
    city: "Merritt Island", 
    name: "Target Merritt Island T-1053", 
    country: "US", 
    lng: -80.70480346679688, 
    lat: 28.38623809814453, 
    store_id: 7677
  }, 
  {
    city: "Boston", 
    name: "Boston University-700 Commonwealth", 
    country: "US", 
    lng: -71.10311889648438, 
    lat: 42.349395751953125, 
    store_id: 7678
  }, 
  {
    city: "Richmond", 
    name: "Capital One - Building 3", 
    country: "US", 
    lng: -77.67613983154297, 
    lat: 37.633235931396484, 
    store_id: 7679
  }, 
  {
    city: "Canton", 
    name: "Target Canton T-794", 
    country: "US", 
    lng: -81.43147277832031, 
    lat: 40.86160659790039, 
    store_id: 7680
  }, 
  {
    city: "Durham", 
    name: "Harris Teeter - Durham #224", 
    country: "US", 
    lng: -78.95832824707031, 
    lat: 35.91828918457031, 
    store_id: 7681
  }, 
  {
    city: "Tucson", 
    name: "The University of Arizona Bookstore", 
    country: "US", 
    lng: -110.952392578125, 
    lat: 32.23310470581055, 
    store_id: 7682
  }, 
  {
    city: "Flagstaff", 
    name: "NAU Student Union Building", 
    country: "US", 
    lng: -111.65589904785156, 
    lat: 35.1894645690918, 
    store_id: 7683
  }, 
  {
    city: "Bolingbrook", 
    name: "Target Bolingbrook T-867", 
    country: "US", 
    lng: -88.12228393554688, 
    lat: 41.70479202270508, 
    store_id: 7684
  }, 
  {
    city: "Las Vegas", 
    name: "Albertsons - Las Vegas #6060", 
    country: "US", 
    lng: -115.35063171386719, 
    lat: 36.16071701049805, 
    store_id: 7685
  }, 
  {
    city: "Springfield", 
    name: "Safeway-Springfield #1094", 
    country: "US", 
    lng: -123.02385711669922, 
    lat: 44.06317138671875, 
    store_id: 7687
  }, 
  {
    city: "Richmond,", 
    name: "VCU - Monroe Park", 
    country: "US", 
    lng: -77.44853973388672, 
    lat: 37.543819427490234, 
    store_id: 7689
  }, 
  {
    city: "Miami", 
    name: "Kendall Dr & 162nd Ave", 
    country: "US", 
    lng: -80.45671844482422, 
    lat: 25.684431076049805, 
    store_id: 7690
  }, 
  {
    city: "Sacramento", 
    name: "Florin & Stockton", 
    country: "US", 
    lng: -121.43289947509766, 
    lat: 38.49641418457031, 
    store_id: 7691
  }, 
  {
    city: "Bartlesville", 
    name: "Frank Phillips & US 75", 
    country: "US", 
    lng: -95.93476867675781, 
    lat: 36.75012969970703, 
    store_id: 7692
  }, 
  {
    city: "Los Angeles", 
    name: "Eagle Rock & York, Eagle Rock", 
    country: "US", 
    lng: -118.21955871582031, 
    lat: 34.12372589111328, 
    store_id: 7693
  }, 
  {
    city: "Saugus", 
    name: "Saugus, Route 1 Northbound", 
    country: "US", 
    lng: -71.01909637451172, 
    lat: 42.48368835449219, 
    store_id: 7694
  }, 
  {
    city: "Las Cruces", 
    name: "University & Espina, Las Cruces", 
    country: "US", 
    lng: -106.75668334960938, 
    lat: 32.284156799316406, 
    store_id: 7696
  }, 
  {
    city: "West Babylon", 
    name: "West Babylon", 
    country: "US", 
    lng: -73.3404769897461, 
    lat: 40.68851089477539, 
    store_id: 7697
  }, 
  {
    city: "LACEY", 
    name: "College St & Yelm Hwy - Lacey", 
    country: "US", 
    lng: -122.82435607910156, 
    lat: 46.99906539916992, 
    store_id: 7698
  }, 
  {
    city: "Tukwila", 
    name: "SouthCenter Mall East", 
    country: "US", 
    lng: -122.25692749023438, 
    lat: 47.458229064941406, 
    store_id: 7699
  }, 
  {
    city: "Short Pump", 
    name: "Short Pump Pad", 
    country: "US", 
    lng: -77.61659240722656, 
    lat: 37.653358459472656, 
    store_id: 7700
  }, 
  {
    city: "San Francisco", 
    name: "Safeway - San Francisco #995", 
    country: "US", 
    lng: -122.43154907226562, 
    lat: 37.782997131347656, 
    store_id: 7701
  }, 
  {
    city: "Jamaica", 
    name: "JFK T7 Pre Security Ticketing", 
    country: "US", 
    lng: -73.78195190429688, 
    lat: 40.64848327636719, 
    store_id: 7702
  }, 
  {
    city: "Lakewood", 
    name: "83rd Ave & Steilacoom Blvd", 
    country: "US", 
    lng: -122.54729461669922, 
    lat: 47.180110931396484, 
    store_id: 7703
  }, 
  {
    city: "Rochester", 
    name: "Westgate Plaza", 
    country: "US", 
    lng: -77.68862915039062, 
    lat: 43.131683349609375, 
    store_id: 7705
  }, 
  {
    city: "Raleigh", 
    name: "Marriott Downtown Raleigh", 
    country: "US", 
    lng: -78.63938903808594, 
    lat: 35.77478790283203, 
    store_id: 7706
  }, 
  {
    city: "Roselle", 
    name: "Roselle & Main", 
    country: "US", 
    lng: -88.07994079589844, 
    lat: 41.98383331298828, 
    store_id: 7707
  }, 
  {
    city: "Sheridan", 
    name: "Super Target Sheridan ST-2261", 
    country: "US", 
    lng: -105.00907135009766, 
    lat: 39.653072357177734, 
    store_id: 7709
  }, 
  {
    city: "Fort Myers", 
    name: "SuperTarget Fort Myers SW ST-2363", 
    country: "US", 
    lng: -81.94371795654297, 
    lat: 26.51047706604004, 
    store_id: 7710
  }, 
  {
    city: "Fort Myers", 
    name: "Target Fort Myers North T-2369", 
    country: "US", 
    lng: -81.80180358886719, 
    lat: 26.615400314331055, 
    store_id: 7712
  }, 
  {
    city: "Palm Coast", 
    name: "Super Target Palm Coast ST-2364", 
    country: "US", 
    lng: -81.21922302246094, 
    lat: 29.47706413269043, 
    store_id: 7713
  }, 
  {
    city: "Milton", 
    name: "SuperTarget Milton ST-2431", 
    country: "US", 
    lng: -84.27053833007812, 
    lat: 34.100040435791016, 
    store_id: 7715
  }, 
  {
    city: "Yorkville", 
    name: "SuperTarget Yorkville ST-2378", 
    country: "US", 
    lng: -88.47219848632812, 
    lat: 41.68239974975586, 
    store_id: 7716
  }, 
  {
    city: "Fairview Heights", 
    name: "Target Fairview Heights T-2414", 
    country: "US", 
    lng: -89.98516082763672, 
    lat: 38.57135009765625, 
    store_id: 7717
  }, 
  {
    city: "Baltimore", 
    name: "Target Baltimore West T-2393", 
    country: "US", 
    lng: -76.65550231933594, 
    lat: 39.31724166870117, 
    store_id: 7718
  }, 
  {
    city: "Henderson", 
    name: "Target Henderson South T-2404", 
    country: "US", 
    lng: -114.99464416503906, 
    lat: 36.03853225708008, 
    store_id: 7719
  }, 
  {
    city: "Manahawkin", 
    name: "Target Stafford Township T-2392", 
    country: "US", 
    lng: -74.28565216064453, 
    lat: 39.71062088012695, 
    store_id: 7720
  }, 
  {
    city: "Union", 
    name: "Target Union T-2141", 
    country: "US", 
    lng: -74.28539276123047, 
    lat: 40.71615219116211, 
    store_id: 7721
  }, 
  {
    city: "Batavia", 
    name: "Target Batavia T-2382", 
    country: "US", 
    lng: -78.20954895019531, 
    lat: 43.00996780395508, 
    store_id: 7722
  }, 
  {
    city: "Muncy", 
    name: "Target Williamsport T-2437", 
    country: "US", 
    lng: -76.83302307128906, 
    lat: 41.24440002441406, 
    store_id: 7723
  }, 
  {
    city: "Danville", 
    name: "Target Danville T-2407", 
    country: "US", 
    lng: -79.41651153564453, 
    lat: 36.601234436035156, 
    store_id: 7724
  }, 
  {
    city: "Williamsburg", 
    name: "Target Williamsburg East T-2296", 
    country: "US", 
    lng: -76.63809967041016, 
    lat: 37.25898742675781, 
    store_id: 7725
  }, 
  {
    city: "Chehalis", 
    name: "Safeway - Chehalis #3525", 
    country: "US", 
    lng: -122.95375061035156, 
    lat: 46.65486145019531, 
    store_id: 7727
  }, 
  {
    city: "Bessemer", 
    name: "Target Bessemer T-2375", 
    country: "US", 
    lng: -86.93080139160156, 
    lat: 33.3302001953125, 
    store_id: 7728
  }, 
  {
    city: "Ballwin", 
    name: "Target Chesterfield/T & C T-1952", 
    country: "US", 
    lng: -90.51910400390625, 
    lat: 38.620357513427734, 
    store_id: 7729
  }, 
  {
    city: "Kansas City", 
    name: "Target Kansas City NW T-2423", 
    country: "US", 
    lng: -94.65853881835938, 
    lat: 39.26090621948242, 
    store_id: 7730
  }, 
  {
    city: "Deerfield Beach", 
    name: "SuperTarget Deerfield Beach W ST-20", 
    country: "US", 
    lng: -80.15254211425781, 
    lat: 26.31813621520996, 
    store_id: 7711
  }, 
  {
    city: "Coral Springs", 
    name: "Super Target Coral Springs T-2146", 
    country: "US", 
    lng: -80.20169067382812, 
    lat: 26.28498077392578, 
    store_id: 7714
  }, 
  {
    city: "Winchester", 
    name: "Target Winchester North T-2379", 
    country: "US", 
    lng: -78.13701629638672, 
    lat: 39.221397399902344, 
    store_id: 7726
  }, 
  {
    city: "Indianapolis", 
    name: "Target Indy Glendale T-2391", 
    country: "US", 
    lng: -86.1190414428711, 
    lat: 39.86537551879883, 
    store_id: 7731
  }, 
  {
    city: "Atascocita", 
    name: "Super Target Atascocita ST-2389", 
    country: "US", 
    lng: -95.17267608642578, 
    lat: 30.000581741333008, 
    store_id: 7732
  }, 
  {
    city: "NEW BRAUNFELS", 
    name: "Target New Braunfels North T-2429", 
    country: "US", 
    lng: -98.13600158691406, 
    lat: 29.69099998474121, 
    store_id: 7733
  }, 
  {
    city: "Harker Heights", 
    name: "Target Harker Heights T-2374", 
    country: "US", 
    lng: -97.67012023925781, 
    lat: 31.07171630859375, 
    store_id: 7734
  }, 
  {
    city: "San Antonio", 
    name: "SuperTarget San Antonio Culebra ST-", 
    country: "US", 
    lng: -98.66356658935547, 
    lat: 29.548072814941406, 
    store_id: 7735
  }, 
  {
    city: "Fort Worth", 
    name: "Target Ridgmar T-2425", 
    country: "US", 
    lng: -97.43340301513672, 
    lat: 32.750186920166016, 
    store_id: 7736
  }, 
  {
    city: "Bryan", 
    name: "Target Bryan T-2428", 
    country: "US", 
    lng: -96.32528686523438, 
    lat: 30.664230346679688, 
    store_id: 7737
  }, 
  {
    city: "Charlotte", 
    name: "SuperTarget Charlotte North ST-2080", 
    country: "US", 
    lng: -80.85932922363281, 
    lat: 35.349971771240234, 
    store_id: 7738
  }, 
  {
    city: "Wesley Chapel", 
    name: "Target Wesley Chapel T-2395", 
    country: "US", 
    lng: -80.73400115966797, 
    lat: 35.00239944458008, 
    store_id: 7739
  }, 
  {
    city: "Kenner", 
    name: "Veterans & Massachusetts", 
    country: "US", 
    lng: -90.23070526123047, 
    lat: 30.00606918334961, 
    store_id: 7740
  }, 
  {
    city: "Derby", 
    name: "Derby, New Haven Ave", 
    country: "US", 
    lng: -73.05581665039062, 
    lat: 41.31253433227539, 
    store_id: 7741
  }, 
  {
    city: "Aztec", 
    name: "Safeway-Aztec #1438", 
    country: "US", 
    lng: -107.99459838867188, 
    lat: 36.82513427734375, 
    store_id: 7742
  }, 
  {
    city: "Orlando", 
    name: "MCO Airside 2 Rotunda", 
    country: "US", 
    lng: -81.31114196777344, 
    lat: 28.429718017578125, 
    store_id: 7744
  }, 
  {
    city: "Warwick", 
    name: "PVD Baggage Claim", 
    country: "US", 
    lng: -71.43558502197266, 
    lat: 41.72597885131836, 
    store_id: 7745
  }, 
  {
    city: "Watsonville", 
    name: "Target Watsonville T-1143", 
    country: "US", 
    lng: -121.77432250976562, 
    lat: 36.9152717590332, 
    store_id: 7746
  }, 
  {
    city: "New York", 
    name: "125th & Adam Clayton", 
    country: "US", 
    lng: -73.94863891601562, 
    lat: 40.80924606323242, 
    store_id: 7747
  }, 
  {
    city: "Lakewood", 
    name: "Lakewood, NJ", 
    country: "US", 
    lng: -74.16432189941406, 
    lat: 40.055423736572266, 
    store_id: 7749
  }, 
  {
    city: "Grandview", 
    name: "Safeway-Grandview #1593", 
    country: "US", 
    lng: -119.8925552368164, 
    lat: 46.2555046081543, 
    store_id: 7750
  }, 
  {
    city: "Seattle", 
    name: "QFC - University Village #807", 
    country: "US", 
    lng: -122.29676055908203, 
    lat: 47.6624755859375, 
    store_id: 7751
  }, 
  {
    city: "Houston", 
    name: "Randalls - Houston #4033", 
    country: "US", 
    lng: -95.44129180908203, 
    lat: 29.721296310424805, 
    store_id: 7752
  }, 
  {
    city: "Spearfish", 
    name: "Safeway-Spearfish #583", 
    country: "US", 
    lng: -103.85910034179688, 
    lat: 44.49958038330078, 
    store_id: 7753
  }, 
  {
    city: "Dinuba", 
    name: "El Monte Way & Monte Vista, Dinuba", 
    country: "US", 
    lng: -119.4003677368164, 
    lat: 36.545658111572266, 
    store_id: 7754
  }, 
  {
    city: "Sacramento", 
    name: "Madison & I-80 DTO", 
    country: "US", 
    lng: -121.36280059814453, 
    lat: 38.66070556640625, 
    store_id: 7755
  }, 
  {
    city: "Salt Lake City", 
    name: "600 South & 200 West, SLC", 
    country: "US", 
    lng: -111.89827728271484, 
    lat: 40.75692367553711, 
    store_id: 7757
  }, 
  {
    city: "Pflugerville", 
    name: "Pflugerville Loop & FM 685", 
    country: "US", 
    lng: -97.6033935546875, 
    lat: 30.456043243408203, 
    store_id: 7758
  }, 
  {
    city: "Rockwall", 
    name: "I 30 & Horizon", 
    country: "US", 
    lng: -96.47565460205078, 
    lat: 32.896583557128906, 
    store_id: 7759
  }, 
  {
    city: "Chicago", 
    name: "1730 W Fullerton - Riverpoint Cntr", 
    country: "US", 
    lng: -87.67233276367188, 
    lat: 41.92545700073242, 
    store_id: 7760
  }, 
  {
    city: "Tualatin", 
    name: "Martinazzi Square - Tualatin", 
    country: "US", 
    lng: -122.7596206665039, 
    lat: 45.380393981933594, 
    store_id: 7762
  }, 
  {
    city: "Parker", 
    name: "Parker & Lincoln - Parker", 
    country: "US", 
    lng: -104.76841735839844, 
    lat: 39.53860855102539, 
    store_id: 7763
  }, 
  {
    city: "Tampa", 
    name: "Westin Tampa Bay", 
    country: "US", 
    lng: -82.56570434570312, 
    lat: 27.96839714050293, 
    store_id: 7764
  }, 
  {
    city: "McLean", 
    name: "Harris Teeter-McLean # 302", 
    country: "US", 
    lng: -77.22150421142578, 
    lat: 38.92720031738281, 
    store_id: 7766
  }, 
  {
    city: "Washington", 
    name: "Marriott at Metro Center", 
    country: "US", 
    lng: -77.02781677246094, 
    lat: 38.89936065673828, 
    store_id: 7767
  }, 
  {
    city: "Denton", 
    name: "Kroger-Denton #570", 
    country: "US", 
    lng: -97.105224609375, 
    lat: 33.14409637451172, 
    store_id: 7769
  }, 
  {
    city: "New York", 
    name: "19th & Park", 
    country: "US", 
    lng: -73.9883041381836, 
    lat: 40.737979888916016, 
    store_id: 7771
  }, 
  {
    city: "Deer Park", 
    name: "Tanger Outlets, Deer Park", 
    country: "US", 
    lng: -73.30458068847656, 
    lat: 40.76490783691406, 
    store_id: 7772
  }, 
  {
    city: "Hicksville", 
    name: "Hicksville", 
    country: "US", 
    lng: -73.5271224975586, 
    lat: 40.76240921020508, 
    store_id: 7773
  }, 
  {
    city: "Arlington", 
    name: "Tom Thumb-Arlington #3658", 
    country: "US", 
    lng: -97.09622192382812, 
    lat: 32.78094482421875, 
    store_id: 7774
  }, 
  {
    city: "Fairview", 
    name: "Macy's - Village of Fairview", 
    country: "US", 
    lng: -96.97151947021484, 
    lat: 32.923458099365234, 
    store_id: 7775
  }, 
  {
    city: "Las Vegas", 
    name: "Target Las Vegas N Decatur T-2569", 
    country: "US", 
    lng: -115.20710754394531, 
    lat: 36.275856018066406, 
    store_id: 7776
  }, 
  {
    city: "Mesa", 
    name: "Frys - Mesa #23", 
    country: "US", 
    lng: -111.70281982421875, 
    lat: 33.45094680786133, 
    store_id: 7777
  }, 
  {
    city: "Panorama City", 
    name: "Van Nuys & Michaels", 
    country: "US", 
    lng: -118.44847106933594, 
    lat: 34.214561462402344, 
    store_id: 7779
  }, 
  {
    city: "Lake Worth", 
    name: "Lake Ave & L Street", 
    country: "US", 
    lng: -80.05423736572266, 
    lat: 26.615943908691406, 
    store_id: 7780
  }, 
  {
    city: "Commerce", 
    name: "I-85 & US 441", 
    country: "US", 
    lng: -83.4642105102539, 
    lat: 34.25629425048828, 
    store_id: 7781
  }, 
  {
    city: "Delran", 
    name: "Delran", 
    country: "US", 
    lng: -74.94441223144531, 
    lat: 40.01864242553711, 
    store_id: 7783
  }, 
  {
    city: "Farmington", 
    name: "Main & Largo, Farmington", 
    country: "US", 
    lng: -108.15493774414062, 
    lat: 36.762062072753906, 
    store_id: 7784
  }, 
  {
    city: "Ithaca", 
    name: "Ithaca on The Commons", 
    country: "US", 
    lng: -76.4970474243164, 
    lat: 42.44059753417969, 
    store_id: 7785
  }, 
  {
    city: "Pendleton", 
    name: "709 Southgate- Pendleton", 
    country: "US", 
    lng: -118.80890655517578, 
    lat: 45.659278869628906, 
    store_id: 7786
  }, 
  {
    city: "Hinesville", 
    name: "AAFES/ FT STEWART /Exchange", 
    country: "US", 
    lng: -81.6427993774414, 
    lat: 31.970300674438477, 
    store_id: 7765
  }, 
  {
    city: "Warrenton", 
    name: "Harris Teeter - Warrenton #329", 
    country: "US", 
    lng: -77.79570007324219, 
    lat: 38.72746658325195, 
    store_id: 7778
  }, 
  {
    city: "Helotes", 
    name: "Bandera & Leslie", 
    country: "US", 
    lng: -98.67961883544922, 
    lat: 29.560361862182617, 
    store_id: 7787
  }, 
  {
    city: "Austin", 
    name: "Circle C on Escarpment", 
    country: "US", 
    lng: -97.87872314453125, 
    lat: 30.20264434814453, 
    store_id: 7788
  }, 
  {
    city: "Virginia Beach", 
    name: "Northampton Blvd.", 
    country: "US", 
    lng: -76.1871566772461, 
    lat: 36.881683349609375, 
    store_id: 7790
  }, 
  {
    city: "Woodbridge", 
    name: "Potomac Mills, Center Court", 
    country: "US", 
    lng: -77.29532623291016, 
    lat: 38.64339065551758, 
    store_id: 7791
  }, 
  {
    city: "Alexandria", 
    name: "Giant Landover-Alexandria #232", 
    country: "US", 
    lng: -77.13516235351562, 
    lat: 38.77263259887695, 
    store_id: 7792
  }, 
  {
    city: "Las Vegas", 
    name: "Mandalay Bay Hotel - LV - Kona Cafe", 
    country: "US", 
    lng: -115.17316436767578, 
    lat: 36.092037200927734, 
    store_id: 7794
  }, 
  {
    city: "San Rafael", 
    name: "Safeway - San Rafael #932", 
    country: "US", 
    lng: -122.5484848022461, 
    lat: 38.008758544921875, 
    store_id: 7795
  }, 
  {
    city: "Lodi", 
    name: "Safeway - Lodi #1648", 
    country: "US", 
    lng: -121.3058853149414, 
    lat: 38.1176643371582, 
    store_id: 7796
  }, 
  {
    city: "Sparks", 
    name: "Nugget Casino Resort", 
    country: "US", 
    lng: -119.75798797607422, 
    lat: 39.533447265625, 
    store_id: 7797
  }, 
  {
    city: "Clovis", 
    name: "Temperance & Hwy 168, Clovis", 
    country: "US", 
    lng: -119.66458892822266, 
    lat: 36.844608306884766, 
    store_id: 7798
  }, 
  {
    city: "Honolulu", 
    name: "Kamehameha Shopping Center", 
    country: "US", 
    lng: -157.8681640625, 
    lat: 21.335678100585938, 
    store_id: 7799
  }, 
  {
    city: "Athens", 
    name: "Hwy 78 @ the 10 Loop", 
    country: "US", 
    lng: -83.46446990966797, 
    lat: 33.940067291259766, 
    store_id: 7801
  }, 
  {
    city: "Tucson", 
    name: "Safeway - Tucson #1984", 
    country: "US", 
    lng: -110.83919525146484, 
    lat: 32.25185012817383, 
    store_id: 7802
  }, 
  {
    city: "West Covina", 
    name: "Target West Covina T-1028", 
    country: "US", 
    lng: -117.8853759765625, 
    lat: 34.073036193847656, 
    store_id: 7803
  }, 
  {
    city: "Shreveport", 
    name: "70th & Youree", 
    country: "US", 
    lng: -93.71822357177734, 
    lat: 32.443077087402344, 
    store_id: 7804
  }, 
  {
    city: "Doylestown", 
    name: "North Doylestown", 
    country: "US", 
    lng: -75.13092803955078, 
    lat: 40.32171630859375, 
    store_id: 7805
  }, 
  {
    city: "Miami Shores", 
    name: "95th St & 2nd Ave", 
    country: "US", 
    lng: -80.19357299804688, 
    lat: 25.8623046875, 
    store_id: 7806
  }, 
  {
    city: "Rio Grande", 
    name: "Rio Grande", 
    country: "US", 
    lng: -74.87445831298828, 
    lat: 39.016624450683594, 
    store_id: 7807
  }, 
  {
    city: "Salinas", 
    name: "Salinas Valley Memorial Lobby", 
    country: "US", 
    lng: -121.6464614868164, 
    lat: 36.65914535522461, 
    store_id: 7808
  }, 
  {
    city: "Bakersfield", 
    name: "Vons-Bakersfield #1969", 
    country: "US", 
    lng: -119.06500244140625, 
    lat: 35.355037689208984, 
    store_id: 7809
  }, 
  {
    city: "Dubuque", 
    name: "Hy-Vee Foods-Dubuque #3", 
    country: "US", 
    lng: -90.6631088256836, 
    lat: 42.487125396728516, 
    store_id: 7810
  }, 
  {
    city: "Burlington", 
    name: "Harris Teeter-Burlington # 345", 
    country: "US", 
    lng: -79.48426055908203, 
    lat: 36.0821647644043, 
    store_id: 7811
  }, 
  {
    city: "Macon", 
    name: "Forsyth Rd & Tucker Rd", 
    country: "US", 
    lng: -83.70832061767578, 
    lat: 32.873382568359375, 
    store_id: 7814
  }, 
  {
    city: "Apache Junction", 
    name: "Apache Trail & Delaware", 
    country: "US", 
    lng: -111.57412719726562, 
    lat: 33.41595458984375, 
    store_id: 7815
  }, 
  {
    city: "Atlanta", 
    name: "Perimeter Mall", 
    country: "US", 
    lng: -84.34135437011719, 
    lat: 33.92395782470703, 
    store_id: 7816
  }, 
  {
    city: "Cedar Rapids", 
    name: "Hy Vee Foods-Cedar Rapids #7", 
    country: "US", 
    lng: -91.69865417480469, 
    lat: 42.02971267700195, 
    store_id: 7817
  }, 
  {
    city: "Portland", 
    name: "Hwy 181 & Wildcat", 
    country: "US", 
    lng: -97.31879425048828, 
    lat: 27.883445739746094, 
    store_id: 7818
  }, 
  {
    city: "Seattle", 
    name: "QFC - Seattle/Rainier #849", 
    country: "US", 
    lng: -122.29949188232422, 
    lat: 47.57902145385742, 
    store_id: 7819
  }, 
  {
    city: "Covingtion", 
    name: "Safeway-Kent #792", 
    country: "US", 
    lng: -122.11444854736328, 
    lat: 47.356773376464844, 
    store_id: 7820
  }, 
  {
    city: "Redmond", 
    name: "QFC - Redmond #820", 
    country: "US", 
    lng: -122.12889099121094, 
    lat: 47.675621032714844, 
    store_id: 7821
  }, 
  {
    city: "Washington", 
    name: "24th & M Streets", 
    country: "US", 
    lng: -77.05182647705078, 
    lat: 38.905128479003906, 
    store_id: 7822
  }, 
  {
    city: "Wichita", 
    name: "Dillon's-Wichita #66", 
    country: "US", 
    lng: -97.2426528930664, 
    lat: 37.7244873046875, 
    store_id: 7823
  }, 
  {
    city: "Springfield", 
    name: "Springfield, E. Columbus Blvd", 
    country: "US", 
    lng: -72.58503723144531, 
    lat: 42.09593963623047, 
    store_id: 7824
  }, 
  {
    city: "Franklin", 
    name: "Carothers & Bakers Bridge", 
    country: "US", 
    lng: -86.8027572631836, 
    lat: 35.96009063720703, 
    store_id: 7825
  }, 
  {
    city: "Nashville", 
    name: "Murfreesboro Rd - Nashboro Village", 
    country: "US", 
    lng: -86.64751434326172, 
    lat: 36.085914611816406, 
    store_id: 7826
  }, 
  {
    city: "Wenatchee", 
    name: "N. Wenatchee Ave & Maiden Lane", 
    country: "US", 
    lng: -120.33393096923828, 
    lat: 47.453033447265625, 
    store_id: 7827
  }, 
  {
    city: "McChord AFB", 
    name: "McChord AFB BX", 
    country: "US", 
    lng: -122.48699951171875, 
    lat: 47.132598876953125, 
    store_id: 7828
  }, 
  {
    city: "Vancouver", 
    name: "Safeway - Vancouver #1103", 
    country: "US", 
    lng: -122.60310363769531, 
    lat: 45.6262321472168, 
    store_id: 7829
  }, 
  {
    city: "Stockton", 
    name: "Fremont & Wilson - Stockton", 
    country: "US", 
    lng: -121.26979064941406, 
    lat: 37.9614143371582, 
    store_id: 7830
  }, 
  {
    city: "Miami Beach", 
    name: "Target Miami Beach T-1038", 
    country: "US", 
    lng: -80.1567611694336, 
    lat: 25.906511306762695, 
    store_id: 7831
  }, 
  {
    city: "Alpharetta", 
    name: "Kroger - Alpharetta GA #390", 
    country: "US", 
    lng: -84.22309875488281, 
    lat: 34.04964828491211, 
    store_id: 7832
  }, 
  {
    city: "Elkridge", 
    name: "Giant Landover-Elkridge #344", 
    country: "US", 
    lng: -76.77884674072266, 
    lat: 39.209991455078125, 
    store_id: 7833
  }, 
  {
    city: "Las Vegas", 
    name: "Mandalay Bay Hotel - Las Vegas - Ma", 
    country: "US", 
    lng: -115.17316436767578, 
    lat: 36.092037200927734, 
    store_id: 7834
  }, 
  {
    city: "New York", 
    name: "Marriott Financial Center", 
    country: "US", 
    lng: -74.01461029052734, 
    lat: 40.70964431762695, 
    store_id: 7835
  }, 
  {
    city: "Matthews", 
    name: "Harris Teeter - Matthews #343", 
    country: "US", 
    lng: -80.76123046875, 
    lat: 35.02248001098633, 
    store_id: 7837
  }, 
  {
    city: "Mary Esther", 
    name: "Target Mary Esther T-740", 
    country: "US", 
    lng: -86.7188949584961, 
    lat: 30.41189956665039, 
    store_id: 7838
  }, 
  {
    city: "Fort Walton Beach", 
    name: "Beal Pkwy at Mary Esther", 
    country: "US", 
    lng: -86.63884735107422, 
    lat: 30.429832458496094, 
    store_id: 7839
  }, 
  {
    city: "Fort Dodge", 
    name: "Target Fort Dodge T-878", 
    country: "US", 
    lng: -94.15697479248047, 
    lat: 42.50614929199219, 
    store_id: 7840
  }, 
  {
    city: "Villa Park", 
    name: "Roosevelt & Ardmore", 
    country: "US", 
    lng: -87.98169708251953, 
    lat: 41.86082458496094, 
    store_id: 7841
  }, 
  {
    city: "Anaheim", 
    name: "Brookhurst & Alameda", 
    country: "US", 
    lng: -117.95865631103516, 
    lat: 33.838375091552734, 
    store_id: 7842
  }, 
  {
    city: "Kailua", 
    name: "Enchanted Lake Center", 
    country: "US", 
    lng: -157.72885131835938, 
    lat: 21.378366470336914, 
    store_id: 7843
  }, 
  {
    city: "Oakland", 
    name: "Broadway & Grand - Oakland", 
    country: "US", 
    lng: -122.2672119140625, 
    lat: 37.81171417236328, 
    store_id: 7844
  }, 
  {
    city: "Columbia", 
    name: "Univ. Missouri - Columbia Union Squ", 
    country: "US", 
    lng: -92.3265609741211, 
    lat: 38.941410064697266, 
    store_id: 7846
  }, 
  {
    city: "Yelm", 
    name: "Hwy 507 & Creek St SE- Yelm", 
    country: "US", 
    lng: -122.59033966064453, 
    lat: 46.93351364135742, 
    store_id: 7847
  }, 
  {
    city: "Ft Benning", 
    name: "Ft. Benning Mc Graw Manor", 
    country: "US", 
    lng: -84.8996810913086, 
    lat: 32.344608306884766, 
    store_id: 7849
  }, 
  {
    city: "Alexandria", 
    name: "The Monarch", 
    country: "US", 
    lng: -77.05040740966797, 
    lat: 38.811180114746094, 
    store_id: 7851
  }, 
  {
    city: "SOUTH CORONA", 
    name: "Vons - South Corona #2818", 
    country: "US", 
    lng: -117.45217895507812, 
    lat: 33.74715042114258, 
    store_id: 7852
  }, 
  {
    city: "Portland", 
    name: "NE Airport Way & 122nd- Portland", 
    country: "US", 
    lng: -122.5338134765625, 
    lat: 45.564666748046875, 
    store_id: 7854
  }, 
  {
    city: "Edmond", 
    name: "Memorial & Bryant", 
    country: "US", 
    lng: -97.46143341064453, 
    lat: 35.609405517578125, 
    store_id: 7857
  }, 
  {
    city: "Chicago", 
    name: "Halstead & Monroe - Greek Town", 
    country: "US", 
    lng: -87.6474609375, 
    lat: 41.879905700683594, 
    store_id: 7858
  }, 
  {
    city: "Canton", 
    name: "Canton, Ford & Lotz", 
    country: "US", 
    lng: -83.434814453125, 
    lat: 42.32390594482422, 
    store_id: 7859
  }, 
  {
    city: "Lake Forest", 
    name: "Waukegan Rd & Everett - Lake Forest", 
    country: "US", 
    lng: -87.87379455566406, 
    lat: 42.22481155395508, 
    store_id: 7860
  }, 
  {
    city: "Hagerstown", 
    name: "Hagerstown Plaza", 
    country: "US", 
    lng: -77.74532318115234, 
    lat: 39.659202575683594, 
    store_id: 7861
  }, 
  {
    city: "Benicia", 
    name: "1st & Military - Benicia", 
    country: "US", 
    lng: -122.15418243408203, 
    lat: 38.05418014526367, 
    store_id: 7862
  }, 
  {
    city: "Bronx", 
    name: "Eastchester Rd & Waters Pl", 
    country: "US", 
    lng: -73.84435272216797, 
    lat: 40.84712219238281, 
    store_id: 7864
  }, 
  {
    city: "Commack", 
    name: "Jericho Tpke, Commack", 
    country: "US", 
    lng: -73.27490234375, 
    lat: 40.84504699707031, 
    store_id: 7866
  }, 
  {
    city: "Cincinnati", 
    name: "Colerain & I-275", 
    country: "US", 
    lng: -84.59880065917969, 
    lat: 39.25249481201172, 
    store_id: 7867
  }, 
  {
    city: "Bisbee", 
    name: "Safeway - Bisbee #261", 
    country: "US", 
    lng: -109.91764831542969, 
    lat: 31.40093421936035, 
    store_id: 7868
  }, 
  {
    city: "Englewood", 
    name: "Kroger - Englewood, OH #938", 
    country: "US", 
    lng: -84.3126220703125, 
    lat: 39.86311340332031, 
    store_id: 7870
  }, 
  {
    city: "Sunbury", 
    name: "Sunbury", 
    country: "US", 
    lng: -82.93045043945312, 
    lat: 40.267303466796875, 
    store_id: 7871
  }, 
  {
    city: "Brandon", 
    name: "SR 60 & Mt Carmel", 
    country: "US", 
    lng: -82.26347351074219, 
    lat: 27.93720054626465, 
    store_id: 7872
  }, 
  {
    city: "Knoxville", 
    name: "Kingston Pike & Montvue", 
    country: "US", 
    lng: -84.04232025146484, 
    lat: 35.92597198486328, 
    store_id: 7874
  }, 
  {
    city: "Anaheim", 
    name: "Harbor & Ball", 
    country: "US", 
    lng: -117.9146728515625, 
    lat: 33.817726135253906, 
    store_id: 7875
  }, 
  {
    city: "san antonio", 
    name: "Lackland AFB - Main BX", 
    country: "US", 
    lng: -98.61351013183594, 
    lat: 29.38274574279785, 
    store_id: 7876
  }, 
  {
    city: "New Stanton", 
    name: "PA New Stanton Travel Plaza", 
    country: "US", 
    lng: -79.56623077392578, 
    lat: 40.206241607666016, 
    store_id: 7877
  }, 
  {
    city: "Rockwall", 
    name: "Kroger - Rockwall #575", 
    country: "US", 
    lng: -96.47147369384766, 
    lat: 32.88880157470703, 
    store_id: 7878
  }, 
  {
    city: "Alexandria", 
    name: "Alexandria Commons", 
    country: "US", 
    lng: -77.08350372314453, 
    lat: 38.80855941772461, 
    store_id: 7879
  }, 
  {
    city: "Truckee", 
    name: "Vail Resorts @ Northstar", 
    country: "US", 
    lng: -120.12019348144531, 
    lat: 39.27796173095703, 
    store_id: 7880
  }, 
  {
    city: "Decatur", 
    name: "Kroger - Decatur #459", 
    country: "US", 
    lng: -84.27378845214844, 
    lat: 33.79182434082031, 
    store_id: 7881
  }, 
  {
    city: "Caledonia", 
    name: "Spartan - Caledonia #1577", 
    country: "US", 
    lng: -85.50812530517578, 
    lat: 42.79374694824219, 
    store_id: 7882
  }, 
  {
    city: "Aberdeen", 
    name: "1202 Wishkah St- Aberdeen", 
    country: "US", 
    lng: -123.8028793334961, 
    lat: 46.97758483886719, 
    store_id: 7884
  }, 
  {
    city: "Sacramento", 
    name: "Duckhorn & Arena - Sacramento", 
    country: "US", 
    lng: -121.53256225585938, 
    lat: 38.642024993896484, 
    store_id: 7885
  }, 
  {
    city: "Yuba City", 
    name: "Bogue & Garden Highway - Yuba City", 
    country: "US", 
    lng: -121.6162109375, 
    lat: 39.10043716430664, 
    store_id: 7886
  }, 
  {
    city: "Denver", 
    name: "Franklin & Evans-Denver", 
    country: "US", 
    lng: -104.968505859375, 
    lat: 39.67869186401367, 
    store_id: 7887
  }, 
  {
    city: "Rockford", 
    name: "North Perryville & Olde Creek", 
    country: "US", 
    lng: -88.9786605834961, 
    lat: 42.30502700805664, 
    store_id: 7888
  }, 
  {
    city: "Columbus", 
    name: "46 & Johnson", 
    country: "US", 
    lng: -85.9508285522461, 
    lat: 39.20003128051758, 
    store_id: 7889
  }, 
  {
    city: "Wasilla", 
    name: "Fred Meyer - Wasilla #653", 
    country: "US", 
    lng: -149.41209411621094, 
    lat: 61.57762908935547, 
    store_id: 7890
  }, 
  {
    city: "Shawnee Mission", 
    name: "Hen House-Lenexa #19", 
    country: "US", 
    lng: -94.75946044921875, 
    lat: 38.972259521484375, 
    store_id: 7892
  }, 
  {
    city: "Philadelphia", 
    name: "Temple U Bell Tech Ctr", 
    country: "US", 
    lng: -75.15115356445312, 
    lat: 39.98003005981445, 
    store_id: 7893
  }, 
  {
    city: "Portsmouth", 
    name: "Farm Fresh-Portsmouth # 664", 
    country: "US", 
    lng: -76.35871887207031, 
    lat: 36.81075668334961, 
    store_id: 7894
  }, 
  {
    city: "Yakima", 
    name: "Safeway - Yakima #1235", 
    country: "US", 
    lng: -120.53939056396484, 
    lat: 46.584075927734375, 
    store_id: 7895
  }, 
  {
    city: "Olympia", 
    name: "Safeway - Olympia #1173", 
    country: "US", 
    lng: -122.76641082763672, 
    lat: 47.05944061279297, 
    store_id: 7896
  }, 
  {
    city: "Fayetteville", 
    name: "Cross Creek", 
    country: "US", 
    lng: -78.9625244140625, 
    lat: 35.074771881103516, 
    store_id: 7897
  }, 
  {
    city: "Arlington", 
    name: "Westin Arlington Lobby", 
    country: "US", 
    lng: -77.11448669433594, 
    lat: 38.88076400756836, 
    store_id: 7898
  }, 
  {
    city: "Chicago", 
    name: "30 N. LaSalle", 
    country: "US", 
    lng: -87.63262176513672, 
    lat: 41.88291931152344, 
    store_id: 7899
  }, 
  {
    city: "Barrington", 
    name: "Route 14 & Lake Cook", 
    country: "US", 
    lng: -88.12867736816406, 
    lat: 42.153404235839844, 
    store_id: 7900
  }, 
  {
    city: "Los Angeles", 
    name: "Target Los Angeles T-1306", 
    country: "US", 
    lng: -118.37379455566406, 
    lat: 34.023406982421875, 
    store_id: 7848
  }, 
  {
    city: "Spring", 
    name: "Louetta & Stuebner Airline", 
    country: "US", 
    lng: -95.52684020996094, 
    lat: 30.02046012878418, 
    store_id: 7902
  }, 
  {
    city: "Glendale", 
    name: "Compass @ Disney GC3", 
    country: "US", 
    lng: -118.28572082519531, 
    lat: 34.158905029296875, 
    store_id: 7904
  }, 
  {
    city: "Mesa", 
    name: "Greenfield & Inverness, Mesa", 
    country: "US", 
    lng: -111.73696899414062, 
    lat: 33.38405990600586, 
    store_id: 7905
  }, 
  {
    city: "Larkfield", 
    name: "Larkfield", 
    country: "US", 
    lng: -122.75008392333984, 
    lat: 38.49980163574219, 
    store_id: 7906
  }, 
  {
    city: "Sebastopol", 
    name: "Gravenstein & Redwood", 
    country: "US", 
    lng: -122.81764221191406, 
    lat: 38.39190673828125, 
    store_id: 7907
  }, 
  {
    city: "San Jose", 
    name: "Saratoga & Williams", 
    country: "US", 
    lng: -121.97792053222656, 
    lat: 37.30866622924805, 
    store_id: 7908
  }, 
  {
    city: "Charlotte", 
    name: "Carolinas Medical South", 
    country: "US", 
    lng: -80.87181091308594, 
    lat: 35.088680267333984, 
    store_id: 7909
  }, 
  {
    city: "Charlotte", 
    name: "Blakeney", 
    country: "US", 
    lng: -80.80500030517578, 
    lat: 35.034420013427734, 
    store_id: 7910
  }, 
  {
    city: "Minden", 
    name: "Hwy 395 - Minden", 
    country: "US", 
    lng: -119.77976989746094, 
    lat: 38.961280822753906, 
    store_id: 7911
  }, 
  {
    city: "New York", 
    name: "Pearl & Hanover", 
    country: "US", 
    lng: -74.00912475585938, 
    lat: 40.7046012878418, 
    store_id: 7912
  }, 
  {
    city: "Garfield Heights", 
    name: "Garfield Heights", 
    country: "US", 
    lng: -81.6161117553711, 
    lat: 41.4095344543457, 
    store_id: 7913
  }, 
  {
    city: "Columbus", 
    name: "Polaris Parkway", 
    country: "US", 
    lng: -82.96340942382812, 
    lat: 40.14515686035156, 
    store_id: 7914
  }, 
  {
    city: "Houston", 
    name: "Gray & Smith", 
    country: "US", 
    lng: -95.3746566772461, 
    lat: 29.75054359436035, 
    store_id: 7915
  }, 
  {
    city: "Fort Worth", 
    name: "Hwy 199 and Charbonneau, Lake Worth", 
    country: "US", 
    lng: -97.43168640136719, 
    lat: 32.810367584228516, 
    store_id: 7916
  }, 
  {
    city: "Hudson", 
    name: "Hudson-I-94 & Carmichael", 
    country: "US", 
    lng: -92.72044372558594, 
    lat: 44.95962142944336, 
    store_id: 7917
  }, 
  {
    city: "New York", 
    name: "60th & Third", 
    country: "US", 
    lng: -73.96574401855469, 
    lat: 40.762393951416016, 
    store_id: 7919
  }, 
  {
    city: "Vallejo", 
    name: "I-80 & Magazine - Vallejo", 
    country: "US", 
    lng: -122.2342758178711, 
    lat: 38.08420181274414, 
    store_id: 7920
  }, 
  {
    city: "Somers Point", 
    name: "Somers Point", 
    country: "US", 
    lng: -74.59504699707031, 
    lat: 39.33114242553711, 
    store_id: 7921
  }, 
  {
    city: "Santa Clarita", 
    name: "Copper Hill & Newhall Ranch", 
    country: "US", 
    lng: -118.57440948486328, 
    lat: 34.44414138793945, 
    store_id: 7922
  }, 
  {
    city: "Long Beach", 
    name: "7th & Park", 
    country: "US", 
    lng: -118.13760375976562, 
    lat: 33.775184631347656, 
    store_id: 7923
  }, 
  {
    city: "Paso Robles", 
    name: "24th & Ysabel, Paso Robles", 
    country: "US", 
    lng: -120.68701934814453, 
    lat: 35.641868591308594, 
    store_id: 7924
  }, 
  {
    city: "Los Angeles", 
    name: "Crenshaw & Coliseum, Los Angeles", 
    country: "US", 
    lng: -118.33476257324219, 
    lat: 34.01914978027344, 
    store_id: 7925
  }, 
  {
    city: "Phoenix", 
    name: "Safeway - Phoenix #1980", 
    country: "US", 
    lng: -112.05375671386719, 
    lat: 33.306854248046875, 
    store_id: 7926
  }, 
  {
    city: "Rochester Hills", 
    name: "Target Rochester Hills T-351", 
    country: "US", 
    lng: -83.12945556640625, 
    lat: 42.6376838684082, 
    store_id: 7929
  }, 
  {
    city: "Las Vegas", 
    name: "Red Rock Station - Lobby", 
    country: "US", 
    lng: -115.33343505859375, 
    lat: 36.15849685668945, 
    store_id: 7930
  }, 
  {
    city: "Taylorsville", 
    name: "Plaza 5500- Taylorsville", 
    country: "US", 
    lng: -111.93932342529297, 
    lat: 40.65104293823242, 
    store_id: 7931
  }, 
  {
    city: "Sterling", 
    name: "IAD Term C - Gate 24", 
    country: "US", 
    lng: -77.44695281982422, 
    lat: 38.94540023803711, 
    store_id: 7932
  }, 
  {
    city: "Monroe", 
    name: "Monroe, Rt 25", 
    country: "US", 
    lng: -73.26689910888672, 
    lat: 41.32809066772461, 
    store_id: 7933
  }, 
  {
    city: "Columbus", 
    name: "US 80 & Veterans Pkwy", 
    country: "US", 
    lng: -84.953369140625, 
    lat: 32.5449333190918, 
    store_id: 7935
  }, 
  {
    city: "Evans", 
    name: "Washington Rd & Owens Rd", 
    country: "US", 
    lng: -82.12007904052734, 
    lat: 33.525856018066406, 
    store_id: 7936
  }, 
  {
    city: "Kansas City", 
    name: "135th & State Line", 
    country: "US", 
    lng: -94.60739135742188, 
    lat: 38.88909149169922, 
    store_id: 7940
  }, 
  {
    city: "Dover", 
    name: "Dover NH, Webb Place", 
    country: "US", 
    lng: -70.88826751708984, 
    lat: 43.22138977050781, 
    store_id: 7942
  }, 
  {
    city: "Portland", 
    name: "39th & Holgate- Portland", 
    country: "US", 
    lng: -122.62299346923828, 
    lat: 45.49038314819336, 
    store_id: 7943
  }, 
  {
    city: "Tomball", 
    name: "Hwy 249 & Hirschfield", 
    country: "US", 
    lng: -95.63099670410156, 
    lat: 30.081979751586914, 
    store_id: 7945
  }, 
  {
    city: "San Francisco", 
    name: "California & Battery", 
    country: "US", 
    lng: -122.3997573852539, 
    lat: 37.793060302734375, 
    store_id: 7946
  }, 
  {
    city: "Vallejo", 
    name: "Safeway - Vallejo #1631", 
    country: "US", 
    lng: -122.210205078125, 
    lat: 38.08457946777344, 
    store_id: 7947
  }, 
  {
    city: "Gainesville", 
    name: "NW 13th St & NW 16th Ave", 
    country: "US", 
    lng: -82.33960723876953, 
    lat: 29.66642951965332, 
    store_id: 7948
  }, 
  {
    city: "Naples", 
    name: "Waterside shops", 
    country: "US", 
    lng: -81.80223846435547, 
    lat: 26.2137393951416, 
    store_id: 7949
  }, 
  {
    city: "Casselberry", 
    name: "SR 436 & US 17-92", 
    country: "US", 
    lng: -81.3388442993164, 
    lat: 28.6596736907959, 
    store_id: 7951
  }, 
  {
    city: "Union City", 
    name: "Safeway - Union City #1197", 
    country: "US", 
    lng: -122.0193862915039, 
    lat: 37.587623596191406, 
    store_id: 7953
  }, 
  {
    city: "Santa Rosa", 
    name: "Safeway - Santa Rosa #956", 
    country: "US", 
    lng: -122.75224304199219, 
    lat: 38.45185089111328, 
    store_id: 7954
  }, 
  {
    city: "Lodi", 
    name: "Kettleman & Beckman - Lodi", 
    country: "US", 
    lng: -121.25503540039062, 
    lat: 38.11659622192383, 
    store_id: 7955
  }, 
  {
    city: "Valley Springs", 
    name: "Hwy 12 & Hwy 26 - Valley Springs", 
    country: "US", 
    lng: -120.82483673095703, 
    lat: 38.191768646240234, 
    store_id: 7956
  }, 
  {
    city: "San Leandro", 
    name: "Safeway - San Leandro #2315", 
    country: "US", 
    lng: -122.13829803466797, 
    lat: 37.68618392944336, 
    store_id: 7957
  }, 
  {
    city: "Denver", 
    name: "King Soopers - Denver #72", 
    country: "US", 
    lng: -104.93736267089844, 
    lat: 39.666847229003906, 
    store_id: 7958
  }, 
  {
    city: "Las Vegas", 
    name: "Smiths-Las Vegas #334", 
    country: "US", 
    lng: -115.11921691894531, 
    lat: 36.2753791809082, 
    store_id: 7960
  }, 
  {
    city: "Harper Woods", 
    name: "Target - Harper Woods T-0776", 
    country: "US", 
    lng: -82.93279266357422, 
    lat: 42.448604583740234, 
    store_id: 7962
  }, 
  {
    city: "Cameron Park", 
    name: "Safeway - Cameron Park #1618", 
    country: "US", 
    lng: -120.97102355957031, 
    lat: 38.656471252441406, 
    store_id: 7963
  }, 
  {
    city: "Thousand Oaks", 
    name: "Vons - Thousand Oaks #1610", 
    country: "US", 
    lng: -118.86726379394531, 
    lat: 34.2016487121582, 
    store_id: 7964
  }, 
  {
    city: "Prunedale", 
    name: "Safeway - Prunedale #1204", 
    country: "US", 
    lng: -121.66417694091797, 
    lat: 36.793174743652344, 
    store_id: 7965
  }, 
  {
    city: "Jacksonville", 
    name: "Jacksonville", 
    country: "US", 
    lng: -77.38258361816406, 
    lat: 34.764869689941406, 
    store_id: 7966
  }, 
  {
    city: "Sylvania", 
    name: "Kroger - Sylvania #940", 
    country: "US", 
    lng: -83.6930923461914, 
    lat: 41.71474075317383, 
    store_id: 7967
  }, 
  {
    city: "Bryan", 
    name: "Kroger - Bryan #383", 
    country: "US", 
    lng: -96.33646392822266, 
    lat: 30.674131393432617, 
    store_id: 7968
  }, 
  {
    city: "Woodbridge", 
    name: "Target Woodbridge T-759", 
    country: "US", 
    lng: -77.28878021240234, 
    lat: 38.65461730957031, 
    store_id: 7969
  }, 
  {
    city: "Binghamton", 
    name: "Binghamton, Front Street", 
    country: "US", 
    lng: -75.90444946289062, 
    lat: 42.13630676269531, 
    store_id: 7971
  }, 
  {
    city: "Lake Grove", 
    name: "Smith Haven Mall", 
    country: "US", 
    lng: -73.13053894042969, 
    lat: 40.86501693725586, 
    store_id: 7972
  }, 
  {
    city: "Cheektowaga", 
    name: "Walden & Anderson", 
    country: "US", 
    lng: -78.77066040039062, 
    lat: 42.908485412597656, 
    store_id: 7973
  }, 
  {
    city: "Enid", 
    name: "Cleveland & Owen K. Garriott", 
    country: "US", 
    lng: -97.90764617919922, 
    lat: 36.39147186279297, 
    store_id: 7974
  }, 
  {
    city: "McMurray", 
    name: "Peters Township", 
    country: "US", 
    lng: -80.1298599243164, 
    lat: 40.26592254638672, 
    store_id: 7975
  }, 
  {
    city: "Greensburg", 
    name: "Greengate Centre", 
    country: "US", 
    lng: -79.58293914794922, 
    lat: 40.30609130859375, 
    store_id: 7976
  }, 
  {
    city: "Nederland", 
    name: "Hwy 69 & Hwy 365", 
    country: "US", 
    lng: -93.9931640625, 
    lat: 29.94778060913086, 
    store_id: 7977
  }, 
  {
    city: "Baytown", 
    name: "I 10 & Garth", 
    country: "US", 
    lng: -94.98295593261719, 
    lat: 29.805185317993164, 
    store_id: 7978
  }, 
  {
    city: "Fort Worth", 
    name: "Saginaw - 287 and Bailey Boswell", 
    country: "US", 
    lng: -97.3841781616211, 
    lat: 32.8830680847168, 
    store_id: 7979
  }, 
  {
    city: "San Antonio", 
    name: "Loop 410 & Hwy 151", 
    country: "US", 
    lng: -98.64960479736328, 
    lat: 29.436386108398438, 
    store_id: 7980
  }, 
  {
    city: "Grand Prairie", 
    name: "I-30 & Belt Line", 
    country: "US", 
    lng: -96.99452209472656, 
    lat: 32.75763702392578, 
    store_id: 7982
  }, 
  {
    city: "Houston", 
    name: "Hwy 290 & Jones", 
    country: "US", 
    lng: -95.58482360839844, 
    lat: 29.89143180847168, 
    store_id: 7983
  }, 
  {
    city: "Addison", 
    name: "Midway & Beltline", 
    country: "US", 
    lng: -96.83927154541016, 
    lat: 32.95394515991211, 
    store_id: 7984
  }, 
  {
    city: "Warrenton", 
    name: "Warrenton Village", 
    country: "US", 
    lng: -77.79611206054688, 
    lat: 38.7287712097168, 
    store_id: 7986
  }, 
  {
    city: "Glen Allen", 
    name: "Twin Hickory", 
    country: "US", 
    lng: -77.58972930908203, 
    lat: 37.683597564697266, 
    store_id: 7987
  }, 
  {
    city: "Phoenix", 
    name: "Safeway - Phoenix #1202", 
    country: "US", 
    lng: -112.0146713256836, 
    lat: 33.61048889160156, 
    store_id: 7988
  }, 
  {
    city: "Tempe", 
    name: "Scottsdale & McKellips, Tempe", 
    country: "US", 
    lng: -111.9267578125, 
    lat: 33.45093536376953, 
    store_id: 7991
  }, 
  {
    city: "San Diego", 
    name: "Hwy 905 & La Media, San Diego", 
    country: "US", 
    lng: -116.9654312133789, 
    lat: 32.56728744506836, 
    store_id: 7992
  }, 
  {
    city: "Simi Valley", 
    name: "Los Angeles & 1st", 
    country: "US", 
    lng: -118.7776870727539, 
    lat: 34.272064208984375, 
    store_id: 7993
  }, 
  {
    city: "Anaheim", 
    name: "Lincoln & Anaheim", 
    country: "US", 
    lng: -117.9140396118164, 
    lat: 33.835208892822266, 
    store_id: 7994
  }, 
  {
    city: "San Jose", 
    name: "Capitol Expy & Aborn", 
    country: "US", 
    lng: -121.8096694946289, 
    lat: 37.31088638305664, 
    store_id: 7995
  }, 
  {
    city: "Tampa", 
    name: "I-275 & Hillsborough", 
    country: "US", 
    lng: -82.45496368408203, 
    lat: 27.996604919433594, 
    store_id: 7996
  }, 
  {
    city: "Dunkirk", 
    name: "Dunkirk", 
    country: "US", 
    lng: -76.65884399414062, 
    lat: 38.72394561767578, 
    store_id: 7997
  }, 
  {
    city: "Fort Worth", 
    name: "Montgomery Plaza (7th & Carroll)", 
    country: "US", 
    lng: -97.35320281982422, 
    lat: 32.75141525268555, 
    store_id: 7999
  }, 
  {
    city: "Grand Prairie", 
    name: "SH 360 & Mayfield Rd", 
    country: "US", 
    lng: -97.06155395507812, 
    lat: 32.693660736083984, 
    store_id: 8000
  }, 
  {
    city: "Waldorf", 
    name: "Target Waldorf T-1008", 
    country: "US", 
    lng: -76.91814422607422, 
    lat: 38.62946701049805, 
    store_id: 8001
  }, 
  {
    city: "Farmington Hills", 
    name: "Target Farmington Hills", 
    country: "US", 
    lng: -83.34349822998047, 
    lat: 42.452415466308594, 
    store_id: 8002
  }, 
  {
    city: "Charleston", 
    name: "Harris Teeter Charleston #277", 
    country: "US", 
    lng: -79.92862701416016, 
    lat: 32.784427642822266, 
    store_id: 8003
  }, 
  {
    city: "Norfolk", 
    name: "Farm Fresh-Norfolk # 212", 
    country: "US", 
    lng: -76.26964569091797, 
    lat: 36.916717529296875, 
    store_id: 8004
  }, 
  {
    city: "Athens", 
    name: "Hwy 72 & Braly", 
    country: "US", 
    lng: -86.94580841064453, 
    lat: 34.7840461730957, 
    store_id: 8005
  }, 
  {
    city: "Azusa", 
    name: "Foothill & Azusa, Azusa", 
    country: "US", 
    lng: -117.90789031982422, 
    lat: 34.13318634033203, 
    store_id: 8007
  }, 
  {
    city: "La Mirada", 
    name: "Rosecrans & La Mirada, La Mirada", 
    country: "US", 
    lng: -118.0068130493164, 
    lat: 33.89842987060547, 
    store_id: 8008
  }, 
  {
    city: "College Station", 
    name: "Kroger - College Station #361", 
    country: "US", 
    lng: -96.28559875488281, 
    lat: 30.582033157348633, 
    store_id: 8011
  }, 
  {
    city: "Miami Beach", 
    name: "Lincoln & Pennsylvania", 
    country: "US", 
    lng: -80.13434600830078, 
    lat: 25.79076385498047, 
    store_id: 8012
  }, 
  {
    city: "Santa Monica", 
    name: "Vons - Santa Monica #2231", 
    country: "US", 
    lng: -118.50008392333984, 
    lat: 34.027748107910156, 
    store_id: 8013
  }, 
  {
    city: "Madera", 
    name: "Howard & Schnoor - Madera", 
    country: "US", 
    lng: -120.08290100097656, 
    lat: 36.953163146972656, 
    store_id: 8014
  }, 
  {
    city: "Charlotte", 
    name: "Davis Lake Commons", 
    country: "US", 
    lng: -80.81146240234375, 
    lat: 35.333919525146484, 
    store_id: 8015
  }, 
  {
    city: "Huntingdon Valley", 
    name: "Marketplace at Huntingdon Valley", 
    country: "US", 
    lng: -75.07186126708984, 
    lat: 40.16981506347656, 
    store_id: 8016
  }, 
  {
    city: "Charlotte", 
    name: "Charlotte Convention Center", 
    country: "US", 
    lng: -80.84532928466797, 
    lat: 35.22210693359375, 
    store_id: 8017
  }, 
  {
    city: "Philadelphia", 
    name: "University of Pennsylvania - 1920 C", 
    country: "US", 
    lng: -75.1993637084961, 
    lat: 39.95248031616211, 
    store_id: 8018
  }, 
  {
    city: "Issaquah", 
    name: "QFC - Issaquah/Pine Lake #824", 
    country: "US", 
    lng: -122.03318786621094, 
    lat: 47.58311080932617, 
    store_id: 8019
  }, 
  {
    city: "Bellevue", 
    name: "QFC Bellevue #808", 
    country: "US", 
    lng: -122.20497131347656, 
    lat: 47.61830520629883, 
    store_id: 8021
  }, 
  {
    city: "Milwaukee", 
    name: "Hilton Milwaukee", 
    country: "US", 
    lng: -87.91801452636719, 
    lat: 43.038734436035156, 
    store_id: 8022
  }, 
  {
    city: "York", 
    name: "York-I-80 & Hwy 81", 
    country: "US", 
    lng: -97.5966796875, 
    lat: 40.8247184753418, 
    store_id: 8024
  }, 
  {
    city: "Sunnyvale", 
    name: "Safeway - Sunnyvale #1439", 
    country: "US", 
    lng: -122.01779174804688, 
    lat: 37.357357025146484, 
    store_id: 8026
  }, 
  {
    city: "Conifer", 
    name: "King Soopers-Aspen Park #87", 
    country: "US", 
    lng: -105.29171752929688, 
    lat: 39.54400634765625, 
    store_id: 8029
  }, 
  {
    city: "Cocoa Beach", 
    name: "Sheraton Four Points Hotel", 
    country: "US", 
    lng: -80.60771942138672, 
    lat: 28.355520248413086, 
    store_id: 8031
  }, 
  {
    city: "Cranberry Township", 
    name: "Giant Eagle Mkt-Cranberry Twp #665", 
    country: "US", 
    lng: -80.11100006103516, 
    lat: 40.70289993286133, 
    store_id: 8033
  }, 
  {
    city: "Reston", 
    name: "Target Reston T-1088", 
    country: "US", 
    lng: -77.37031555175781, 
    lat: 38.95520782470703, 
    store_id: 8035
  }, 
  {
    city: "Tacoma", 
    name: "Safeway - Tacoma #1436", 
    country: "US", 
    lng: -122.40726470947266, 
    lat: 47.19032287597656, 
    store_id: 8036
  }, 
  {
    city: "Rockaway", 
    name: "Rockaway, Ring Road", 
    country: "US", 
    lng: -74.5584945678711, 
    lat: 40.90732955932617, 
    store_id: 8037
  }, 
  {
    city: "Beaverton", 
    name: "Tektronix", 
    country: "US", 
    lng: -122.80249786376953, 
    lat: 45.48720169067383, 
    store_id: 8038
  }, 
  {
    city: "Big Bear Lake", 
    name: "Big Bear & Christmas Tree Lane", 
    country: "US", 
    lng: -116.88420104980469, 
    lat: 34.25080108642578, 
    store_id: 8039
  }, 
  {
    city: "Aurora", 
    name: "Hampden Ave & Tower- Aurora", 
    country: "US", 
    lng: -104.77307891845703, 
    lat: 39.65224075317383, 
    store_id: 8040
  }, 
  {
    city: "Indianapolis", 
    name: "86th & Zionsville", 
    country: "US", 
    lng: -86.26189422607422, 
    lat: 39.911231994628906, 
    store_id: 8041
  }, 
  {
    city: "Newton", 
    name: "Newton Corner", 
    country: "US", 
    lng: -71.18531036376953, 
    lat: 42.3590087890625, 
    store_id: 8042
  }, 
  {
    city: "Bakersfield", 
    name: "Oswell & Auburn, Bakersfield", 
    country: "US", 
    lng: -118.94937133789062, 
    lat: 35.398067474365234, 
    store_id: 8043
  }, 
  {
    city: "Las Vegas", 
    name: "LAS Term 3, Concourse D Rotunda", 
    country: "US", 
    lng: -115.14085388183594, 
    lat: 36.05673599243164, 
    store_id: 8044
  }, 
  {
    city: "Baltimore", 
    name: "Canton", 
    country: "US", 
    lng: -76.58032989501953, 
    lat: 39.280757904052734, 
    store_id: 8046
  }, 
  {
    city: "San Jose", 
    name: "Safeway - San Jose #1483", 
    country: "US", 
    lng: -121.91107940673828, 
    lat: 37.293704986572266, 
    store_id: 8048
  }, 
  {
    city: "Waipahu", 
    name: "Kunia Shopping Center", 
    country: "US", 
    lng: -158.0338592529297, 
    lat: 21.38754653930664, 
    store_id: 8049
  }, 
  {
    city: "Vernon Hills", 
    name: "Super Target Vernon Hills ST-833", 
    country: "US", 
    lng: -87.95661926269531, 
    lat: 42.24144744873047, 
    store_id: 8050
  }, 
  {
    city: "Marysville", 
    name: "Fred Meyer-Marysville #209", 
    country: "US", 
    lng: -122.16995239257812, 
    lat: 48.08510208129883, 
    store_id: 8051
  }, 
  {
    city: "Ramona", 
    name: "Albertsons-Ramona #6725", 
    country: "US", 
    lng: -116.87671661376953, 
    lat: 33.038917541503906, 
    store_id: 8052
  }, 
  {
    city: "Ukiah", 
    name: "Safeway - Ukiah #1583", 
    country: "US", 
    lng: -123.20591735839844, 
    lat: 39.14406967163086, 
    store_id: 8053
  }, 
  {
    city: "Akron", 
    name: "Akron, South Arlington Rd", 
    country: "US", 
    lng: -81.49275970458984, 
    lat: 40.992855072021484, 
    store_id: 8054
  }, 
  {
    city: "Lake Elsinore", 
    name: "Vons - Lake Elsinore #2373", 
    country: "US", 
    lng: -117.29373168945312, 
    lat: 33.6605339050293, 
    store_id: 8056
  }, 
  {
    city: "Marlborough", 
    name: "Solomon Pond Mall", 
    country: "US", 
    lng: -71.61257934570312, 
    lat: 42.356117248535156, 
    store_id: 8057
  }, 
  {
    city: "Bedford", 
    name: "PA Tpk South Midway TP", 
    country: "US", 
    lng: -78.51940155029297, 
    lat: 39.96858215332031, 
    store_id: 8060
  }, 
  {
    city: "Phoenix", 
    name: "St Joseph Hospital", 
    country: "US", 
    lng: -112.07878112792969, 
    lat: 33.48033142089844, 
    store_id: 8062
  }, 
  {
    city: "Stone Mountain", 
    name: "Kroger-Stone Mountain #449", 
    country: "US", 
    lng: -84.13258361816406, 
    lat: 33.84135055541992, 
    store_id: 8063
  }, 
  {
    city: "Dedham", 
    name: "Dedham Mall, Pad", 
    country: "US", 
    lng: -71.16863250732422, 
    lat: 42.25626754760742, 
    store_id: 8065
  }, 
  {
    city: "Charlotte", 
    name: "CLT- Main Terminal Pre Security", 
    country: "US", 
    lng: -80.9450454711914, 
    lat: 35.22065353393555, 
    store_id: 8067
  }, 
  {
    city: "Ellensburg", 
    name: "Safeway-Ellensburg #1630", 
    country: "US", 
    lng: -120.54349517822266, 
    lat: 46.99609375, 
    store_id: 8069
  }, 
  {
    city: "Aurora", 
    name: "Parker & Peoria-Aurora", 
    country: "US", 
    lng: -104.8502197265625, 
    lat: 39.65998458862305, 
    store_id: 8071
  }, 
  {
    city: "Littleton", 
    name: "King Soopers - Littleton #27", 
    country: "US", 
    lng: -104.94432067871094, 
    lat: 39.54255294799805, 
    store_id: 8072
  }, 
  {
    city: "Overland Park", 
    name: "151st & Marty Street", 
    country: "US", 
    lng: -94.66925048828125, 
    lat: 38.854942321777344, 
    store_id: 8073
  }, 
  {
    city: "Sunnyvale", 
    name: "Safeway - Sunnyvale #1196", 
    country: "US", 
    lng: -122.05812072753906, 
    lat: 37.372802734375, 
    store_id: 8074
  }, 
  {
    city: "Lancaster", 
    name: "Stone Mill Plaza", 
    country: "US", 
    lng: -76.3419189453125, 
    lat: 40.03752136230469, 
    store_id: 8078
  }, 
  {
    city: "Simi Valley", 
    name: "Vons-Simi Valley #2047", 
    country: "US", 
    lng: -118.67801666259766, 
    lat: 34.27306365966797, 
    store_id: 8079
  }, 
  {
    city: "Asheville", 
    name: "Ingles-Asheville#3", 
    country: "US", 
    lng: -82.55224609375, 
    lat: 35.630523681640625, 
    store_id: 8080
  }, 
  {
    city: "Flushing", 
    name: "Target Flushing T-1150", 
    country: "US", 
    lng: -73.83329010009766, 
    lat: 40.783416748046875, 
    store_id: 8059
  }, 
  {
    city: "Castle Rock", 
    name: "King Soopers - Castle Rock #132", 
    country: "US", 
    lng: -104.81459045410156, 
    lat: 39.3530387878418, 
    store_id: 8075
  }, 
  {
    city: "Fort Lauderdale", 
    name: "Super Target Sawgrass ST-815", 
    country: "US", 
    lng: -80.32274627685547, 
    lat: 26.145580291748047, 
    store_id: 8076
  }, 
  {
    city: "Worcester", 
    name: "Worcester, East Central Street", 
    country: "US", 
    lng: -71.79451751708984, 
    lat: 42.26677322387695, 
    store_id: 8084
  }, 
  {
    city: "Evergreen", 
    name: "Safeway - Evergreen #10", 
    country: "US", 
    lng: -105.33992767333984, 
    lat: 39.6458854675293, 
    store_id: 8085
  }, 
  {
    city: "Columbus", 
    name: "Hy-Vee - Columbus #1", 
    country: "US", 
    lng: -97.36829376220703, 
    lat: 41.43857192993164, 
    store_id: 8087
  }, 
  {
    city: "Sandy", 
    name: "Safeway - Sandy #782", 
    country: "US", 
    lng: -122.27684020996094, 
    lat: 45.400970458984375, 
    store_id: 8088
  }, 
  {
    city: "Huntsville", 
    name: "Memorial & Mastin Lake", 
    country: "US", 
    lng: -86.58666229248047, 
    lat: 34.77070236206055, 
    store_id: 8089
  }, 
  {
    city: "Sterling", 
    name: "IAD - Dulles Conc C - Gate 7 RELO", 
    country: "US", 
    lng: -77.4435043334961, 
    lat: 38.94547653198242, 
    store_id: 8090
  }, 
  {
    city: "Johnstown", 
    name: "Johnstown", 
    country: "US", 
    lng: -78.84640502929688, 
    lat: 40.27803421020508, 
    store_id: 8091
  }, 
  {
    city: "Huntsville", 
    name: "Sam Houston University- Huntsville", 
    country: "US", 
    lng: -95.54911804199219, 
    lat: 30.71209716796875, 
    store_id: 8092
  }, 
  {
    city: "Stockton", 
    name: "March & I-5 - Stockton", 
    country: "US", 
    lng: -121.34666442871094, 
    lat: 37.983863830566406, 
    store_id: 8093
  }, 
  {
    city: "Redmond", 
    name: "Safeway - Redmond #464", 
    country: "US", 
    lng: -122.1100082397461, 
    lat: 47.671382904052734, 
    store_id: 8094
  }, 
  {
    city: "Elk Grove", 
    name: "Safeway - Elk Grove #1289", 
    country: "US", 
    lng: -121.37015533447266, 
    lat: 38.453487396240234, 
    store_id: 8095
  }, 
  {
    city: "San Bernardino", 
    name: "CSU/San Bernadino Student Union Rel", 
    country: "US", 
    lng: -117.32817840576172, 
    lat: 34.17809295654297, 
    store_id: 8096
  }, 
  {
    city: "San Francisco", 
    name: "3727 Buchanan", 
    country: "US", 
    lng: -122.43376159667969, 
    lat: 37.80449676513672, 
    store_id: 8097
  }, 
  {
    city: "Cos Cob", 
    name: "Cos Cob", 
    country: "US", 
    lng: -73.60027313232422, 
    lat: 41.03730010986328, 
    store_id: 8098
  }, 
  {
    city: "Cedar Rapids", 
    name: "Cedar Rapids-1st & Collins", 
    country: "US", 
    lng: -91.62151336669922, 
    lat: 42.02664566040039, 
    store_id: 8099
  }, 
  {
    city: "Lakeville", 
    name: "Lakeville - I-35 & Kenwood Trail", 
    country: "US", 
    lng: -93.28321838378906, 
    lat: 44.692413330078125, 
    store_id: 8100
  }, 
  {
    city: "Lawton", 
    name: "Cache & NW 40th", 
    country: "US", 
    lng: -98.4427719116211, 
    lat: 34.62299728393555, 
    store_id: 8101
  }, 
  {
    city: "Eau Claire", 
    name: "Hastings & Kirk", 
    country: "US", 
    lng: -91.46656036376953, 
    lat: 44.798404693603516, 
    store_id: 8102
  }, 
  {
    city: "Lakewood", 
    name: "Del Amo & Woodruff, Lakewood", 
    country: "US", 
    lng: -118.11607360839844, 
    lat: 33.84686279296875, 
    store_id: 8103
  }, 
  {
    city: "Novato", 
    name: "San Marin & San Ramon", 
    country: "US", 
    lng: -122.60331726074219, 
    lat: 38.12255096435547, 
    store_id: 8104
  }, 
  {
    city: "Midland", 
    name: "Midland, M-10 & Eastman", 
    country: "US", 
    lng: -84.24796295166016, 
    lat: 43.66267013549805, 
    store_id: 8105
  }, 
  {
    city: "San Jose", 
    name: "Curtner & Leigh", 
    country: "US", 
    lng: -121.92266082763672, 
    lat: 37.27560043334961, 
    store_id: 8106
  }, 
  {
    city: "Richmond", 
    name: "7017-C Forest Hills Ave", 
    country: "US", 
    lng: -77.52536010742188, 
    lat: 37.53743362426758, 
    store_id: 8108
  }, 
  {
    city: "Spokane", 
    name: "Market & Garland", 
    country: "US", 
    lng: -117.36530303955078, 
    lat: 47.693843841552734, 
    store_id: 8109
  }, 
  {
    city: "Delavan", 
    name: "I-43 & Highway 50", 
    country: "US", 
    lng: -88.61473846435547, 
    lat: 42.62841033935547, 
    store_id: 8110
  }, 
  {
    city: "Tustin", 
    name: "Red Hill & Edinger", 
    country: "US", 
    lng: -117.82640838623047, 
    lat: 33.72185134887695, 
    store_id: 8111
  }, 
  {
    city: "Fresno", 
    name: "Herndon & Milburn, Fresno", 
    country: "US", 
    lng: -119.8792953491211, 
    lat: 36.834835052490234, 
    store_id: 8112
  }, 
  {
    city: "Owensboro", 
    name: "Frederica & Booth", 
    country: "US", 
    lng: -87.11180877685547, 
    lat: 37.752098083496094, 
    store_id: 8113
  }, 
  {
    city: "Reno", 
    name: "5th & Nevada - Reno", 
    country: "US", 
    lng: -119.8200454711914, 
    lat: 39.52998733520508, 
    store_id: 8114
  }, 
  {
    city: "Las Vegas", 
    name: "Flamingo & I-215, Las Vegas", 
    country: "US", 
    lng: -115.30455017089844, 
    lat: 36.11452865600586, 
    store_id: 8115
  }, 
  {
    city: "Brownsville", 
    name: "FM 802 & San Marcelo", 
    country: "US", 
    lng: -97.49653625488281, 
    lat: 25.951900482177734, 
    store_id: 8116
  }, 
  {
    city: "Homer", 
    name: "Safeway-Homer #1832", 
    country: "US", 
    lng: -151.53648376464844, 
    lat: 59.64234161376953, 
    store_id: 8117
  }, 
  {
    city: "San Jose", 
    name: "Safeway - San Jose #695", 
    country: "US", 
    lng: -121.86112213134766, 
    lat: 37.219818115234375, 
    store_id: 8118
  }, 
  {
    city: "Overland Park", 
    name: "Marriott Overland Park", 
    country: "US", 
    lng: -94.66950225830078, 
    lat: 38.93087387084961, 
    store_id: 8119
  }, 
  {
    city: "Louisville", 
    name: "Kroger - Louisville #764", 
    country: "US", 
    lng: -85.5743408203125, 
    lat: 38.28823471069336, 
    store_id: 8120
  }, 
  {
    city: "Columbia", 
    name: "9th & Elm", 
    country: "US", 
    lng: -92.32740783691406, 
    lat: 38.94810485839844, 
    store_id: 8121
  }, 
  {
    city: "Carrollton", 
    name: "Kroger - Carrollton #460", 
    country: "US", 
    lng: -96.91487884521484, 
    lat: 33.019248962402344, 
    store_id: 8122
  }, 
  {
    city: "Spokane", 
    name: "Safeway - Spokane #342", 
    country: "US", 
    lng: -117.43569946289062, 
    lat: 47.680503845214844, 
    store_id: 8123
  }, 
  {
    city: "Aberdeen", 
    name: "Safeway - Aberdeen #1546", 
    country: "US", 
    lng: -123.81851959228516, 
    lat: 46.9725341796875, 
    store_id: 8124
  }, 
  {
    city: "Gaffney", 
    name: "Gaffney", 
    country: "US", 
    lng: -81.70509338378906, 
    lat: 35.080684661865234, 
    store_id: 8125
  }, 
  {
    city: "South Holland", 
    name: "Lincoln Travel Oasis Space K2", 
    country: "US", 
    lng: -87.5993881225586, 
    lat: 41.57832717895508, 
    store_id: 8126
  }, 
  {
    city: "Mount Laurel", 
    name: "Mount Laurel Centerton Square", 
    country: "US", 
    lng: -74.91392517089844, 
    lat: 39.96998977661133, 
    store_id: 8127
  }, 
  {
    city: "Columbus", 
    name: "Kroger-Columbus #569", 
    country: "US", 
    lng: -83.0019302368164, 
    lat: 39.94953536987305, 
    store_id: 8128
  }, 
  {
    city: "Eagle River", 
    name: "Coronado Rd- Eagle River", 
    country: "US", 
    lng: -149.57078552246094, 
    lat: 61.325462341308594, 
    store_id: 8129
  }, 
  {
    city: "Tucson", 
    name: "Davis Monthan AFB", 
    country: "US", 
    lng: -110.8634262084961, 
    lat: 32.21942138671875, 
    store_id: 8130
  }, 
  {
    city: "Orlando", 
    name: "S Semoran Blvd & Lee Vista Blvd", 
    country: "US", 
    lng: -81.3093032836914, 
    lat: 28.467954635620117, 
    store_id: 8132
  }, 
  {
    city: "Fort Myers", 
    name: "First St & Broadway", 
    country: "US", 
    lng: -81.87078094482422, 
    lat: 26.64370346069336, 
    store_id: 8134
  }, 
  {
    city: "Douglasville", 
    name: "Chapel Hill Rd @ I-20", 
    country: "US", 
    lng: -84.73703002929688, 
    lat: 33.73141098022461, 
    store_id: 8135
  }, 
  {
    city: "Dallas", 
    name: "244 Ellendale Ave- Dallas, OR", 
    country: "US", 
    lng: -123.30992889404297, 
    lat: 44.92994689941406, 
    store_id: 8136
  }, 
  {
    city: "Stephenville", 
    name: "Hwy 377 & Wolfe Nursery", 
    country: "US", 
    lng: -98.23990631103516, 
    lat: 32.203975677490234, 
    store_id: 8137
  }, 
  {
    city: "Richland", 
    name: "Gage & Keene Rd", 
    country: "US", 
    lng: -119.267822265625, 
    lat: 46.22739028930664, 
    store_id: 8138
  }, 
  {
    city: "Sacramento", 
    name: "Safeway - Sacramento #1530", 
    country: "US", 
    lng: -121.38664245605469, 
    lat: 38.59431076049805, 
    store_id: 8139
  }, 
  {
    city: "Edgewater", 
    name: "3059 Solomons Island Road", 
    country: "US", 
    lng: -76.56121063232422, 
    lat: 38.94218444824219, 
    store_id: 8140
  }, 
  {
    city: "Scotrun", 
    name: "Great Wolf Lodge - Lobby", 
    country: "US", 
    lng: -75.32168579101562, 
    lat: 41.059959411621094, 
    store_id: 8141
  }, 
  {
    city: "Dallas", 
    name: "JPMC Tower", 
    country: "US", 
    lng: -96.7967529296875, 
    lat: 32.78821563720703, 
    store_id: 8142
  }, 
  {
    city: "Alexandria", 
    name: "Hilton Alexandria Old Town Lobby", 
    country: "US", 
    lng: -77.05961608886719, 
    lat: 38.8070182800293, 
    store_id: 8143
  }, 
  {
    city: "Virginia Beach", 
    name: "Farm Fresh-Virginia Beach # 911", 
    country: "US", 
    lng: -76.10833740234375, 
    lat: 36.789039611816406, 
    store_id: 8144
  }, 
  {
    city: "Yakima", 
    name: "Safeway-Yakima #1660", 
    country: "US", 
    lng: -120.4890365600586, 
    lat: 46.578311920166016, 
    store_id: 8145
  }, 
  {
    city: "Huntington Beach", 
    name: "Bolsa Chica & Heil", 
    country: "US", 
    lng: -118.04180145263672, 
    lat: 33.72280502319336, 
    store_id: 8146
  }, 
  {
    city: "San Diego", 
    name: "10th & Market, San Diego", 
    country: "US", 
    lng: -117.15536499023438, 
    lat: 32.711360931396484, 
    store_id: 8147
  }, 
  {
    city: "Moreno Valley", 
    name: "Moreno Beach & Hwy 60", 
    country: "US", 
    lng: -117.17898559570312, 
    lat: 33.935638427734375, 
    store_id: 8148
  }, 
  {
    city: "Saugus", 
    name: "Bouquet Canyon & Haskell Canyon", 
    country: "US", 
    lng: -118.5105972290039, 
    lat: 34.443363189697266, 
    store_id: 8150
  }, 
  {
    city: "Boston", 
    name: "BOS - Terminal C gate 28", 
    country: "US", 
    lng: -71.0163345336914, 
    lat: 42.3669548034668, 
    store_id: 8151
  }, 
  {
    city: "Greensboro", 
    name: "Patriots Place", 
    country: "US", 
    lng: -79.79898071289062, 
    lat: 36.13084411621094, 
    store_id: 8152
  }, 
  {
    city: "Overland Park", 
    name: "Hen House #34 - Overland Park", 
    country: "US", 
    lng: -94.7257080078125, 
    lat: 38.92858123779297, 
    store_id: 8153
  }, 
  {
    city: "Pacifica", 
    name: "Safeway - Pacifica #304", 
    country: "US", 
    lng: -122.50306701660156, 
    lat: 37.59452438354492, 
    store_id: 8154
  }, 
  {
    city: "Alpharetta", 
    name: "Bethany & Hwy 9", 
    country: "US", 
    lng: -84.27054595947266, 
    lat: 34.11814498901367, 
    store_id: 8155
  }, 
  {
    city: "Moses Lake", 
    name: "Penn Plaza- Moses Lake", 
    country: "US", 
    lng: -119.27776336669922, 
    lat: 47.14247512817383, 
    store_id: 8156
  }, 
  {
    city: "Jackson", 
    name: "Trade Center Dr. & Hwy 49 - Martel", 
    country: "US", 
    lng: -120.7996597290039, 
    lat: 38.37115478515625, 
    store_id: 8157
  }, 
  {
    city: "Henderson", 
    name: "Vons - Henderson #2615", 
    country: "US", 
    lng: -114.9931411743164, 
    lat: 36.00931167602539, 
    store_id: 8158
  }, 
  {
    city: "Long Beach", 
    name: "Redondo & 7th", 
    country: "US", 
    lng: -118.1526107788086, 
    lat: 33.775203704833984, 
    store_id: 8159
  }, 
  {
    city: "Anaheim Hills", 
    name: "Weir Canyon & Monte Vista", 
    country: "US", 
    lng: -117.74060821533203, 
    lat: 33.864158630371094, 
    store_id: 8160
  }, 
  {
    city: "Roseville", 
    name: "12 Mile & Gratiot", 
    country: "US", 
    lng: -82.92726135253906, 
    lat: 42.510414123535156, 
    store_id: 8163
  }, 
  {
    city: "Plymouth", 
    name: "Plymouth - Hwy 55 & NW Blvd.", 
    country: "US", 
    lng: -93.44918823242188, 
    lat: 45.00830841064453, 
    store_id: 8164
  }, 
  {
    city: "Las Vegas", 
    name: "Tenaya & Azure, Las Vegas", 
    country: "US", 
    lng: -115.25190734863281, 
    lat: 36.2738037109375, 
    store_id: 8165
  }, 
  {
    city: "Indianapolis", 
    name: "21st & Shadeland", 
    country: "US", 
    lng: -86.0448989868164, 
    lat: 39.79518127441406, 
    store_id: 8166
  }, 
  {
    city: "North Las Vegas", 
    name: "Cheyenne & MLK, North Las Vegas", 
    country: "US", 
    lng: -115.16014099121094, 
    lat: 36.21797180175781, 
    store_id: 8167
  }, 
  {
    city: "Schertz", 
    name: "I-35 & Tri County", 
    country: "US", 
    lng: -98.28263854980469, 
    lat: 29.597665786743164, 
    store_id: 8168
  }, 
  {
    city: "Sheboygan", 
    name: "Washington & Greenwing", 
    country: "US", 
    lng: -87.7545394897461, 
    lat: 43.71724319458008, 
    store_id: 8169
  }, 
  {
    city: "Moreno Valley", 
    name: "Hemlock & Perris, Moreno Valley", 
    country: "US", 
    lng: -117.22602844238281, 
    lat: 33.944366455078125, 
    store_id: 8170
  }, 
  {
    city: "Bothell", 
    name: "QFC - Bothell #819", 
    country: "US", 
    lng: -122.2115478515625, 
    lat: 47.76529312133789, 
    store_id: 8171
  }, 
  {
    city: "Yakima", 
    name: "Safeway - Yakima #462", 
    country: "US", 
    lng: -120.51679992675781, 
    lat: 46.60282516479492, 
    store_id: 8172
  }, 
  {
    city: "Escondido", 
    name: "Mission & Quince, Escondido", 
    country: "US", 
    lng: -117.09370422363281, 
    lat: 33.12749481201172, 
    store_id: 8173
  }, 
  {
    city: "Hemet", 
    name: "Florida & Palm, Hemet", 
    country: "US", 
    lng: -116.98011779785156, 
    lat: 33.747257232666016, 
    store_id: 8174
  }, 
  {
    city: "Idaho Springs", 
    name: "Colorado & I-70- Idaho Springs", 
    country: "US", 
    lng: -105.49703216552734, 
    lat: 39.74213790893555, 
    store_id: 8175
  }, 
  {
    city: "Ceres", 
    name: "Hatch & Mitchell - Ceres", 
    country: "US", 
    lng: -120.939208984375, 
    lat: 37.60890579223633, 
    store_id: 8177
  }, 
  {
    city: "Fort Wayne", 
    name: "Glenbrook Square Mall", 
    country: "US", 
    lng: -85.1380615234375, 
    lat: 41.11590576171875, 
    store_id: 8178
  }, 
  {
    city: "Hayward", 
    name: "Whipple & Industrial", 
    country: "US", 
    lng: -122.06380462646484, 
    lat: 37.60673141479492, 
    store_id: 8180
  }, 
  {
    city: "Augusta", 
    name: "I-20 & Washington", 
    country: "US", 
    lng: -82.04560852050781, 
    lat: 33.5120964050293, 
    store_id: 8182
  }, 
  {
    city: "Summerville", 
    name: "US 17A & Berlin G. Myers", 
    country: "US", 
    lng: -80.15962219238281, 
    lat: 33.034183502197266, 
    store_id: 8183
  }, 
  {
    city: "Scotts Valley", 
    name: "Safeway - Scotts Valley #300", 
    country: "US", 
    lng: -122.0301513671875, 
    lat: 37.04667282104492, 
    store_id: 8184
  }, 
  {
    city: "Anaheim", 
    name: "Vons-Anaheim Hills #2216", 
    country: "US", 
    lng: -117.75636291503906, 
    lat: 33.86756896972656, 
    store_id: 8185
  }, 
  {
    city: "Englewood", 
    name: "Safeway - Englewood #17", 
    country: "US", 
    lng: -104.98430633544922, 
    lat: 39.65182113647461, 
    store_id: 8188
  }, 
  {
    city: "Westbury", 
    name: "Target Westbury T-1139", 
    country: "US", 
    lng: -73.60025024414062, 
    lat: 40.74190902709961, 
    store_id: 8189
  }, 
  {
    city: "Oklahoma City", 
    name: "I-240 & Pennsylvania", 
    country: "US", 
    lng: -97.5457763671875, 
    lat: 35.39004135131836, 
    store_id: 8190
  }, 
  {
    city: "Arlington", 
    name: "Matlock & Bardin", 
    country: "US", 
    lng: -97.11444091796875, 
    lat: 32.67098617553711, 
    store_id: 8191
  }, 
  {
    city: "Kirkland", 
    name: "Safeway-Juanita #2734", 
    country: "US", 
    lng: -122.20726013183594, 
    lat: 47.72322463989258, 
    store_id: 8192
  }, 
  {
    city: "Fort Myers", 
    name: "RSW - Ft Myers Pier D", 
    country: "US", 
    lng: -81.75723266601562, 
    lat: 26.528663635253906, 
    store_id: 8193
  }, 
  {
    city: "Fort Myers", 
    name: "RSW - Ft Myers Pier B", 
    country: "US", 
    lng: -81.75331115722656, 
    lat: 26.52791976928711, 
    store_id: 8194
  }, 
  {
    city: "Fort Myers", 
    name: "RSW - Ft Myers Main Term, Pre Sec", 
    country: "US", 
    lng: -81.75574493408203, 
    lat: 26.528240203857422, 
    store_id: 8195
  }, 
  {
    city: "Gaithersburg", 
    name: "Washingtonian Waterfront", 
    country: "US", 
    lng: -77.1984634399414, 
    lat: 39.11669921875, 
    store_id: 8196
  }, 
  {
    city: "Las Vegas", 
    name: "Flamingo & Eastern, Las Vegas", 
    country: "US", 
    lng: -115.1181411743164, 
    lat: 36.11515808105469, 
    store_id: 8200
  }, 
  {
    city: "Greece", 
    name: "South Greece, Long Pond & Ridgeway", 
    country: "US", 
    lng: -77.70101165771484, 
    lat: 43.18782424926758, 
    store_id: 8201
  }, 
  {
    city: "Oklahoma City", 
    name: "Northwest & Independence", 
    country: "US", 
    lng: -97.57491302490234, 
    lat: 35.53059768676758, 
    store_id: 8202
  }, 
  {
    city: "Richardson", 
    name: "75 & Campbell", 
    country: "US", 
    lng: -96.71725463867188, 
    lat: 32.974971771240234, 
    store_id: 8203
  }, 
  {
    city: "Seattle", 
    name: "145th and Lake City Way", 
    country: "US", 
    lng: -122.29190063476562, 
    lat: 47.73295211791992, 
    store_id: 8204
  }, 
  {
    city: "San Antonio", 
    name: "Medical & Wurzbach", 
    country: "US", 
    lng: -98.57872009277344, 
    lat: 29.51044273376465, 
    store_id: 8205
  }, 
  {
    city: "Aldie", 
    name: "Harris Teeter-Chantilly/Dulles S #2", 
    country: "US", 
    lng: -77.54817962646484, 
    lat: 38.93916320800781, 
    store_id: 8206
  }, 
  {
    city: "Newcastle", 
    name: "Safeway - Newcastle #558", 
    country: "US", 
    lng: -122.16735076904297, 
    lat: 47.539493560791016, 
    store_id: 8207
  }, 
  {
    city: "Edmonds", 
    name: "Safeway-Edmonds #1297", 
    country: "US", 
    lng: -122.34424591064453, 
    lat: 47.784339904785156, 
    store_id: 8208
  }, 
  {
    city: "Everett", 
    name: "Safeway-Everett #1484", 
    country: "US", 
    lng: -122.21188354492188, 
    lat: 47.962547302246094, 
    store_id: 8209
  }, 
  {
    city: "Cicero", 
    name: "Target Cicero T-732", 
    country: "US", 
    lng: -87.74168395996094, 
    lat: 41.839576721191406, 
    store_id: 8210
  }, 
  {
    city: "Pittsburg", 
    name: "29th & Broadway", 
    country: "US", 
    lng: -94.7044906616211, 
    lat: 37.436283111572266, 
    store_id: 8211
  }, 
  {
    city: "Holly Springs", 
    name: "Harris Teeter-Holly Springs #118", 
    country: "US", 
    lng: -78.79653930664062, 
    lat: 35.66496276855469, 
    store_id: 8212
  }, 
  {
    city: "Houston", 
    name: "Hwy 6 & Memorial", 
    country: "US", 
    lng: -95.64347076416016, 
    lat: 29.775285720825195, 
    store_id: 8213
  }, 
  {
    city: "Humble", 
    name: "Kingwood Dr & Green Oaks Dr", 
    country: "US", 
    lng: -95.23371124267578, 
    lat: 30.050268173217773, 
    store_id: 8214
  }, 
  {
    city: "Park City", 
    name: "Kimball Junction- Park City", 
    country: "US", 
    lng: -111.540771484375, 
    lat: 40.72209548950195, 
    store_id: 8215
  }, 
  {
    city: "Fredericksburg", 
    name: "Westwood S.C.", 
    country: "US", 
    lng: -77.49288940429688, 
    lat: 38.295963287353516, 
    store_id: 8216
  }, 
  {
    city: "Christiansburg", 
    name: "Christiansburg", 
    country: "US", 
    lng: -80.42274475097656, 
    lat: 37.163299560546875, 
    store_id: 8217
  }, 
  {
    city: "Virginia Beach", 
    name: "Pembroke", 
    country: "US", 
    lng: -76.13734436035156, 
    lat: 36.8428955078125, 
    store_id: 8218
  }, 
  {
    city: "Waynesboro", 
    name: "Waynesboro", 
    country: "US", 
    lng: -78.93632507324219, 
    lat: 38.064064025878906, 
    store_id: 8219
  }, 
  {
    city: "Puyallup", 
    name: "116th & Canyon Rd", 
    country: "US", 
    lng: -122.35667419433594, 
    lat: 47.15053176879883, 
    store_id: 8220
  }, 
  {
    city: "Wildwood", 
    name: "Taylor & Manchester", 
    country: "US", 
    lng: -90.6280288696289, 
    lat: 38.58216857910156, 
    store_id: 8221
  }, 
  {
    city: "Barstow", 
    name: "Main & I-15", 
    country: "US", 
    lng: -116.99930572509766, 
    lat: 34.89084243774414, 
    store_id: 8222
  }, 
  {
    city: "Champaign", 
    name: "Champaign - 5th & Green", 
    country: "US", 
    lng: -88.23174285888672, 
    lat: 40.11017990112305, 
    store_id: 8223
  }, 
  {
    city: "Huntsville", 
    name: "Memorial Pkwy & Hwy 72", 
    country: "US", 
    lng: -86.6014175415039, 
    lat: 34.74170684814453, 
    store_id: 8224
  }, 
  {
    city: "Jonesboro", 
    name: "Target Jonesboro T-1919", 
    country: "US", 
    lng: -90.66732788085938, 
    lat: 35.82181167602539, 
    store_id: 8225
  }, 
  {
    city: "Yuma", 
    name: "Target Yuma T-2083", 
    country: "US", 
    lng: -114.60590362548828, 
    lat: 32.70489501953125, 
    store_id: 8226
  }, 
  {
    city: "Conway", 
    name: "Hwy 65 & O'Bryant", 
    country: "US", 
    lng: -92.43877410888672, 
    lat: 35.11119079589844, 
    store_id: 8227
  }, 
  {
    city: "Burbank", 
    name: "San Fernando & Walnut, Burbank", 
    country: "US", 
    lng: -118.31787109375, 
    lat: 34.18684768676758, 
    store_id: 8229
  }, 
  {
    city: "Fort Smith", 
    name: "I-540 & Rogers Ave", 
    country: "US", 
    lng: -94.3633041381836, 
    lat: 35.359256744384766, 
    store_id: 8231
  }, 
  {
    city: "Indianapolis", 
    name: "Fashion Mall", 
    country: "US", 
    lng: -86.10829162597656, 
    lat: 39.91386032104492, 
    store_id: 8232
  }, 
  {
    city: "Palmdale", 
    name: "Palmdale Blvd & 3rd", 
    country: "US", 
    lng: -118.12503814697266, 
    lat: 34.57953643798828, 
    store_id: 8233
  }, 
  {
    city: "Thornton", 
    name: "84th and Pearl-Thornton", 
    country: "US", 
    lng: -104.97911834716797, 
    lat: 39.84939956665039, 
    store_id: 8234
  }, 
  {
    city: "Firestone", 
    name: "Firestone-I-25 & Hwy 119", 
    country: "US", 
    lng: -104.97747039794922, 
    lat: 40.162689208984375, 
    store_id: 8235
  }, 
  {
    city: "Chandler", 
    name: "Safeway-Chandler #1605", 
    country: "US", 
    lng: -111.82260131835938, 
    lat: 33.321754455566406, 
    store_id: 8236
  }, 
  {
    city: "Philadelphia", 
    name: "9th & South", 
    country: "US", 
    lng: -75.15721130371094, 
    lat: 39.94252014160156, 
    store_id: 8238
  }, 
  {
    city: "Reedley", 
    name: "Manning & Reed, Reedley", 
    country: "US", 
    lng: -119.45989227294922, 
    lat: 36.60313034057617, 
    store_id: 8239
  }, 
  {
    city: "Murrieta", 
    name: "Madison & Los Alamos, Murri", 
    country: "US", 
    lng: -117.19915771484375, 
    lat: 33.55553436279297, 
    store_id: 8241
  }, 
  {
    city: "La Habra", 
    name: "Harbor & La Habra", 
    country: "US", 
    lng: -117.93260955810547, 
    lat: 33.93226623535156, 
    store_id: 8242
  }, 
  {
    city: "Compton", 
    name: "Central & The 91 Fwy, Compton", 
    country: "US", 
    lng: -118.2477035522461, 
    lat: 33.874263763427734, 
    store_id: 8243
  }, 
  {
    city: "San Diego", 
    name: "Carmel Mountain & E. Ocean Air, SD", 
    country: "US", 
    lng: -117.21421813964844, 
    lat: 32.92041015625, 
    store_id: 8244
  }, 
  {
    city: "Norco", 
    name: "6th Street & Hamner", 
    country: "US", 
    lng: -117.55705261230469, 
    lat: 33.93720626831055, 
    store_id: 8245
  }, 
  {
    city: "Hartford", 
    name: "Marriott Hartford - Lobby", 
    country: "US", 
    lng: -72.6692886352539, 
    lat: 41.76369094848633, 
    store_id: 8247
  }, 
  {
    city: "Boca Raton", 
    name: "Florida Atlantic University", 
    country: "US", 
    lng: -80.1020736694336, 
    lat: 26.36983871459961, 
    store_id: 8237
  }, 
  {
    city: "Chesterfield Township", 
    name: "Target Chesterfield Township T-945", 
    country: "US", 
    lng: -82.8288803100586, 
    lat: 42.67737579345703, 
    store_id: 8248
  }, 
  {
    city: "Bloomington", 
    name: "Mall of America II", 
    country: "US", 
    lng: -93.24333953857422, 
    lat: 44.85506057739258, 
    store_id: 8249
  }, 
  {
    city: "West St. Paul", 
    name: "S. Robert & Thompson-West St. Paul", 
    country: "US", 
    lng: -93.08025360107422, 
    lat: 44.901824951171875, 
    store_id: 8250
  }, 
  {
    city: "Rosemount", 
    name: "Rosemount - CR 42 & Hwy 3", 
    country: "US", 
    lng: -93.12775421142578, 
    lat: 44.732547760009766, 
    store_id: 8251
  }, 
  {
    city: "DeKalb", 
    name: "DeKalb Travel Oasis Space D", 
    country: "US", 
    lng: -88.73919677734375, 
    lat: 41.89788055419922, 
    store_id: 8252
  }, 
  {
    city: "Medford", 
    name: "Safeway - Medford #1643", 
    country: "US", 
    lng: -122.8582992553711, 
    lat: 42.36275863647461, 
    store_id: 8253
  }, 
  {
    city: "Fredericksburg", 
    name: "Target Fredericksburg T-772", 
    country: "US", 
    lng: -77.51286315917969, 
    lat: 38.29974365234375, 
    store_id: 8255
  }, 
  {
    city: "Virginia Beach", 
    name: "Farm Fresh-Hampton #193", 
    country: "US", 
    lng: -76.03784942626953, 
    lat: 36.87564468383789, 
    store_id: 8256
  }, 
  {
    city: "Vancouver", 
    name: "Safeway - Vancouver #1611", 
    country: "US", 
    lng: -122.60364532470703, 
    lat: 45.666709899902344, 
    store_id: 8257
  }, 
  {
    city: "Huntington Park", 
    name: "Slauson & State", 
    country: "US", 
    lng: -118.21377563476562, 
    lat: 33.98894500732422, 
    store_id: 8258
  }, 
  {
    city: "Temecula", 
    name: "Old Town Front & 6th, Temecula", 
    country: "US", 
    lng: -117.15145874023438, 
    lat: 33.4955940246582, 
    store_id: 8259
  }, 
  {
    city: "Santa Fe Springs", 
    name: "Valley View & Alondra", 
    country: "US", 
    lng: -118.02925872802734, 
    lat: 33.88772964477539, 
    store_id: 8260
  }, 
  {
    city: "Van Nuys", 
    name: "Saticoy & Louise", 
    country: "US", 
    lng: -118.50960540771484, 
    lat: 34.207733154296875, 
    store_id: 8261
  }, 
  {
    city: "Boca Raton", 
    name: "Yamato Rd & Congress Ave", 
    country: "US", 
    lng: -80.10163116455078, 
    lat: 26.39274787902832, 
    store_id: 8262
  }, 
  {
    city: "Ankeny", 
    name: "Delaware & Shurfine - Ankeny", 
    country: "US", 
    lng: -93.58061218261719, 
    lat: 41.71202850341797, 
    store_id: 8263
  }, 
  {
    city: "Coeur d'Alene", 
    name: "Riverstone Center", 
    country: "US", 
    lng: -116.80582427978516, 
    lat: 47.69443130493164, 
    store_id: 8264
  }, 
  {
    city: "Pittsburgh", 
    name: "Robinson, Lafayette Plaza", 
    country: "US", 
    lng: -80.17939758300781, 
    lat: 40.4481086730957, 
    store_id: 8265
  }, 
  {
    city: "Sevierville", 
    name: "Hwy 66 & US 411", 
    country: "US", 
    lng: -83.5727310180664, 
    lat: 35.87837600708008, 
    store_id: 8266
  }, 
  {
    city: "San Antonio", 
    name: "I-10 & Vance Jackson", 
    country: "US", 
    lng: -98.53433227539062, 
    lat: 29.48411750793457, 
    store_id: 8267
  }, 
  {
    city: "Charlottesville", 
    name: "Hollymead Town Center", 
    country: "US", 
    lng: -78.4439926147461, 
    lat: 38.12668228149414, 
    store_id: 8268
  }, 
  {
    city: "Cumming", 
    name: "Hwy 9 & Bethelview", 
    country: "US", 
    lng: -84.17489624023438, 
    lat: 34.16094207763672, 
    store_id: 8271
  }, 
  {
    city: "Wyomissing", 
    name: "Wyomissing", 
    country: "US", 
    lng: -75.9778823852539, 
    lat: 40.340049743652344, 
    store_id: 8273
  }, 
  {
    city: "Brentwood", 
    name: "Old Hickory Blvd & Westpark Dr", 
    country: "US", 
    lng: -86.80126190185547, 
    lat: 36.03691482543945, 
    store_id: 8274
  }, 
  {
    city: "Naples", 
    name: "Target Naples T-899", 
    country: "US", 
    lng: -81.77094268798828, 
    lat: 26.209396362304688, 
    store_id: 8276
  }, 
  {
    city: "Coeur d'Alene", 
    name: "Safeway-Coeur d'Alene #1470", 
    country: "US", 
    lng: -116.78797912597656, 
    lat: 47.708587646484375, 
    store_id: 8277
  }, 
  {
    city: "Fayetteville", 
    name: "Target Fayetteville T-755", 
    country: "US", 
    lng: -78.97490692138672, 
    lat: 35.05514144897461, 
    store_id: 8279
  }, 
  {
    city: "Fargo", 
    name: "Target Fargo T-61", 
    country: "US", 
    lng: -96.85284423828125, 
    lat: 46.86052703857422, 
    store_id: 8281
  }, 
  {
    city: "Longview", 
    name: "Safeway-Longview #1078", 
    country: "US", 
    lng: -122.96104431152344, 
    lat: 46.14860153198242, 
    store_id: 8282
  }, 
  {
    city: "Greer", 
    name: "Wade Hampton Blvd & Brannon Dr", 
    country: "US", 
    lng: -82.26805114746094, 
    lat: 34.93928527832031, 
    store_id: 8283
  }, 
  {
    city: "Kerrville", 
    name: "Junction Hwy & Commerce", 
    country: "US", 
    lng: -99.17125701904297, 
    lat: 30.061992645263672, 
    store_id: 8284
  }, 
  {
    city: "Austin", 
    name: "38th & Guadalupe", 
    country: "US", 
    lng: -97.73851013183594, 
    lat: 30.302490234375, 
    store_id: 8285
  }, 
  {
    city: "Lynchburg", 
    name: "Wards Road", 
    country: "US", 
    lng: -79.18384552001953, 
    lat: 37.35141372680664, 
    store_id: 8286
  }, 
  {
    city: "Fredericksburg", 
    name: "Route 1, Fredericksburg", 
    country: "US", 
    lng: -77.50436401367188, 
    lat: 38.23282241821289, 
    store_id: 8287
  }, 
  {
    city: "Muncie", 
    name: "McGalliard & Reserve", 
    country: "US", 
    lng: -85.3937759399414, 
    lat: 40.2187614440918, 
    store_id: 8288
  }, 
  {
    city: "Valdosta", 
    name: "I-75 @ St Augustine Rd", 
    country: "US", 
    lng: -83.32809448242188, 
    lat: 30.843887329101562, 
    store_id: 8290
  }, 
  {
    city: "Michigan City", 
    name: "Michigan City-Franklin & Rte 20", 
    country: "US", 
    lng: -86.89456176757812, 
    lat: 41.67922592163086, 
    store_id: 8292
  }, 
  {
    city: "Fort Wayne", 
    name: "Lima & Dupont", 
    country: "US", 
    lng: -85.16541290283203, 
    lat: 41.174903869628906, 
    store_id: 8293
  }, 
  {
    city: "Clinton", 
    name: "I-20 @ Springridge", 
    country: "US", 
    lng: -90.32595825195312, 
    lat: 32.32891082763672, 
    store_id: 8294
  }, 
  {
    city: "Charlotte", 
    name: "Ballantyne", 
    country: "US", 
    lng: -80.85137939453125, 
    lat: 35.055267333984375, 
    store_id: 8295
  }, 
  {
    city: "Salisbury", 
    name: "Towne Creek Commons", 
    country: "US", 
    lng: -80.46085357666016, 
    lat: 35.6594352722168, 
    store_id: 8296
  }, 
  {
    city: "Burlington", 
    name: "Burlington Mall", 
    country: "US", 
    lng: -79.48878479003906, 
    lat: 36.07619094848633, 
    store_id: 8297
  }, 
  {
    city: "Elk Grove", 
    name: "Laguna & Bruceville - Elk Grove", 
    country: "US", 
    lng: -121.41375732421875, 
    lat: 38.42389678955078, 
    store_id: 8298
  }, 
  {
    city: "Kailua-Kona", 
    name: "Henry St & Mamalahoa Hwy", 
    country: "US", 
    lng: -155.98834228515625, 
    lat: 19.645872116088867, 
    store_id: 8299
  }, 
  {
    city: "Tucson", 
    name: "Target Tucson T-854", 
    country: "US", 
    lng: -111.04885864257812, 
    lat: 32.336082458496094, 
    store_id: 8300
  }, 
  {
    city: "Kapaa", 
    name: "Kauai Village Shopping Center Kapaa", 
    country: "US", 
    lng: -159.32150268554688, 
    lat: 22.062841415405273, 
    store_id: 8301
  }, 
  {
    city: "Palmdale", 
    name: "Albertsons-Palmdale #6333", 
    country: "US", 
    lng: -118.14904022216797, 
    lat: 34.58559036254883, 
    store_id: 8302
  }, 
  {
    city: "Pembroke Pines", 
    name: "Target Pembroke Pines T-920", 
    country: "US", 
    lng: -80.2990951538086, 
    lat: 26.00914192199707, 
    store_id: 8275
  }, 
  {
    city: "Steamboat Springs", 
    name: "Safeway - Steamboat Springs #637", 
    country: "US", 
    lng: -106.82449340820312, 
    lat: 40.46596908569336, 
    store_id: 8303
  }, 
  {
    city: "Rancho Santa Margarita", 
    name: "Target Rancho Santa Margarita T-914", 
    country: "US", 
    lng: -117.59674835205078, 
    lat: 33.64326858520508, 
    store_id: 8305
  }, 
  {
    city: "Elk Grove", 
    name: "Target Elk Grove T-1025", 
    country: "US", 
    lng: -121.41560363769531, 
    lat: 38.426673889160156, 
    store_id: 8307
  }, 
  {
    city: "Camarillo", 
    name: "Vons-Camarillo #2094", 
    country: "US", 
    lng: -118.99840545654297, 
    lat: 34.22957229614258, 
    store_id: 8308
  }, 
  {
    city: "Newark", 
    name: "Rutgers U/Newark Robeson Stdnt Ctr", 
    country: "US", 
    lng: -74.1762466430664, 
    lat: 40.74266815185547, 
    store_id: 8310
  }, 
  {
    city: "McMinnville", 
    name: "Safeway-McMinnville #1601", 
    country: "US", 
    lng: -123.17273712158203, 
    lat: 45.22759246826172, 
    store_id: 8311
  }, 
  {
    city: "Tualatin", 
    name: "Fred Meyer-Hillsboro #143", 
    country: "US", 
    lng: -122.91458892822266, 
    lat: 45.499610900878906, 
    store_id: 8312
  }, 
  {
    city: "Redmond", 
    name: "QFC - Redmond Ridge #878", 
    country: "US", 
    lng: -122.02603149414062, 
    lat: 47.69886016845703, 
    store_id: 8314
  }, 
  {
    city: "Des Moines", 
    name: "Safeway - Des Moines #1186", 
    country: "US", 
    lng: -122.31087493896484, 
    lat: 47.35920715332031, 
    store_id: 8315
  }, 
  {
    city: "Bellevue", 
    name: "Fred Meyer - Bellevue #23", 
    country: "US", 
    lng: -122.14391326904297, 
    lat: 47.62886428833008, 
    store_id: 8316
  }, 
  {
    city: "Cleveland", 
    name: "CWRU - Residential Village", 
    country: "US", 
    lng: -81.60444641113281, 
    lat: 41.51258087158203, 
    store_id: 8317
  }, 
  {
    city: "Hershey", 
    name: "Penn State Hershey Medical Ctr Main", 
    country: "US", 
    lng: -76.67601013183594, 
    lat: 40.26428985595703, 
    store_id: 8318
  }, 
  {
    city: "Dallas", 
    name: "Northwest Highway & I-35", 
    country: "US", 
    lng: -96.89137268066406, 
    lat: 32.8621826171875, 
    store_id: 8319
  }, 
  {
    city: "Blacksburg", 
    name: "Kent Square", 
    country: "US", 
    lng: -80.41320037841797, 
    lat: 37.228485107421875, 
    store_id: 8321
  }, 
  {
    city: "North Bend", 
    name: "QFC-North Bend #829", 
    country: "US", 
    lng: -121.78074645996094, 
    lat: 47.49324417114258, 
    store_id: 8322
  }, 
  {
    city: "Bellflower", 
    name: "Lakewood & Artesia", 
    country: "US", 
    lng: -118.14236450195312, 
    lat: 33.8749885559082, 
    store_id: 8324
  }, 
  {
    city: "Oxnard", 
    name: "5th & B Street, Oxnard", 
    country: "US", 
    lng: -119.17943572998047, 
    lat: 34.19789123535156, 
    store_id: 8325
  }, 
  {
    city: "San Diego", 
    name: "28th & B Street, San Diego", 
    country: "US", 
    lng: -117.134033203125, 
    lat: 32.7181282043457, 
    store_id: 8326
  }, 
  {
    city: "Great Falls", 
    name: "Holiday Village-Great Falls-MT", 
    country: "US", 
    lng: -111.29065704345703, 
    lat: 47.493751525878906, 
    store_id: 8327
  }, 
  {
    city: "Brooklyn", 
    name: "33-42 Hillel Place", 
    country: "US", 
    lng: -73.94857025146484, 
    lat: 40.63233947753906, 
    store_id: 8328
  }, 
  {
    city: "Hillsboro", 
    name: "First & Main St. - Hillsboro", 
    country: "US", 
    lng: -122.98947143554688, 
    lat: 45.52256774902344, 
    store_id: 8330
  }, 
  {
    city: "Garland", 
    name: "I-30 & Broadway", 
    country: "US", 
    lng: -96.59593200683594, 
    lat: 32.84229278564453, 
    store_id: 8331
  }, 
  {
    city: "Moraga", 
    name: "Safeway - Moraga #969", 
    country: "US", 
    lng: -122.1286392211914, 
    lat: 37.8360595703125, 
    store_id: 8332
  }, 
  {
    city: "Williamsburg", 
    name: "Farm Fresh - Williamsburg #405", 
    country: "US", 
    lng: -76.76420593261719, 
    lat: 37.251319885253906, 
    store_id: 8333
  }, 
  {
    city: "Albuquerque", 
    name: "U of NM - Zimmerman Library", 
    country: "US", 
    lng: -106.62060546875, 
    lat: 35.0852165222168, 
    store_id: 8335
  }, 
  {
    city: "Orlando", 
    name: "Doubletree Hotel @ Universal Studio", 
    country: "US", 
    lng: -81.45720672607422, 
    lat: 28.478431701660156, 
    store_id: 8336
  }, 
  {
    city: "Smyrna", 
    name: "Target Smyrna T-373", 
    country: "US", 
    lng: -84.48284912109375, 
    lat: 33.89826965332031, 
    store_id: 8337
  }, 
  {
    city: "Largo", 
    name: "Target Largo T-1006", 
    country: "US", 
    lng: -76.82682037353516, 
    lat: 38.896507263183594, 
    store_id: 8339
  }, 
  {
    city: "Bel Air", 
    name: "Target BWI Bel Air T-1002", 
    country: "US", 
    lng: -76.35191345214844, 
    lat: 39.52560806274414, 
    store_id: 8340
  }, 
  {
    city: "Henderson", 
    name: "Sunset Station", 
    country: "US", 
    lng: -115.039794921875, 
    lat: 36.0618896484375, 
    store_id: 8342
  }, 
  {
    city: "West Nyack", 
    name: "Target Clarkstown/West Nyack T-1083", 
    country: "US", 
    lng: -73.953125, 
    lat: 41.0975341796875, 
    store_id: 8343
  }, 
  {
    city: "Memphis", 
    name: "Target Memphis T-1030", 
    country: "US", 
    lng: -89.79674530029297, 
    lat: 35.20365905761719, 
    store_id: 8344
  }, 
  {
    city: "Mercer Island", 
    name: "QFC-Mercer Island #839", 
    country: "US", 
    lng: -122.23287963867188, 
    lat: 47.585105895996094, 
    store_id: 8345
  }, 
  {
    city: "Branchburg", 
    name: "Branchburg", 
    country: "US", 
    lng: -74.68891143798828, 
    lat: 40.60542297363281, 
    store_id: 8346
  }, 
  {
    city: "Humble", 
    name: "Northpark Dr & Glade Valley Dr", 
    country: "US", 
    lng: -95.21631622314453, 
    lat: 30.069644927978516, 
    store_id: 8347
  }, 
  {
    city: "Boston", 
    name: "84 State Street", 
    country: "US", 
    lng: -71.05560302734375, 
    lat: 42.3591194152832, 
    store_id: 8349
  }, 
  {
    city: "San Jose", 
    name: "Eastridge Mall - San Jose", 
    country: "US", 
    lng: -121.8138427734375, 
    lat: 37.3251953125, 
    store_id: 8351
  }, 
  {
    city: "Oxnard", 
    name: "Channel Islands & Rose, Oxnard", 
    country: "US", 
    lng: -119.16153717041016, 
    lat: 34.17375564575195, 
    store_id: 8352
  }, 
  {
    city: "Evansville", 
    name: "Lloyd Expwy & Green River Rd", 
    country: "US", 
    lng: -87.49320983886719, 
    lat: 37.98179626464844, 
    store_id: 8354
  }, 
  {
    city: "Dearborn", 
    name: "Michigan & Oakman, Dearborn", 
    country: "US", 
    lng: -83.16883850097656, 
    lat: 42.32387161254883, 
    store_id: 8355
  }, 
  {
    city: "Brooklyn Center", 
    name: "Brooklyn Ctr-Brooklyn Blvd. & 55th", 
    country: "US", 
    lng: -93.32322692871094, 
    lat: 45.055267333984375, 
    store_id: 8356
  }, 
  {
    city: "Missoula", 
    name: "2510 Reserve Street- Missoula", 
    country: "US", 
    lng: -114.03887939453125, 
    lat: 46.84852981567383, 
    store_id: 8357
  }, 
  {
    city: "Bend", 
    name: "Cascade Village - Bend", 
    country: "US", 
    lng: -121.30120086669922, 
    lat: 44.10141372680664, 
    store_id: 8358
  }, 
  {
    city: "Houston", 
    name: "I-45 & West", 
    country: "US", 
    lng: -95.41332244873047, 
    lat: 29.92228889465332, 
    store_id: 8359
  }, 
  {
    city: "Plano", 
    name: "15th & Custer", 
    country: "US", 
    lng: -96.73330688476562, 
    lat: 33.018898010253906, 
    store_id: 8360
  }, 
  {
    city: "Humble", 
    name: "FM 1960 & Wilson Rd", 
    country: "US", 
    lng: -95.25202178955078, 
    lat: 30.00416374206543, 
    store_id: 8361
  }, 
  {
    city: "Austin", 
    name: "Great Hills Trail & Jolleyville", 
    country: "US", 
    lng: -97.7525863647461, 
    lat: 30.394826889038086, 
    store_id: 8362
  }, 
  {
    city: "Tempe", 
    name: "McClintock & Southern, Tempe", 
    country: "US", 
    lng: -111.90863037109375, 
    lat: 33.39381790161133, 
    store_id: 8363
  }, 
  {
    city: "Laveen", 
    name: "Baseline & 51st. Avenue, Laveen", 
    country: "US", 
    lng: -112.17082977294922, 
    lat: 33.377933502197266, 
    store_id: 8364
  }, 
  {
    city: "Santa Barbara", 
    name: "State & Victoria, Santa Barbara", 
    country: "US", 
    lng: -119.70575714111328, 
    lat: 34.42410659790039, 
    store_id: 8366
  }, 
  {
    city: "Waterville", 
    name: "Waterville, Maine", 
    country: "US", 
    lng: -69.64232635498047, 
    lat: 44.570640563964844, 
    store_id: 8367
  }, 
  {
    city: "Germantown", 
    name: "Saddle Creek", 
    country: "US", 
    lng: -89.81055450439453, 
    lat: 35.0940055847168, 
    store_id: 8370
  }, 
  {
    city: "Fort Worth", 
    name: "I-20 and Trail Lake", 
    country: "US", 
    lng: -97.37586975097656, 
    lat: 32.67204284667969, 
    store_id: 8371
  }, 
  {
    city: "Savannah", 
    name: "Kroger - Savannah #645", 
    country: "US", 
    lng: -81.2254867553711, 
    lat: 32.02708435058594, 
    store_id: 8372
  }, 
  {
    city: "Hinsdale", 
    name: "Hinsdale-Washington & Hinsdale", 
    country: "US", 
    lng: -87.92904663085938, 
    lat: 41.80242156982422, 
    store_id: 8373
  }, 
  {
    city: "Franklin", 
    name: "US 31 & Commerce", 
    country: "US", 
    lng: -86.06915283203125, 
    lat: 39.505348205566406, 
    store_id: 8375
  }, 
  {
    city: "Kansas City", 
    name: "MCI Kansas City Int'l Term B Upper", 
    country: "US", 
    lng: -94.7176513671875, 
    lat: 39.296539306640625, 
    store_id: 8376
  }, 
  {
    city: "Niles", 
    name: "Eastwood Mall", 
    country: "US", 
    lng: -80.75192260742188, 
    lat: 41.2144775390625, 
    store_id: 8378
  }, 
  {
    city: "Peachtree City", 
    name: "Target Peachtree City T-2129", 
    country: "US", 
    lng: -84.59065246582031, 
    lat: 33.4411506652832, 
    store_id: 8381
  }, 
  {
    city: "Chicago", 
    name: "Target Chicago T-2079", 
    country: "US", 
    lng: -87.6833724975586, 
    lat: 41.99091720581055, 
    store_id: 8383
  }, 
  {
    city: "Bowie", 
    name: "Target Lanham T-2007", 
    country: "US", 
    lng: -76.8248062133789, 
    lat: 38.95381164550781, 
    store_id: 8384
  }, 
  {
    city: "Towson", 
    name: "Towson University - Cook Library", 
    country: "US", 
    lng: -76.61840057373047, 
    lat: 39.38750076293945, 
    store_id: 8385
  }, 
  {
    city: "Fenton", 
    name: "Target Fenton T-2105", 
    country: "US", 
    lng: -83.73797607421875, 
    lat: 42.78693389892578, 
    store_id: 8386
  }, 
  {
    city: "St. Paul", 
    name: "Target St Paul/Oakdale T-2135", 
    country: "US", 
    lng: -92.94595336914062, 
    lat: 44.996849060058594, 
    store_id: 8387
  }, 
  {
    city: "Jefferson City", 
    name: "Target Jefferson City T-752", 
    country: "US", 
    lng: -92.21430206298828, 
    lat: 38.57936096191406, 
    store_id: 8388
  }, 
  {
    city: "Dardenne", 
    name: "Target O'Fallon/Dardenne T-2103", 
    country: "US", 
    lng: -90.76348114013672, 
    lat: 38.76596450805664, 
    store_id: 8389
  }, 
  {
    city: "Tunica", 
    name: "Horseshoe Casino Tunica", 
    country: "US", 
    lng: -90.33075714111328, 
    lat: 34.84713363647461, 
    store_id: 8390
  }, 
  {
    city: "Kernersville", 
    name: "Target Kernersville T-2134", 
    country: "US", 
    lng: -80.09933471679688, 
    lat: 36.10969924926758, 
    store_id: 8391
  }, 
  {
    city: "Knightdale", 
    name: "Target Knightdale T-2111", 
    country: "US", 
    lng: -78.50240325927734, 
    lat: 35.79050064086914, 
    store_id: 8392
  }, 
  {
    city: "Charlotte", 
    name: "Super Target Charlotte ST-2132", 
    country: "US", 
    lng: -80.94729614257812, 
    lat: 35.14659881591797, 
    store_id: 8393
  }, 
  {
    city: "Omaha", 
    name: "Target Omaha T-2010", 
    country: "US", 
    lng: -96.0257797241211, 
    lat: 41.315345764160156, 
    store_id: 8394
  }, 
  {
    city: "Omaha", 
    name: "Target Omaha T-2125", 
    country: "US", 
    lng: -96.02427673339844, 
    lat: 41.261322021484375, 
    store_id: 8395
  }, 
  {
    city: "Central Islip", 
    name: "Target Central Islip T-2102", 
    country: "US", 
    lng: -73.2013931274414, 
    lat: 40.772735595703125, 
    store_id: 8396
  }, 
  {
    city: "Big Flats", 
    name: "Target Big Flats T-2158", 
    country: "US", 
    lng: -76.87226104736328, 
    lat: 42.153133392333984, 
    store_id: 8398
  }, 
  {
    city: "Liberty", 
    name: "Kroger - Liberty Township #383", 
    country: "US", 
    lng: -84.4071044921875, 
    lat: 39.34410095214844, 
    store_id: 8399
  }, 
  {
    city: "Streetsboro", 
    name: "Target Streetsboro T-2157", 
    country: "US", 
    lng: -81.3537826538086, 
    lat: 41.23737335205078, 
    store_id: 8400
  }, 
  {
    city: "Sandusky", 
    name: "Target Sandusky T-2159", 
    country: "US", 
    lng: -82.67488861083984, 
    lat: 41.420570373535156, 
    store_id: 8401
  }, 
  {
    city: "Aurora", 
    name: "Target Bainbridge T-2161", 
    country: "US", 
    lng: -81.38676452636719, 
    lat: 41.35435485839844, 
    store_id: 8402
  }, 
  {
    city: "Uniontown", 
    name: "Target Uniontown T-2184", 
    country: "US", 
    lng: -79.75591278076172, 
    lat: 39.90804672241211, 
    store_id: 8403
  }, 
  {
    city: "Myrtle Beach", 
    name: "Kroger-Myrtle Beach #26", 
    country: "US", 
    lng: -78.96746063232422, 
    lat: 33.75932312011719, 
    store_id: 8404
  }, 
  {
    city: "Knoxville", 
    name: "Target Knoxville North T-2057", 
    country: "US", 
    lng: -83.88874053955078, 
    lat: 36.03684997558594, 
    store_id: 8405
  }, 
  {
    city: "Houston", 
    name: "Target Houston T-2093", 
    country: "US", 
    lng: -95.3848648071289, 
    lat: 29.77448844909668, 
    store_id: 8406
  }, 
  {
    city: "Houston", 
    name: "Target Houston/Westminister T-2139", 
    country: "US", 
    lng: -95.51775360107422, 
    lat: 29.737163543701172, 
    store_id: 8407
  }, 
  {
    city: "Plano", 
    name: "Tom Thumb - Plano #3645", 
    country: "US", 
    lng: -96.68347930908203, 
    lat: 33.01710510253906, 
    store_id: 8408
  }, 
  {
    city: "Brownsville", 
    name: "Target Brownsville T-2152", 
    country: "US", 
    lng: -97.5100326538086, 
    lat: 25.96883773803711, 
    store_id: 8409
  }, 
  {
    city: "Fredericksburg", 
    name: "Target Fredericksburg ST-2138", 
    country: "US", 
    lng: -77.51889038085938, 
    lat: 38.16913604736328, 
    store_id: 8410
  }, 
  {
    city: "Seattle", 
    name: "Russell Investments Center-Seattle", 
    country: "US", 
    lng: -122.3379135131836, 
    lat: 47.60778045654297, 
    store_id: 8411
  }, 
  {
    city: "Brentwood", 
    name: "Brentwood & White", 
    country: "US", 
    lng: -90.34807586669922, 
    lat: 38.619625091552734, 
    store_id: 8412
  }, 
  {
    city: "Manchester", 
    name: "I-24 & Hillsboro Hwy", 
    country: "US", 
    lng: -86.04914093017578, 
    lat: 35.457374572753906, 
    store_id: 8413
  }, 
  {
    city: "Murfreesboro", 
    name: "Hwy 231 & Innsbrooke", 
    country: "US", 
    lng: -86.4004135131836, 
    lat: 35.79093551635742, 
    store_id: 8414
  }, 
  {
    city: "Lady Lake", 
    name: "Target Lady Lake T-2058", 
    country: "US", 
    lng: -81.92668151855469, 
    lat: 28.92868423461914, 
    store_id: 8415
  }, 
  {
    city: "Tampa", 
    name: "8602 Hillsborough Ave", 
    country: "US", 
    lng: -82.5809326171875, 
    lat: 27.99636459350586, 
    store_id: 8416
  }, 
  {
    city: "Tarpon Springs", 
    name: "Tarpon Ave & US Hwy 19", 
    country: "US", 
    lng: -82.7412338256836, 
    lat: 28.143535614013672, 
    store_id: 8418
  }, 
  {
    city: "Jacksonville", 
    name: "Fruit Cove Rd", 
    country: "US", 
    lng: -81.62467956542969, 
    lat: 30.122743606567383, 
    store_id: 8419
  }, 
  {
    city: "Destin", 
    name: "Target Destin T-2085", 
    country: "US", 
    lng: -86.48184967041016, 
    lat: 30.389387130737305, 
    store_id: 8420
  }, 
  {
    city: "Fort Myers", 
    name: "Super Target Ft Myers ST-2059", 
    country: "US", 
    lng: -81.7904052734375, 
    lat: 26.484130859375, 
    store_id: 8421
  }, 
  {
    city: "Davie", 
    name: "Super Target Ft Lauderdale/Davie ST", 
    country: "US", 
    lng: -80.25147247314453, 
    lat: 26.04779815673828, 
    store_id: 8417
  }, 
  {
    city: "Mount Dora", 
    name: "Target Dora T-2062", 
    country: "US", 
    lng: -81.66387176513672, 
    lat: 28.822128295898438, 
    store_id: 8422
  }, 
  {
    city: "Pinellas Park", 
    name: "Target Pinellas Park T-2064", 
    country: "US", 
    lng: -82.6843032836914, 
    lat: 27.836673736572266, 
    store_id: 8423
  }, 
  {
    city: "Tallahassee", 
    name: "I-10 & Thomasville Rd", 
    country: "US", 
    lng: -84.25064849853516, 
    lat: 30.5040225982666, 
    store_id: 8425
  }, 
  {
    city: "Alpharetta", 
    name: "Kroger-Alpharetta #444", 
    country: "US", 
    lng: -84.25230407714844, 
    lat: 34.146846771240234, 
    store_id: 8426
  }, 
  {
    city: "Atlanta", 
    name: "Super Target Atlanta ST-2036", 
    country: "US", 
    lng: -84.341552734375, 
    lat: 33.9304084777832, 
    store_id: 8427
  }, 
  {
    city: "Suwanee", 
    name: "Super Target Johns Creek ST-2056", 
    country: "US", 
    lng: -84.17285919189453, 
    lat: 34.096771240234375, 
    store_id: 8428
  }, 
  {
    city: "Evans", 
    name: "Target Evans T-2027", 
    country: "US", 
    lng: -82.11849975585938, 
    lat: 33.52708053588867, 
    store_id: 8429
  }, 
  {
    city: "Broadview", 
    name: "Super Target Broadview T-2081", 
    country: "US", 
    lng: -87.8512954711914, 
    lat: 41.8547248840332, 
    store_id: 8430
  }, 
  {
    city: "Chicago", 
    name: "Renaissance Chicago O'Hare Hotel", 
    country: "US", 
    lng: -87.84101867675781, 
    lat: 41.98322677612305, 
    store_id: 8431
  }, 
  {
    city: "New Lenox", 
    name: "Target New Lenox T-2028", 
    country: "US", 
    lng: -87.9238510131836, 
    lat: 41.509830474853516, 
    store_id: 8432
  }, 
  {
    city: "Tinley Park", 
    name: "Super Target Tinley Park ST-2035", 
    country: "US", 
    lng: -87.79579162597656, 
    lat: 41.54928207397461, 
    store_id: 8433
  }, 
  {
    city: "Carmel", 
    name: "116th & Keystone", 
    country: "US", 
    lng: -86.11299896240234, 
    lat: 39.95705032348633, 
    store_id: 8435
  }, 
  {
    city: "St John", 
    name: "Target St John T-2048", 
    country: "US", 
    lng: -87.46981811523438, 
    lat: 41.43842315673828, 
    store_id: 8436
  }, 
  {
    city: "Clarksville", 
    name: "Target Clarksville T-2068", 
    country: "US", 
    lng: -85.76609802246094, 
    lat: 38.309600830078125, 
    store_id: 8437
  }, 
  {
    city: "Overland Park", 
    name: "Target Overland Park W T-2043", 
    country: "US", 
    lng: -94.71894073486328, 
    lat: 38.95049285888672, 
    store_id: 8438
  }, 
  {
    city: "Lexington", 
    name: "Boston & Man O' War", 
    country: "US", 
    lng: -84.55125427246094, 
    lat: 37.98136520385742, 
    store_id: 8439
  }, 
  {
    city: "Crestview Hills", 
    name: "Crestview Hills", 
    country: "US", 
    lng: -84.57921600341797, 
    lat: 39.024803161621094, 
    store_id: 8440
  }, 
  {
    city: "Baton Rouge", 
    name: "Super Target Baton Rouge ST-2089", 
    country: "US", 
    lng: -91.02217102050781, 
    lat: 30.441261291503906, 
    store_id: 8441
  }, 
  {
    city: "Chicopee", 
    name: "Chicopee, Memorial Dr.", 
    country: "US", 
    lng: -72.5777587890625, 
    lat: 42.17467498779297, 
    store_id: 8442
  }, 
  {
    city: "Natick", 
    name: "Natick, Sherwood Plaza", 
    country: "US", 
    lng: -71.38707733154297, 
    lat: 42.29807662963867, 
    store_id: 8443
  }, 
  {
    city: "Baltimore", 
    name: "Centerpointe", 
    country: "US", 
    lng: -76.62069702148438, 
    lat: 39.289459228515625, 
    store_id: 8444
  }, 
  {
    city: "Middletown", 
    name: "MDT B3", 
    country: "US", 
    lng: -76.75547790527344, 
    lat: 40.19588851928711, 
    store_id: 8445
  }, 
  {
    city: "Wilkes-Barre", 
    name: "Wilkes-Barre Marketplace", 
    country: "US", 
    lng: -75.8554916381836, 
    lat: 41.23765182495117, 
    store_id: 8446
  }, 
  {
    city: "Baltimore", 
    name: "Roland Park, MD", 
    country: "US", 
    lng: -76.63439178466797, 
    lat: 39.356292724609375, 
    store_id: 8448
  }, 
  {
    city: "Bluffton", 
    name: "Kroger-Bluffton #499", 
    country: "US", 
    lng: -80.86149597167969, 
    lat: 32.27058792114258, 
    store_id: 8449
  }, 
  {
    city: "Beaumont", 
    name: "Kroger-Beaumont #325", 
    country: "US", 
    lng: -94.17050170898438, 
    lat: 30.116676330566406, 
    store_id: 8451
  }, 
  {
    city: "Flower Mound", 
    name: "Tom Thumb - Flower Mound #3575", 
    country: "US", 
    lng: -97.06375885009766, 
    lat: 33.071861267089844, 
    store_id: 8452
  }, 
  {
    city: "Dallas", 
    name: "Target Dallas T-947", 
    country: "US", 
    lng: -96.8542709350586, 
    lat: 32.86233901977539, 
    store_id: 8453
  }, 
  {
    city: "Boerne", 
    name: "I-10 & Hwy 46", 
    country: "US", 
    lng: -98.73748779296875, 
    lat: 29.778396606445312, 
    store_id: 8454
  }, 
  {
    city: "Pasadena", 
    name: "Fairmont & Pansy", 
    country: "US", 
    lng: -95.16393280029297, 
    lat: 29.649301528930664, 
    store_id: 8455
  }, 
  {
    city: "Frisco", 
    name: "Tom Thumb - Frisco #2581", 
    country: "US", 
    lng: -96.80426025390625, 
    lat: 33.118927001953125, 
    store_id: 8456
  }, 
  {
    city: "Colleyville", 
    name: "Hwy 26 & Church", 
    country: "US", 
    lng: -97.15048217773438, 
    lat: 32.88948059082031, 
    store_id: 8457
  }, 
  {
    city: "College Station", 
    name: "University & Wellborn", 
    country: "US", 
    lng: -96.34514617919922, 
    lat: 30.61884117126465, 
    store_id: 8458
  }, 
  {
    city: "Nacogdoches", 
    name: "North St & West College", 
    country: "US", 
    lng: -94.65283203125, 
    lat: 31.622203826904297, 
    store_id: 8460
  }, 
  {
    city: "Palo Alto", 
    name: "361 California", 
    country: "US", 
    lng: -122.1439437866211, 
    lat: 37.42681121826172, 
    store_id: 8461
  }, 
  {
    city: "Riverbank", 
    name: "Target Modesto/Riverbank T-2096", 
    country: "US", 
    lng: -120.9435043334961, 
    lat: 37.71870040893555, 
    store_id: 8462
  }, 
  {
    city: "San Jose", 
    name: "Story & King", 
    country: "US", 
    lng: -121.84229278564453, 
    lat: 37.33938980102539, 
    store_id: 8463
  }, 
  {
    city: "Carson", 
    name: "Target Carson T-2026", 
    country: "US", 
    lng: -118.26334381103516, 
    lat: 33.843971252441406, 
    store_id: 8464
  }, 
  {
    city: "Bakersfield", 
    name: "Vons - Bakersfield #2420", 
    country: "US", 
    lng: -119.10179901123047, 
    lat: 35.34018325805664, 
    store_id: 8465
  }, 
  {
    city: "Roseville", 
    name: "Pleasant Grove & Hwy 65", 
    country: "US", 
    lng: -121.28655242919922, 
    lat: 38.781314849853516, 
    store_id: 8467
  }, 
  {
    city: "Santa Rosa", 
    name: "Safeway - Santa Rosa #713", 
    country: "US", 
    lng: -122.65291595458984, 
    lat: 38.46591567993164, 
    store_id: 8468
  }, 
  {
    city: "San Bruno", 
    name: "The Shops at Tanforan", 
    country: "US", 
    lng: -122.41730499267578, 
    lat: 37.637290954589844, 
    store_id: 8469
  }, 
  {
    city: "San Jose", 
    name: "Target San Jose T-1984", 
    country: "US", 
    lng: -121.84042358398438, 
    lat: 37.33979415893555, 
    store_id: 8470
  }, 
  {
    city: "Mill Valley", 
    name: "Safeway - Mill Valley #2718", 
    country: "US", 
    lng: -122.5150146484375, 
    lat: 37.89934539794922, 
    store_id: 8471
  }, 
  {
    city: "Denver", 
    name: "Speer & Federal - Denver", 
    country: "US", 
    lng: -105.0247802734375, 
    lat: 39.760433197021484, 
    store_id: 8472
  }, 
  {
    city: "Wheat Ridge", 
    name: "Super Target Arvada ST-2021", 
    country: "US", 
    lng: -105.11243438720703, 
    lat: 39.788211822509766, 
    store_id: 8473
  }, 
  {
    city: "Glenwood Springs", 
    name: "Target Glenwood Springs T-2029", 
    country: "US", 
    lng: -107.28752136230469, 
    lat: 39.47694396972656, 
    store_id: 8474
  }, 
  {
    city: "Lake Park", 
    name: "Target Lake Park T-1941", 
    country: "US", 
    lng: -80.08527374267578, 
    lat: 26.804840087890625, 
    store_id: 8424
  }, 
  {
    city: "Whittier", 
    name: "Target Whittier T-2019", 
    country: "US", 
    lng: -117.9965591430664, 
    lat: 33.942955017089844, 
    store_id: 8466
  }, 
  {
    city: "Lone Tree", 
    name: "Super Target Lone Tree ST-2023", 
    country: "US", 
    lng: -104.88395690917969, 
    lat: 39.53498077392578, 
    store_id: 8475
  }, 
  {
    city: "Steamboat Springs", 
    name: "City Market - Steamboat Sprngs #414", 
    country: "US", 
    lng: -106.8216781616211, 
    lat: 40.46282958984375, 
    store_id: 8476
  }, 
  {
    city: "Denver", 
    name: "SuperTarget  Denver/Stapltn ST-2052", 
    country: "US", 
    lng: -104.89553833007812, 
    lat: 39.78364562988281, 
    store_id: 8477
  }, 
  {
    city: "Stratford", 
    name: "Stratford, Barnum Avenue", 
    country: "US", 
    lng: -73.13372039794922, 
    lat: 41.198997497558594, 
    store_id: 8478
  }, 
  {
    city: "Saint Paul", 
    name: "Super Target Saint Paul ST-2046", 
    country: "US", 
    lng: -93.07845306396484, 
    lat: 44.893768310546875, 
    store_id: 8480
  }, 
  {
    city: "Roseville", 
    name: "Super Target Roseville ST-2101", 
    country: "US", 
    lng: -93.16475677490234, 
    lat: 45.00774383544922, 
    store_id: 8481
  }, 
  {
    city: "St Louis", 
    name: "Target Hampton Vlg St Louis T-1515", 
    country: "US", 
    lng: -90.2950439453125, 
    lat: 38.592430114746094, 
    store_id: 8482
  }, 
  {
    city: "Hattiesburg", 
    name: "Target Hattiesburg T-2055", 
    country: "US", 
    lng: -89.38484954833984, 
    lat: 31.321231842041016, 
    store_id: 8483
  }, 
  {
    city: "Allen Park", 
    name: "Southfield & Outer Dr, Allen Park", 
    country: "US", 
    lng: -83.21541595458984, 
    lat: 42.2783088684082, 
    store_id: 8484
  }, 
  {
    city: "Grand Rapids", 
    name: "Waterfall Shoppes - 28th & I-96", 
    country: "US", 
    lng: -85.54312133789062, 
    lat: 42.91194152832031, 
    store_id: 8485
  }, 
  {
    city: "Allen Park", 
    name: "Target Allen Park T-2033", 
    country: "US", 
    lng: -83.20697784423828, 
    lat: 42.284847259521484, 
    store_id: 8486
  }, 
  {
    city: "Raleigh", 
    name: "New Bern Commons", 
    country: "US", 
    lng: -78.56078338623047, 
    lat: 35.798744201660156, 
    store_id: 8487
  }, 
  {
    city: "Durham", 
    name: "Super Target Durham SE ST-2069", 
    country: "US", 
    lng: -78.95305633544922, 
    lat: 35.904151916503906, 
    store_id: 8488
  }, 
  {
    city: "Monroe", 
    name: "Target Monroe  T-2074", 
    country: "US", 
    lng: -80.58133697509766, 
    lat: 35.02019500732422, 
    store_id: 8489
  }, 
  {
    city: "Bedford", 
    name: "Target Bedford T-2009", 
    country: "US", 
    lng: -71.4740982055664, 
    lat: 42.94327163696289, 
    store_id: 8490
  }, 
  {
    city: "Tilton", 
    name: "Tilton, Tanger Outlet", 
    country: "US", 
    lng: -71.56348419189453, 
    lat: 43.457862854003906, 
    store_id: 8491
  }, 
  {
    city: "Hamilton", 
    name: "Hamilton Trenton", 
    country: "US", 
    lng: -74.6948013305664, 
    lat: 40.207923889160156, 
    store_id: 8492
  }, 
  {
    city: "Albuquerque", 
    name: "Target Albuquerque T-2031", 
    country: "US", 
    lng: -106.58111572265625, 
    lat: 35.17264175415039, 
    store_id: 8493
  }, 
  {
    city: "Riverhead", 
    name: "Riverhead, Tanger", 
    country: "US", 
    lng: -72.70956420898438, 
    lat: 40.91730880737305, 
    store_id: 8494
  }, 
  {
    city: "Monroe", 
    name: "Target Monroe T-2024", 
    country: "US", 
    lng: -74.15309143066406, 
    lat: 41.3175163269043, 
    store_id: 8495
  }, 
  {
    city: "Massillon", 
    name: "Target Massillon T-2044", 
    country: "US", 
    lng: -81.49697875976562, 
    lat: 40.800865173339844, 
    store_id: 8496
  }, 
  {
    city: "Reynoldsburg", 
    name: "Reynoldsburg", 
    country: "US", 
    lng: -82.78487396240234, 
    lat: 39.98673629760742, 
    store_id: 8497
  }, 
  {
    city: "Reynoldsburg", 
    name: "Target Columbus East T-2086", 
    country: "US", 
    lng: -82.78516387939453, 
    lat: 39.98723602294922, 
    store_id: 8498
  }, 
  {
    city: "North Olmsted", 
    name: "Target North Olmsted T-2016", 
    country: "US", 
    lng: -81.89521026611328, 
    lat: 41.4201774597168, 
    store_id: 8499
  }, 
  {
    city: "Midwest City", 
    name: "Target Midwest City T-2061", 
    country: "US", 
    lng: -97.39656066894531, 
    lat: 35.43739700317383, 
    store_id: 8501
  }, 
  {
    city: "Owasso", 
    name: "Target Owasso T-2095", 
    country: "US", 
    lng: -95.82489776611328, 
    lat: 36.28390121459961, 
    store_id: 8502
  }, 
  {
    city: "Salem", 
    name: "Salem Parkway- Salem", 
    country: "US", 
    lng: -123.03227233886719, 
    lat: 44.964385986328125, 
    store_id: 8503
  }, 
  {
    city: "Philadelphia", 
    name: "Target Philadelphia/BridesbrgT-2075", 
    country: "US", 
    lng: -75.08928680419922, 
    lat: 39.991031646728516, 
    store_id: 8504
  }, 
  {
    city: "Jamison", 
    name: "Giant  - Jamison #3037", 
    country: "US", 
    lng: -75.08555603027344, 
    lat: 40.258506774902344, 
    store_id: 8505
  }, 
  {
    city: "Lancaster", 
    name: "Target Lancaster T-2072", 
    country: "US", 
    lng: -76.2038803100586, 
    lat: 40.026390075683594, 
    store_id: 8506
  }, 
  {
    city: "Wayne", 
    name: "Giant 6507 @ St Davids", 
    country: "US", 
    lng: -75.37056732177734, 
    lat: 40.04014205932617, 
    store_id: 8508
  }, 
  {
    city: "Lincoln", 
    name: "Target Lincoln T-2073", 
    country: "US", 
    lng: -71.47991180419922, 
    lat: 41.935062408447266, 
    store_id: 8509
  }, 
  {
    city: "Orting", 
    name: "Safeway-Orting #1844", 
    country: "US", 
    lng: -122.20928955078125, 
    lat: 47.098899841308594, 
    store_id: 8510
  }, 
  {
    city: "Veradale", 
    name: "Fred Meyer-Veradale #351", 
    country: "US", 
    lng: -117.193603515625, 
    lat: 47.6584587097168, 
    store_id: 8511
  }, 
  {
    city: "Knoxville", 
    name: "Cumberland Ave & 21st St", 
    country: "US", 
    lng: -83.93753051757812, 
    lat: 35.95475769042969, 
    store_id: 8513
  }, 
  {
    city: "Hixson", 
    name: "Target Hixon/Chattanooga T-2053", 
    country: "US", 
    lng: -85.25038146972656, 
    lat: 35.14815139770508, 
    store_id: 8514
  }, 
  {
    city: "Hixson", 
    name: "Hwy 153 at Hamill Rd", 
    country: "US", 
    lng: -85.24011993408203, 
    lat: 35.12492752075195, 
    store_id: 8516
  }, 
  {
    city: "San Antonio", 
    name: "Target San Antonio T-1979", 
    country: "US", 
    lng: -98.64958953857422, 
    lat: 29.43854522705078, 
    store_id: 8518
  }, 
  {
    city: "Ft Worth", 
    name: "Super Target Ft Worth ST-2042", 
    country: "US", 
    lng: -97.35411071777344, 
    lat: 32.755523681640625, 
    store_id: 8521
  }, 
  {
    city: "Sandy", 
    name: "Little Cottonwood Shopping Center", 
    country: "US", 
    lng: -111.83546447753906, 
    lat: 40.58007049560547, 
    store_id: 8522
  }, 
  {
    city: "Dumfries", 
    name: "Target Dumfries T-2017", 
    country: "US", 
    lng: -77.33294677734375, 
    lat: 38.59759521484375, 
    store_id: 8523
  }, 
  {
    city: "Harrisonburg", 
    name: "Target Harrisonburg T-2071", 
    country: "US", 
    lng: -78.84490966796875, 
    lat: 38.43311309814453, 
    store_id: 8524
  }, 
  {
    city: "Kennewick", 
    name: "W. 27th Ave & Hwy 395", 
    country: "US", 
    lng: -119.175537109375, 
    lat: 46.18502426147461, 
    store_id: 8525
  }, 
  {
    city: "Dupont", 
    name: "Center Drive DuPont", 
    country: "US", 
    lng: -122.6457748413086, 
    lat: 47.09282684326172, 
    store_id: 8526
  }, 
  {
    city: "Stanwood", 
    name: "Stanwood Town Center", 
    country: "US", 
    lng: -122.35875701904297, 
    lat: 48.2402458190918, 
    store_id: 8527
  }, 
  {
    city: "Cheney", 
    name: "Cheney Plaza", 
    country: "US", 
    lng: -117.56681060791016, 
    lat: 47.50705337524414, 
    store_id: 8528
  }, 
  {
    city: "Kent", 
    name: "SE 256th Street-Kent", 
    country: "US", 
    lng: -122.20446014404297, 
    lat: 47.37274169921875, 
    store_id: 8529
  }, 
  {
    city: "Redmond", 
    name: "Avondale & 116th - Redmond, WA", 
    country: "US", 
    lng: -122.093505859375, 
    lat: 47.70280838012695, 
    store_id: 8530
  }, 
  {
    city: "Houston", 
    name: "Target Willowbrook T-2066", 
    country: "US", 
    lng: -95.53082275390625, 
    lat: 29.9678897857666, 
    store_id: 8520
  }, 
  {
    city: "Seattle", 
    name: "QFC - Northgate #866", 
    country: "US", 
    lng: -122.3174819946289, 
    lat: 47.709136962890625, 
    store_id: 8532
  }, 
  {
    city: "Lexington", 
    name: "Univ. of Kentucky WT Young Library", 
    country: "US", 
    lng: -84.50257873535156, 
    lat: 38.03218078613281, 
    store_id: 8535
  }, 
  {
    city: "Lexington", 
    name: "Virginia & Broadway", 
    country: "US", 
    lng: -84.51431274414062, 
    lat: 38.03913879394531, 
    store_id: 8536
  }, 
  {
    city: "Louisville", 
    name: "Taylorsville & I-265", 
    country: "US", 
    lng: -85.51925659179688, 
    lat: 38.187904357910156, 
    store_id: 8537
  }, 
  {
    city: "Nicholasville", 
    name: "Commerce & Nicholasville", 
    country: "US", 
    lng: -84.54862213134766, 
    lat: 37.938846588134766, 
    store_id: 8538
  }, 
  {
    city: "Williams", 
    name: "Safeway - Williams #1639", 
    country: "US", 
    lng: -112.19317626953125, 
    lat: 35.24876022338867, 
    store_id: 8539
  }, 
  {
    city: "Phoenix", 
    name: "91st. Avenue & Thomas, Phoenix", 
    country: "US", 
    lng: -112.25462341308594, 
    lat: 33.47874069213867, 
    store_id: 8541
  }, 
  {
    city: "Tucson", 
    name: "First & Wetmore, Tucson", 
    country: "US", 
    lng: -110.9656982421875, 
    lat: 32.2869987487793, 
    store_id: 8542
  }, 
  {
    city: "Glendale", 
    name: "ASU West Campus - Fletcher Library", 
    country: "US", 
    lng: -112.16136169433594, 
    lat: 33.6104621887207, 
    store_id: 8543
  }, 
  {
    city: "Lakeland", 
    name: "Harden Rd & Polk County Blvd", 
    country: "US", 
    lng: -81.97567749023438, 
    lat: 28.0028018951416, 
    store_id: 8544
  }, 
  {
    city: "Downey", 
    name: "Lakewood & Stewart and Gray, Downey", 
    country: "US", 
    lng: -118.12932586669922, 
    lat: 33.92775344848633, 
    store_id: 8545
  }, 
  {
    city: "Eau Claire", 
    name: "Clairmont & Stein", 
    country: "US", 
    lng: -91.51319122314453, 
    lat: 44.79241180419922, 
    store_id: 8546
  }, 
  {
    city: "Boise", 
    name: "State and Veterans Parkway-Boise", 
    country: "US", 
    lng: -116.2359390258789, 
    lat: 43.64005661010742, 
    store_id: 8548
  }, 
  {
    city: "Streamwood", 
    name: "Route 59 & Irving Park", 
    country: "US", 
    lng: -88.20232391357422, 
    lat: 42.0201530456543, 
    store_id: 8549
  }, 
  {
    city: "Hainesville", 
    name: "Hainesville-Rte 120 & Hainesville", 
    country: "US", 
    lng: -88.06641387939453, 
    lat: 42.34522247314453, 
    store_id: 8550
  }, 
  {
    city: "Dekalb", 
    name: "Route 38 & Annie Glidden", 
    country: "US", 
    lng: -88.77218627929688, 
    lat: 41.93174362182617, 
    store_id: 8551
  }, 
  {
    city: "Lockport", 
    name: "Jewel-Osco Homer Glen #2503", 
    country: "US", 
    lng: -87.9316177368164, 
    lat: 41.63142395019531, 
    store_id: 8553
  }, 
  {
    city: "Hanover Park", 
    name: "Lake & Barrington", 
    country: "US", 
    lng: -88.14926147460938, 
    lat: 41.98936080932617, 
    store_id: 8555
  }, 
  {
    city: "Peru", 
    name: "Target Peru T-929", 
    country: "US", 
    lng: -89.12902069091797, 
    lat: 41.362091064453125, 
    store_id: 8556
  }, 
  {
    city: "Evansville", 
    name: "University of South IN/Evansville", 
    country: "US", 
    lng: -87.67552185058594, 
    lat: 37.96127700805664, 
    store_id: 8557
  }, 
  {
    city: "East Longmeadow", 
    name: "E. Longmeadow Center", 
    country: "US", 
    lng: -72.51394653320312, 
    lat: 42.06570816040039, 
    store_id: 8558
  }, 
  {
    city: "Boston", 
    name: "Northeastern U - Curry Student Ctr", 
    country: "US", 
    lng: -71.0872802734375, 
    lat: 42.339012145996094, 
    store_id: 8559
  }, 
  {
    city: "Boston", 
    name: "Westin Boston Waterfront", 
    country: "US", 
    lng: -71.04367065429688, 
    lat: 42.34709930419922, 
    store_id: 8560
  }, 
  {
    city: "North Bend", 
    name: "Safeway - North Bend #1557", 
    country: "US", 
    lng: -124.23542785644531, 
    lat: 43.4066047668457, 
    store_id: 8561
  }, 
  {
    city: "Portland", 
    name: "Safeway - Portland #509", 
    country: "US", 
    lng: -122.66048431396484, 
    lat: 45.565940856933594, 
    store_id: 8562
  }, 
  {
    city: "Portland", 
    name: "Fred Meyer - Peninsula #255", 
    country: "US", 
    lng: -122.7381362915039, 
    lat: 45.58642578125, 
    store_id: 8563
  }, 
  {
    city: "Portland", 
    name: "Safeway - Portland #1612", 
    country: "US", 
    lng: -122.654541015625, 
    lat: 45.53476333618164, 
    store_id: 8564
  }, 
  {
    city: "Medford", 
    name: "Fred Meyer-Medford #195", 
    country: "US", 
    lng: -122.87151336669922, 
    lat: 42.352149963378906, 
    store_id: 8565
  }, 
  {
    city: "Lincoln City", 
    name: "Safeway - Lincoln City #415", 
    country: "US", 
    lng: -124.00607299804688, 
    lat: 44.99721908569336, 
    store_id: 8566
  }, 
  {
    city: "Portland", 
    name: "Safeway - Portland #382", 
    country: "US", 
    lng: -122.53881072998047, 
    lat: 45.496246337890625, 
    store_id: 8567
  }, 
  {
    city: "Rochester Hills", 
    name: "Rochester Rd. & Tienken", 
    country: "US", 
    lng: -83.1353988647461, 
    lat: 42.69731521606445, 
    store_id: 8568
  }, 
  {
    city: "Westland", 
    name: "Target Westland T-281", 
    country: "US", 
    lng: -83.3907470703125, 
    lat: 42.33690643310547, 
    store_id: 8569
  }, 
  {
    city: "Detroit", 
    name: "Woodward & Mack", 
    country: "US", 
    lng: -83.0578384399414, 
    lat: 42.347755432128906, 
    store_id: 8570
  }, 
  {
    city: "Westland", 
    name: "Central City Pkwy & Warren Rd", 
    country: "US", 
    lng: -83.40092468261719, 
    lat: 42.33777618408203, 
    store_id: 8572
  }, 
  {
    city: "Chapel Hill", 
    name: "Harris Teeter-Chapel Hill #137", 
    country: "US", 
    lng: -79.086669921875, 
    lat: 35.83089065551758, 
    store_id: 8574
  }, 
  {
    city: "Concord", 
    name: "Concord Mills", 
    country: "US", 
    lng: -80.72058868408203, 
    lat: 35.36884689331055, 
    store_id: 8576
  }, 
  {
    city: "Concord", 
    name: "Speedway Blvd.", 
    country: "US", 
    lng: -80.7097396850586, 
    lat: 35.366512298583984, 
    store_id: 8577
  }, 
  {
    city: "Cary", 
    name: "Cary Towne Center", 
    country: "US", 
    lng: -78.7625961303711, 
    lat: 35.771484375, 
    store_id: 8578
  }, 
  {
    city: "Las Vegas", 
    name: "UNLV - Student Union", 
    country: "US", 
    lng: -115.13795471191406, 
    lat: 36.1076545715332, 
    store_id: 8580
  }, 
  {
    city: "Reno", 
    name: "McCarran & Hwy 395 - Reno", 
    country: "US", 
    lng: -119.78235626220703, 
    lat: 39.55698013305664, 
    store_id: 8581
  }, 
  {
    city: "Fallon", 
    name: "Safeway - Fallon #1517", 
    country: "US", 
    lng: -118.78714752197266, 
    lat: 39.476890563964844, 
    store_id: 8584
  }, 
  {
    city: "Plattsburgh", 
    name: "Plattsburgh, Cornelia St.", 
    country: "US", 
    lng: -73.48340606689453, 
    lat: 44.696746826171875, 
    store_id: 8585
  }, 
  {
    city: "Fredonia", 
    name: "SUNY/Fredonia-Cranston Hall", 
    country: "US", 
    lng: -79.33924102783203, 
    lat: 42.44868087768555, 
    store_id: 8586
  }, 
  {
    city: "Bayport", 
    name: "Bayport", 
    country: "US", 
    lng: -73.04796600341797, 
    lat: 40.74853515625, 
    store_id: 8587
  }, 
  {
    city: "New York", 
    name: "35th & 5th", 
    country: "US", 
    lng: -73.98382568359375, 
    lat: 40.74913787841797, 
    store_id: 8588
  }, 
  {
    city: "Rochester", 
    name: "The Marketplace Mall", 
    country: "US", 
    lng: -77.63365173339844, 
    lat: 43.0836181640625, 
    store_id: 8589
  }, 
  {
    city: "Kingston", 
    name: "Kingston, Massa Drive", 
    country: "US", 
    lng: -73.98899841308594, 
    lat: 41.96268844604492, 
    store_id: 8590
  }, 
  {
    city: "Morris Plains", 
    name: "Stop & Shop-Morris Plains # 893", 
    country: "US", 
    lng: -74.46344757080078, 
    lat: 40.842559814453125, 
    store_id: 8579
  }, 
  {
    city: "Columbus", 
    name: "Olentangy River Road", 
    country: "US", 
    lng: -83.0253677368164, 
    lat: 39.992523193359375, 
    store_id: 8591
  }, 
  {
    city: "Canal Winchester", 
    name: "Canal Winchester", 
    country: "US", 
    lng: -82.8274917602539, 
    lat: 39.85543441772461, 
    store_id: 8592
  }, 
  {
    city: "Fairborn", 
    name: "Colonel Glenn & Zink", 
    country: "US", 
    lng: -84.0702133178711, 
    lat: 39.776695251464844, 
    store_id: 8593
  }, 
  {
    city: "Worthington", 
    name: "Worthington, North High Street", 
    country: "US", 
    lng: -83.01585388183594, 
    lat: 40.107601165771484, 
    store_id: 8594
  }, 
  {
    city: "Shawnee", 
    name: "I-40 & Kickapoo", 
    country: "US", 
    lng: -96.9293441772461, 
    lat: 35.38018035888672, 
    store_id: 8595
  }, 
  {
    city: "Fort Worth", 
    name: "White Settlement & 820", 
    country: "US", 
    lng: -97.47955322265625, 
    lat: 32.75954055786133, 
    store_id: 8596
  }, 
  {
    city: "Roanoke", 
    name: "Valley View", 
    country: "US", 
    lng: -79.95850372314453, 
    lat: 37.302310943603516, 
    store_id: 8597
  }, 
  {
    city: "South Burlington", 
    name: "Williston Rd, S. Burlington.", 
    country: "US", 
    lng: -73.17804718017578, 
    lat: 44.468841552734375, 
    store_id: 8598
  }, 
  {
    city: "Kent", 
    name: "132nd Ave SE & SE Kent Kangley Rd", 
    country: "US", 
    lng: -122.16587829589844, 
    lat: 47.35775375366211, 
    store_id: 8599
  }, 
  {
    city: "Pasco", 
    name: "North Road 68 & Wrigley Dr", 
    country: "US", 
    lng: -119.18551635742188, 
    lat: 46.273834228515625, 
    store_id: 8600
  }, 
  {
    city: "Alabaster", 
    name: "Hwy 119 & Kent Dairy", 
    country: "US", 
    lng: -86.82601165771484, 
    lat: 33.214927673339844, 
    store_id: 8602
  }, 
  {
    city: "Birmingham", 
    name: "State Farm & Lakeshore", 
    country: "US", 
    lng: -86.82691955566406, 
    lat: 33.446327209472656, 
    store_id: 8603
  }, 
  {
    city: "Montgomery", 
    name: "Taylor & Vaughn", 
    country: "US", 
    lng: -86.18226623535156, 
    lat: 32.338356018066406, 
    store_id: 8604
  }, 
  {
    city: "Rogers", 
    name: "I-540 & Pleasant Grove", 
    country: "US", 
    lng: -94.15343475341797, 
    lat: 36.28369903564453, 
    store_id: 8606
  }, 
  {
    city: "Jupiter", 
    name: "Indiantown & 67th Rd", 
    country: "US", 
    lng: -80.13799285888672, 
    lat: 26.934085845947266, 
    store_id: 8608
  }, 
  {
    city: "Boca Raton", 
    name: "Clint Moore Rd & US Hwy 441", 
    country: "US", 
    lng: -80.2004165649414, 
    lat: 26.40825843811035, 
    store_id: 8609
  }, 
  {
    city: "Tampa", 
    name: "Race Track & Nine Eagles", 
    country: "US", 
    lng: -82.63325500488281, 
    lat: 28.06930923461914, 
    store_id: 8610
  }, 
  {
    city: "Pensacola", 
    name: "Cordova Mall - First Level", 
    country: "US", 
    lng: -87.20720672607422, 
    lat: 30.474931716918945, 
    store_id: 8611
  }, 
  {
    city: "Orange Park", 
    name: "Blanding & Bolton", 
    country: "US", 
    lng: -81.75279998779297, 
    lat: 30.150066375732422, 
    store_id: 8612
  }, 
  {
    city: "Dacula", 
    name: "Kroger-Dacula #457", 
    country: "US", 
    lng: -83.9295425415039, 
    lat: 34.04961013793945, 
    store_id: 8613
  }, 
  {
    city: "Evans", 
    name: "Kroger - Evans #414", 
    country: "US", 
    lng: -82.13227844238281, 
    lat: 33.541481018066406, 
    store_id: 8615
  }, 
  {
    city: "Lawrenceville", 
    name: "Hwy 120 & Hwy 316", 
    country: "US", 
    lng: -84.01905822753906, 
    lat: 33.967079162597656, 
    store_id: 8616
  }, 
  {
    city: "Statesboro", 
    name: "Georgia Southern University", 
    country: "US", 
    lng: -81.81028747558594, 
    lat: 32.47519302368164, 
    store_id: 8618
  }, 
  {
    city: "Jasper", 
    name: "Kroger-Jasper #620", 
    country: "US", 
    lng: -84.4614486694336, 
    lat: 34.466026306152344, 
    store_id: 8619
  }, 
  {
    city: "McDonough", 
    name: "I-75 & Hwy 20", 
    country: "US", 
    lng: -84.18659973144531, 
    lat: 33.42192840576172, 
    store_id: 8620
  }, 
  {
    city: "Cloverdale", 
    name: "Cloverdale & Hwy 101", 
    country: "US", 
    lng: -123.01116180419922, 
    lat: 38.783565521240234, 
    store_id: 8621
  }, 
  {
    city: "Coachella", 
    name: "Avenue 48 & Jackson, Coachella", 
    country: "US", 
    lng: -116.21551513671875, 
    lat: 33.70004653930664, 
    store_id: 8622
  }, 
  {
    city: "King City", 
    name: "Broadway & Hwy 101", 
    country: "US", 
    lng: -121.13697052001953, 
    lat: 36.20356369018555, 
    store_id: 8623
  }, 
  {
    city: "Costa Mesa", 
    name: "Newport & Del Mar", 
    country: "US", 
    lng: -117.89714050292969, 
    lat: 33.66242980957031, 
    store_id: 8624
  }, 
  {
    city: "Daly City", 
    name: "John Daly & Westlake Center", 
    country: "US", 
    lng: -122.48321533203125, 
    lat: 37.70076370239258, 
    store_id: 8626
  }, 
  {
    city: "Vallejo", 
    name: "Safeway - Vallejo #989", 
    country: "US", 
    lng: -122.22711181640625, 
    lat: 38.12553024291992, 
    store_id: 8627
  }, 
  {
    city: "San Ramon", 
    name: "Crow Canyon Place & I680", 
    country: "US", 
    lng: -121.97269439697266, 
    lat: 37.77760696411133, 
    store_id: 8628
  }, 
  {
    city: "San Mateo", 
    name: "Target San Mateo T-1122", 
    country: "US", 
    lng: -122.28368377685547, 
    lat: 37.559085845947266, 
    store_id: 8629
  }, 
  {
    city: "Ojai", 
    name: "Ventura & Villanova, Ojai", 
    country: "US", 
    lng: -119.28854370117188, 
    lat: 34.42499923706055, 
    store_id: 8630
  }, 
  {
    city: "Benicia", 
    name: "Safeway - Benicia #774", 
    country: "US", 
    lng: -122.15557098388672, 
    lat: 38.05459213256836, 
    store_id: 8631
  }, 
  {
    city: "Salinas", 
    name: "Boronda & Sanborn", 
    country: "US", 
    lng: -121.59600830078125, 
    lat: 36.69449996948242, 
    store_id: 8632
  }, 
  {
    city: "Paso Robles", 
    name: "Target Paso Robles T-1120", 
    country: "US", 
    lng: -120.69699096679688, 
    lat: 35.584285736083984, 
    store_id: 8633
  }, 
  {
    city: "Yucaipa", 
    name: "Yucaipa & Hampton, Yucaipa", 
    country: "US", 
    lng: -117.11927032470703, 
    lat: 34.02841567993164, 
    store_id: 8634
  }, 
  {
    city: "Cupertino", 
    name: "Homestead & Foothill", 
    country: "US", 
    lng: -122.06670379638672, 
    lat: 37.3371696472168, 
    store_id: 8636
  }, 
  {
    city: "San Pedro", 
    name: "Vons - San Pedro #2283", 
    country: "US", 
    lng: -118.28790283203125, 
    lat: 33.73649978637695, 
    store_id: 8637
  }, 
  {
    city: "Rancho Cucamonga", 
    name: "Day Creek & Foothill", 
    country: "US", 
    lng: -117.5364990234375, 
    lat: 34.107704162597656, 
    store_id: 8638
  }, 
  {
    city: "San Jose", 
    name: "Meridian & Lenn", 
    country: "US", 
    lng: -121.91323852539062, 
    lat: 37.29277038574219, 
    store_id: 8640
  }, 
  {
    city: "Colton", 
    name: "Washington & I-215", 
    country: "US", 
    lng: -117.30535125732422, 
    lat: 34.04820251464844, 
    store_id: 8642
  }, 
  {
    city: "Fremont", 
    name: "Safeway - Fremont #993", 
    country: "US", 
    lng: -121.95762634277344, 
    lat: 37.532466888427734, 
    store_id: 8643
  }, 
  {
    city: "San Francisco", 
    name: "Bay & Taylor", 
    country: "US", 
    lng: -122.41511535644531, 
    lat: 37.80534362792969, 
    store_id: 8644
  }, 
  {
    city: "Hollister", 
    name: "Safeway - Hollister #1757", 
    country: "US", 
    lng: -121.39144134521484, 
    lat: 36.838592529296875, 
    store_id: 8647
  }, 
  {
    city: "San Diego", 
    name: "Vons - San Diego #2040", 
    country: "US", 
    lng: -117.17903137207031, 
    lat: 32.81835174560547, 
    store_id: 8648
  }, 
  {
    city: "Desert Hot Springs", 
    name: "Palm Dr. & Two Bunch Palms", 
    country: "US", 
    lng: -116.50173950195312, 
    lat: 33.945194244384766, 
    store_id: 8651
  }, 
  {
    city: "El Cajon", 
    name: "Vons - El Cajon #3044", 
    country: "US", 
    lng: -116.95683288574219, 
    lat: 32.77878952026367, 
    store_id: 8639
  }, 
  {
    city: "Bonita", 
    name: "Vons - Bonita #2130", 
    country: "US", 
    lng: -117.03395080566406, 
    lat: 32.66050720214844, 
    store_id: 8649
  }, 
  {
    city: "San Diego", 
    name: "28th & National, San Diego", 
    country: "US", 
    lng: -117.13349151611328, 
    lat: 32.69618225097656, 
    store_id: 8652
  }, 
  {
    city: "Sacramento", 
    name: "65th & Broadway", 
    country: "US", 
    lng: -121.42816925048828, 
    lat: 38.54710388183594, 
    store_id: 8653
  }, 
  {
    city: "Aurora", 
    name: "Tower & I-70- Aurora", 
    country: "US", 
    lng: -104.77461242675781, 
    lat: 39.76416015625, 
    store_id: 8655
  }, 
  {
    city: "Branford", 
    name: "Travel Ctr-New Haven", 
    country: "US", 
    lng: -72.75927734375, 
    lat: 41.29729080200195, 
    store_id: 8657
  }, 
  {
    city: "Pleasanton", 
    name: "Safeway-Pleasanton #1502", 
    country: "US", 
    lng: -121.87471008300781, 
    lat: 37.67510986328125, 
    store_id: 8658
  }, 
  {
    city: "Lakewood", 
    name: "Safeway-Lakewood #41", 
    country: "US", 
    lng: -105.1456527709961, 
    lat: 39.698307037353516, 
    store_id: 8659
  }, 
  {
    city: "Lake Zurich", 
    name: "Rand Rd & Rt 22", 
    country: "US", 
    lng: -88.11042785644531, 
    lat: 42.19464874267578, 
    store_id: 8660
  }, 
  {
    city: "Salem", 
    name: "Lancaster & Silverton - Salem", 
    country: "US", 
    lng: -122.98316192626953, 
    lat: 44.96739196777344, 
    store_id: 8661
  }, 
  {
    city: "Burlington", 
    name: "I5 & Cook", 
    country: "US", 
    lng: -122.33683776855469, 
    lat: 48.50531768798828, 
    store_id: 8662
  }, 
  {
    city: "Boulder", 
    name: "28th & Pearl - Boulder", 
    country: "US", 
    lng: -105.25877380371094, 
    lat: 40.0219612121582, 
    store_id: 8665
  }, 
  {
    city: "Redondo Beach", 
    name: "Pacific Coast Hwy & Diamond St.", 
    country: "US", 
    lng: -118.38705444335938, 
    lat: 33.84536361694336, 
    store_id: 8666
  }, 
  {
    city: "San Diego", 
    name: "Park in the Valley - San Diego", 
    country: "US", 
    lng: -117.15007781982422, 
    lat: 32.77091598510742, 
    store_id: 8667
  }, 
  {
    city: "Los Angeles", 
    name: "Wilshire & Highland", 
    country: "US", 
    lng: -118.33889770507812, 
    lat: 34.06190872192383, 
    store_id: 8668
  }, 
  {
    city: "Scottsdale", 
    name: "Hilton Village", 
    country: "US", 
    lng: -111.92464447021484, 
    lat: 33.52627182006836, 
    store_id: 8669
  }, 
  {
    city: "Scottsdale", 
    name: "Scottsdale & Indian Bend", 
    country: "US", 
    lng: -111.9250717163086, 
    lat: 33.53928756713867, 
    store_id: 8671
  }, 
  {
    city: "Thousand Oaks", 
    name: "Westlake & Thousand Oaks", 
    country: "US", 
    lng: -118.82431030273438, 
    lat: 34.16050720214844, 
    store_id: 8672
  }, 
  {
    city: "Fort Collins", 
    name: "Harmony & JFK", 
    country: "US", 
    lng: -105.07372283935547, 
    lat: 40.52390670776367, 
    store_id: 8673
  }, 
  {
    city: "Yorba Linda", 
    name: "Yorba Linda & Village Center Dr", 
    country: "US", 
    lng: -117.7762451171875, 
    lat: 33.89116668701172, 
    store_id: 8674
  }, 
  {
    city: "Bakersfield", 
    name: "The Marketplace-Bakersfield", 
    country: "US", 
    lng: -119.10362243652344, 
    lat: 35.340396881103516, 
    store_id: 8675
  }, 
  {
    city: "Tempe", 
    name: "Arizona Mills", 
    country: "US", 
    lng: -111.96451568603516, 
    lat: 33.38097381591797, 
    store_id: 8676
  }, 
  {
    city: "Kingstowne", 
    name: "Kingstowne", 
    country: "US", 
    lng: -77.13726806640625, 
    lat: 38.7734260559082, 
    store_id: 8678
  }, 
  {
    city: "Marina", 
    name: "Del Monte & Reservation", 
    country: "US", 
    lng: -121.800048828125, 
    lat: 36.686767578125, 
    store_id: 8679
  }, 
  {
    city: "Annandale", 
    name: "Bradlick Shopping Center", 
    country: "US", 
    lng: -77.18400573730469, 
    lat: 38.812278747558594, 
    store_id: 8680
  }, 
  {
    city: "Walla Walla", 
    name: "28 E. Main", 
    country: "US", 
    lng: -118.33807373046875, 
    lat: 46.0670166015625, 
    store_id: 8684
  }, 
  {
    city: "Seattle", 
    name: "4th & Seneca", 
    country: "US", 
    lng: -122.3342514038086, 
    lat: 47.60734176635742, 
    store_id: 8686
  }, 
  {
    city: "Seattle", 
    name: "Belltown", 
    country: "US", 
    lng: -122.3473129272461, 
    lat: 47.61404800415039, 
    store_id: 8689
  }, 
  {
    city: "Palo Alto", 
    name: "Colorado & Middlefield - Palo Alto", 
    country: "US", 
    lng: -122.128662109375, 
    lat: 37.43320083618164, 
    store_id: 8690
  }, 
  {
    city: "Lynnwood", 
    name: "196th & 40th", 
    country: "US", 
    lng: -122.28804016113281, 
    lat: 47.82057571411133, 
    store_id: 8691
  }, 
  {
    city: "New York", 
    name: "Chambers and West Broadway", 
    country: "US", 
    lng: -74.009033203125, 
    lat: 40.71553421020508, 
    store_id: 8692
  }, 
  {
    city: "Salt Lake City", 
    name: "700 E & 400 S - Salt Lake City", 
    country: "US", 
    lng: -111.87200927734375, 
    lat: 40.76091384887695, 
    store_id: 8693
  }, 
  {
    city: "Mesa", 
    name: "Val Vista & Baseline, Mesa", 
    country: "US", 
    lng: -111.75342559814453, 
    lat: 33.38077926635742, 
    store_id: 8694
  }, 
  {
    city: "Brea", 
    name: "Brea & Imperial", 
    country: "US", 
    lng: -117.90068054199219, 
    lat: 33.91702651977539, 
    store_id: 8695
  }, 
  {
    city: "Orlando", 
    name: "MCO - Orlando Main Term Atrium", 
    country: "US", 
    lng: -81.31129455566406, 
    lat: 28.42974853515625, 
    store_id: 8696
  }, 
  {
    city: "West Palm Beach", 
    name: "PBI - West Palm Conc C", 
    country: "US", 
    lng: -80.0925521850586, 
    lat: 26.68728256225586, 
    store_id: 8699
  }, 
  {
    city: "Alpharetta", 
    name: "Alpharetta Barnes & Noble", 
    country: "US", 
    lng: -84.30370330810547, 
    lat: 34.03923416137695, 
    store_id: 8702
  }, 
  {
    city: "South Pasadena", 
    name: "Huntington & Fremont, S. Pasadena", 
    country: "US", 
    lng: -118.15287017822266, 
    lat: 34.10429382324219, 
    store_id: 8704
  }, 
  {
    city: "Tigard", 
    name: "Safeway-Tigard (King City) #1478", 
    country: "US", 
    lng: -122.79309844970703, 
    lat: 45.40734100341797, 
    store_id: 8705
  }, 
  {
    city: "Visalia", 
    name: "Goshen & Akers, Visalia", 
    country: "US", 
    lng: -119.34761047363281, 
    lat: 36.34100341796875, 
    store_id: 8706
  }, 
  {
    city: "Chicago", 
    name: "ORD OHare Terminal 1, Baggage Claim", 
    country: "US", 
    lng: -87.90626525878906, 
    lat: 41.97911071777344, 
    store_id: 8707
  }, 
  {
    city: "Chicago", 
    name: "ORD OHare Terminal 3, Baggage Claim", 
    country: "US", 
    lng: -87.90103912353516, 
    lat: 41.97611999511719, 
    store_id: 8708
  }, 
  {
    city: "Chicago", 
    name: "Clark & Randolph - CT&T Building", 
    country: "US", 
    lng: -87.6307601928711, 
    lat: 41.88511657714844, 
    store_id: 8710
  }, 
  {
    city: "Happy Valley", 
    name: "Clackamas Crossing", 
    country: "US", 
    lng: -122.57874298095703, 
    lat: 45.45387649536133, 
    store_id: 8711
  }, 
  {
    city: "Brookline", 
    name: "Brookline Village", 
    country: "US", 
    lng: -71.11872100830078, 
    lat: 42.333717346191406, 
    store_id: 8712
  }, 
  {
    city: "Athens", 
    name: "Athens", 
    country: "US", 
    lng: -83.37520599365234, 
    lat: 33.95771026611328, 
    store_id: 8714
  }, 
  {
    city: "Gainesville", 
    name: "Union Street Station", 
    country: "US", 
    lng: -82.32373809814453, 
    lat: 29.64979362487793, 
    store_id: 8715
  }, 
  {
    city: "Blasdell", 
    name: "Hamburg", 
    country: "US", 
    lng: -78.81250762939453, 
    lat: 42.789451599121094, 
    store_id: 8716
  }, 
  {
    city: "Newport Beach", 
    name: "Jamboree & Birch", 
    country: "US", 
    lng: -117.85699462890625, 
    lat: 33.66402053833008, 
    store_id: 8717
  }, 
  {
    city: "Atlanta", 
    name: "Lenox Kiosk", 
    country: "US", 
    lng: -84.36322021484375, 
    lat: 33.84806442260742, 
    store_id: 8718
  }, 
  {
    city: "Marina Del Rey", 
    name: "Washington & Walnut Ave", 
    country: "US", 
    lng: -118.44651794433594, 
    lat: 33.9913444519043, 
    store_id: 8720
  }, 
  {
    city: "San Lorenzo", 
    name: "Hesperian & Leweling", 
    country: "US", 
    lng: -122.12980651855469, 
    lat: 37.68693542480469, 
    store_id: 8721
  }, 
  {
    city: "Indianapolis", 
    name: "Broad Ripple", 
    country: "US", 
    lng: -86.14314270019531, 
    lat: 39.869850158691406, 
    store_id: 8722
  }, 
  {
    city: "Dallas", 
    name: "Cole & Lemmon", 
    country: "US", 
    lng: -96.79808044433594, 
    lat: 32.808345794677734, 
    store_id: 8723
  }, 
  {
    city: "Lombard", 
    name: "Roosevelt & Lincoln", 
    country: "US", 
    lng: -88.0196762084961, 
    lat: 41.859737396240234, 
    store_id: 8724
  }, 
  {
    city: "Baton Rouge", 
    name: "College & Bennington", 
    country: "US", 
    lng: -91.1403579711914, 
    lat: 30.42037010192871, 
    store_id: 8725
  }, 
  {
    city: "Seattle", 
    name: "MLK Way", 
    country: "US", 
    lng: -122.29674530029297, 
    lat: 47.57696533203125, 
    store_id: 8726
  }, 
  {
    city: "Vancouver", 
    name: "Hazel Dell", 
    country: "US", 
    lng: -122.66248321533203, 
    lat: 45.6778678894043, 
    store_id: 8728
  }, 
  {
    city: "Hyattsville", 
    name: "Shoppes at Metro", 
    country: "US", 
    lng: -76.95368957519531, 
    lat: 38.96615982055664, 
    store_id: 8730
  }, 
  {
    city: "Phoenix", 
    name: "40th Street & Greenway, Phoenix", 
    country: "US", 
    lng: -111.9957504272461, 
    lat: 33.626686096191406, 
    store_id: 8731
  }, 
  {
    city: "Merriam", 
    name: "Hen House Market-Merriam #31", 
    country: "US", 
    lng: -94.68893432617188, 
    lat: 39.02490234375, 
    store_id: 8732
  }, 
  {
    city: "Woodbridge", 
    name: "Woodbridge Mall", 
    country: "US", 
    lng: -74.29896545410156, 
    lat: 40.55671310424805, 
    store_id: 8734
  }, 
  {
    city: "New York", 
    name: "59th & Columbus", 
    country: "US", 
    lng: -73.98490905761719, 
    lat: 40.769447326660156, 
    store_id: 8735
  }, 
  {
    city: "Branford", 
    name: "Branford", 
    country: "US", 
    lng: -72.8275375366211, 
    lat: 41.277488708496094, 
    store_id: 8737
  }, 
  {
    city: "Livermore", 
    name: "N. Livermore & Portola", 
    country: "US", 
    lng: -121.77359771728516, 
    lat: 37.691444396972656, 
    store_id: 8738
  }, 
  {
    city: "Rolling Hills Estates", 
    name: "Silver Spur & Hawthorne", 
    country: "US", 
    lng: -118.37602996826172, 
    lat: 33.774818420410156, 
    store_id: 8739
  }, 
  {
    city: "San Diego", 
    name: "Carmel Mountain", 
    country: "US", 
    lng: -117.07524871826172, 
    lat: 32.98143768310547, 
    store_id: 8740
  }, 
  {
    city: "Torrance", 
    name: "Torrance Crossroads", 
    country: "US", 
    lng: -118.3284683227539, 
    lat: 33.804630279541016, 
    store_id: 8741
  }, 
  {
    city: "La Jolla", 
    name: "La Jolla", 
    country: "US", 
    lng: -117.2732925415039, 
    lat: 32.84877395629883, 
    store_id: 8742
  }, 
  {
    city: "Portland", 
    name: "15th & Broadway", 
    country: "US", 
    lng: -122.65015411376953, 
    lat: 45.5349006652832, 
    store_id: 8743
  }, 
  {
    city: "Salem", 
    name: "Salem, OR", 
    country: "US", 
    lng: -123.03846740722656, 
    lat: 44.94131851196289, 
    store_id: 8744
  }, 
  {
    city: "Portland", 
    name: "4th & Oak", 
    country: "US", 
    lng: -122.67529296875, 
    lat: 45.521148681640625, 
    store_id: 8745
  }, 
  {
    city: "Portland", 
    name: "Hillsdale, OR", 
    country: "US", 
    lng: -122.69483947753906, 
    lat: 45.4781379699707, 
    store_id: 8746
  }, 
  {
    city: "Portland", 
    name: "6th & Washington", 
    country: "US", 
    lng: -122.67797088623047, 
    lat: 45.52055358886719, 
    store_id: 8748
  }, 
  {
    city: "Seattle", 
    name: "Seattle Municipal Building", 
    country: "US", 
    lng: -122.3297348022461, 
    lat: 47.6047477722168, 
    store_id: 8749
  }, 
  {
    city: "Seattle", 
    name: "2nd & Madison", 
    country: "US", 
    lng: -122.33512878417969, 
    lat: 47.605350494384766, 
    store_id: 8750
  }, 
  {
    city: "Seattle", 
    name: "US Bank Centre", 
    country: "US", 
    lng: -122.33512878417969, 
    lat: 47.610450744628906, 
    store_id: 8752
  }, 
  {
    city: "Glencoe", 
    name: "347 Park Avenue - Glencoe", 
    country: "US", 
    lng: -87.75955963134766, 
    lat: 42.134376525878906, 
    store_id: 8754
  }, 
  {
    city: "Chicago", 
    name: "401 East Ontario", 
    country: "US", 
    lng: -87.61756896972656, 
    lat: 41.893314361572266, 
    store_id: 8755
  }, 
  {
    city: "Chicago", 
    name: "Two North Riverside Plaza", 
    country: "US", 
    lng: -87.63899230957031, 
    lat: 41.88212966918945, 
    store_id: 8756
  }, 
  {
    city: "Greenville", 
    name: "Hendrix & Woodruff Rd", 
    country: "US", 
    lng: -82.27998352050781, 
    lat: 34.8210563659668, 
    store_id: 8757
  }, 
  {
    city: "Shelton", 
    name: "Shelton, Crown Point Center", 
    country: "US", 
    lng: -73.11294555664062, 
    lat: 41.2878532409668, 
    store_id: 8758
  }, 
  {
    city: "Washington", 
    name: "6th & C Street, SW", 
    country: "US", 
    lng: -77.01970672607422, 
    lat: 38.88592529296875, 
    store_id: 8759
  }, 
  {
    city: "Jacksonville", 
    name: "St Johns Town Center Mall", 
    country: "US", 
    lng: -81.52555084228516, 
    lat: 30.2584228515625, 
    store_id: 8760
  }, 
  {
    city: "Roswell", 
    name: "Hwy 92 & King Rd", 
    country: "US", 
    lng: -84.38225555419922, 
    lat: 34.058170318603516, 
    store_id: 8761
  }, 
  {
    city: "Boise", 
    name: "Boise Avenue and Apple-ID", 
    country: "US", 
    lng: -116.17447662353516, 
    lat: 43.57903289794922, 
    store_id: 8762
  }, 
  {
    city: "Boulder", 
    name: "University and Broadway", 
    country: "US", 
    lng: -105.27664947509766, 
    lat: 40.010746002197266, 
    store_id: 8764
  }, 
  {
    city: "Glenview", 
    name: "2745 Pfingston Rd - Plaza del Prado", 
    country: "US", 
    lng: -87.84754180908203, 
    lat: 42.104244232177734, 
    store_id: 8765
  }, 
  {
    city: "Colorado Springs", 
    name: "Colorado Springs", 
    country: "US", 
    lng: -104.8236312866211, 
    lat: 38.83655548095703, 
    store_id: 8767
  }, 
  {
    city: "Seattle", 
    name: "Ballard", 
    country: "US", 
    lng: -122.38500213623047, 
    lat: 47.66887664794922, 
    store_id: 8768
  }, 
  {
    city: "Eugene", 
    name: "13th & Alder", 
    country: "US", 
    lng: -123.07999420166016, 
    lat: 44.04560852050781, 
    store_id: 8769
  }, 
  {
    city: "Seattle", 
    name: "West Seattle", 
    country: "US", 
    lng: -122.38407135009766, 
    lat: 47.58103561401367, 
    store_id: 8771
  }, 
  {
    city: "Tacoma", 
    name: "26th and Proctor", 
    country: "US", 
    lng: -122.48902893066406, 
    lat: 47.271236419677734, 
    store_id: 8772
  }, 
  {
    city: "Federal Way", 
    name: "Twin Lakes/Fred Meyer", 
    country: "US", 
    lng: -122.35906219482422, 
    lat: 47.29854965209961, 
    store_id: 8774
  }, 
  {
    city: "Tacoma", 
    name: "N. 30th & McCarver/Old Town", 
    country: "US", 
    lng: -122.46463012695312, 
    lat: 47.27463150024414, 
    store_id: 8775
  }, 
  {
    city: "Federal Way", 
    name: "Dash Point", 
    country: "US", 
    lng: -122.3569107055664, 
    lat: 47.3226432800293, 
    store_id: 8776
  }, 
  {
    city: "Farmington", 
    name: "Grand River & Farmington Rd", 
    country: "US", 
    lng: -83.37437438964844, 
    lat: 42.46382522583008, 
    store_id: 8777
  }, 
  {
    city: "Hudson", 
    name: "Hudson, South Main Street", 
    country: "US", 
    lng: -81.43999481201172, 
    lat: 41.23640060424805, 
    store_id: 8778
  }, 
  {
    city: "Homewood", 
    name: "183rd & Governor's Hwy", 
    country: "US", 
    lng: -87.68177795410156, 
    lat: 41.55641174316406, 
    store_id: 8779
  }, 
  {
    city: "Dunwoody", 
    name: "Dunwoody Village", 
    country: "US", 
    lng: -84.33567810058594, 
    lat: 33.949405670166016, 
    store_id: 8781
  }, 
  {
    city: "Cincinnati", 
    name: "Rookwood Pavillion", 
    country: "US", 
    lng: -84.44306182861328, 
    lat: 39.147499084472656, 
    store_id: 8782
  }, 
  {
    city: "Centennial", 
    name: "Cherrywood", 
    country: "US", 
    lng: -104.96188354492188, 
    lat: 39.58031463623047, 
    store_id: 8783
  }, 
  {
    city: "Glen Ellyn", 
    name: "Main & Crescent", 
    country: "US", 
    lng: -88.06583404541016, 
    lat: 41.876583099365234, 
    store_id: 8784
  }, 
  {
    city: "Bloomington", 
    name: "Southtown - I-494 and Penn", 
    country: "US", 
    lng: -93.30809783935547, 
    lat: 44.86113357543945, 
    store_id: 8785
  }, 
  {
    city: "San Diego", 
    name: "Euclid & Market, San Diego", 
    country: "US", 
    lng: -117.08525085449219, 
    lat: 32.70911407470703, 
    store_id: 8786
  }, 
  {
    city: "Hattiesburg", 
    name: "Hardy St & 38th Ave", 
    country: "US", 
    lng: -89.3452377319336, 
    lat: 31.324438095092773, 
    store_id: 8787
  }, 
  {
    city: "West Valley City", 
    name: "West Valley-Shoppes at Lake Park", 
    country: "US", 
    lng: -112.02445220947266, 
    lat: 40.705753326416016, 
    store_id: 8789
  }, 
  {
    city: "Spokane", 
    name: "Hawthorne & Nevada", 
    country: "US", 
    lng: -117.39608764648438, 
    lat: 47.75148391723633, 
    store_id: 8790
  }, 
  {
    city: "San Leandro", 
    name: "E 14th & 136th", 
    country: "US", 
    lng: -122.14168548583984, 
    lat: 37.71482849121094, 
    store_id: 8791
  }, 
  {
    city: "Las Vegas", 
    name: "Albertsons-Las Vegas #6012", 
    country: "US", 
    lng: -115.27783966064453, 
    lat: 36.21953201293945, 
    store_id: 8792
  }, 
  {
    city: "New York", 
    name: "75th & First", 
    country: "US", 
    lng: -73.95462799072266, 
    lat: 40.7700309753418, 
    store_id: 8795
  }, 
  {
    city: "Boston", 
    name: "165 Newbury", 
    country: "US", 
    lng: -71.07887268066406, 
    lat: 42.35080337524414, 
    store_id: 8796
  }, 
  {
    city: "Fairfax", 
    name: "Greenbriar", 
    country: "US", 
    lng: -77.39640045166016, 
    lat: 38.87942886352539, 
    store_id: 8797
  }, 
  {
    city: "Pittsburgh", 
    name: "One Oliver Plaza", 
    country: "US", 
    lng: -80.0001220703125, 
    lat: 40.442108154296875, 
    store_id: 8798
  }, 
  {
    city: "Philadelphia", 
    name: "1201 Market", 
    country: "US", 
    lng: -75.1607894897461, 
    lat: 39.952239990234375, 
    store_id: 8799
  }, 
  {
    city: "Norristown", 
    name: "Trooper", 
    country: "US", 
    lng: -75.40418243408203, 
    lat: 40.12968063354492, 
    store_id: 8800
  }, 
  {
    city: "Potomac", 
    name: "Potomac", 
    country: "US", 
    lng: -77.20902252197266, 
    lat: 39.016597747802734, 
    store_id: 8803
  }, 
  {
    city: "Washington", 
    name: "Georgetown DC", 
    country: "US", 
    lng: -77.0675277709961, 
    lat: 38.915035247802734, 
    store_id: 8805
  }, 
  {
    city: "Mountain View", 
    name: "El Camino & El Monte", 
    country: "US", 
    lng: -122.09471893310547, 
    lat: 37.39081954956055, 
    store_id: 8806
  }, 
  {
    city: "Port Hueneme", 
    name: "Mandalay Village", 
    country: "US", 
    lng: -119.21575164794922, 
    lat: 34.17622756958008, 
    store_id: 8808
  }, 
  {
    city: "Lafayette", 
    name: "Mt Diablo & Oak Hill Rd", 
    country: "US", 
    lng: -122.12002563476562, 
    lat: 37.89171600341797, 
    store_id: 8809
  }, 
  {
    city: "San Rafael", 
    name: "Terra Linda at Northgate", 
    country: "US", 
    lng: -122.54743194580078, 
    lat: 38.007957458496094, 
    store_id: 8810
  }, 
  {
    city: "San Carlos", 
    name: "San Carlos & Laurel", 
    country: "US", 
    lng: -122.260986328125, 
    lat: 37.50651550292969, 
    store_id: 8811
  }, 
  {
    city: "Encinitas", 
    name: "Encinitas Lumberyard", 
    country: "US", 
    lng: -117.29283142089844, 
    lat: 33.04017639160156, 
    store_id: 8812
  }, 
  {
    city: "San Dimas", 
    name: "San Dimas", 
    country: "US", 
    lng: -117.8260726928711, 
    lat: 34.10643768310547, 
    store_id: 8816
  }, 
  {
    city: "Davis", 
    name: "Hwy 113 & Covell - Davis", 
    country: "US", 
    lng: -121.7689208984375, 
    lat: 38.56250762939453, 
    store_id: 8817
  }, 
  {
    city: "Hercules", 
    name: "I-80 & Willow - Hercules", 
    country: "US", 
    lng: -122.26119995117188, 
    lat: 38.0211181640625, 
    store_id: 8818
  }, 
  {
    city: "Capitola", 
    name: "Capitola Mall", 
    country: "US", 
    lng: -121.96649169921875, 
    lat: 36.975765228271484, 
    store_id: 8819
  }, 
  {
    city: "Gustine", 
    name: "I5 & Hwy 33", 
    country: "US", 
    lng: -121.01556396484375, 
    lat: 37.09901428222656, 
    store_id: 8820
  }, 
  {
    city: "Hermosa Beach", 
    name: "Vons-Hermosa Beach #2110", 
    country: "US", 
    lng: -118.39403533935547, 
    lat: 33.86493682861328, 
    store_id: 8821
  }, 
  {
    city: "Los Angeles", 
    name: "Gage & Compton, Huntington Park", 
    country: "US", 
    lng: -118.24889373779297, 
    lat: 33.98231887817383, 
    store_id: 8822
  }, 
  {
    city: "Rancho Cucamonga", 
    name: "Vons-Rancho Cucamonga #2147", 
    country: "US", 
    lng: -117.61471557617188, 
    lat: 34.13339614868164, 
    store_id: 8823
  }, 
  {
    city: "Colorado Springs", 
    name: "Academy & Austin Bluffs", 
    country: "US", 
    lng: -104.75792694091797, 
    lat: 38.89274215698242, 
    store_id: 8824
  }, 
  {
    city: "Sacramento", 
    name: "Arden Fair Mall", 
    country: "US", 
    lng: -121.42683410644531, 
    lat: 38.600685119628906, 
    store_id: 8825
  }, 
  {
    city: "Monrovia", 
    name: "Monrovia", 
    country: "US", 
    lng: -118.01296997070312, 
    lat: 34.14044952392578, 
    store_id: 8826
  }, 
  {
    city: "Los Angeles", 
    name: "La Tijera & Sepulveda", 
    country: "US", 
    lng: -118.39691162109375, 
    lat: 33.956722259521484, 
    store_id: 8827
  }, 
  {
    city: "San Luis Obispo", 
    name: "Chorro Street - San Luis Obispo", 
    country: "US", 
    lng: -120.6709213256836, 
    lat: 35.29369354248047, 
    store_id: 8828
  }, 
  {
    city: "Pinole", 
    name: "Fitzgerald & Appian, Pinole", 
    country: "US", 
    lng: -122.3024673461914, 
    lat: 37.99138259887695, 
    store_id: 8829
  }, 
  {
    city: "Rancho Santa Margarita", 
    name: "Santa Margarita Pkwy & Antonio Pkwy", 
    country: "US", 
    lng: -117.58277893066406, 
    lat: 33.64979553222656, 
    store_id: 8830
  }, 
  {
    city: "Castro Valley", 
    name: "20663 Rustic Drive", 
    country: "US", 
    lng: -122.07804107666016, 
    lat: 37.69598388671875, 
    store_id: 8831
  }, 
  {
    city: "Los Angeles", 
    name: "3rd & Fairfax (Farmers Market)", 
    country: "US", 
    lng: -118.36077880859375, 
    lat: 34.07175827026367, 
    store_id: 8832
  }, 
  {
    city: "Newport Beach", 
    name: "Mac Arthur & Campus", 
    country: "US", 
    lng: -117.86463928222656, 
    lat: 33.6713981628418, 
    store_id: 8833
  }, 
  {
    city: "San Diego", 
    name: "Genesee Plaza", 
    country: "US", 
    lng: -117.18177032470703, 
    lat: 32.81998825073242, 
    store_id: 8834
  }, 
  {
    city: "Folsom", 
    name: "E Bidwell & Glenn Folsom", 
    country: "US", 
    lng: -121.16352081298828, 
    lat: 38.672481536865234, 
    store_id: 8835
  }, 
  {
    city: "Austin", 
    name: "Far West Blvd. & Hart Ln.", 
    country: "US", 
    lng: -97.75636291503906, 
    lat: 30.354671478271484, 
    store_id: 8836
  }, 
  {
    city: "San Francisco", 
    name: "455 Market", 
    country: "US", 
    lng: -122.39875030517578, 
    lat: 37.791133880615234, 
    store_id: 8838
  }, 
  {
    city: "Westminster", 
    name: "120th & Huron", 
    country: "US", 
    lng: -104.99954986572266, 
    lat: 39.9144401550293, 
    store_id: 8839
  }, 
  {
    city: "Dallas", 
    name: "Columbus Square", 
    country: "US", 
    lng: -96.80110931396484, 
    lat: 32.800411224365234, 
    store_id: 8841
  }, 
  {
    city: "San Antonio", 
    name: "Lockhill Selma", 
    country: "US", 
    lng: -98.52128601074219, 
    lat: 29.534561157226562, 
    store_id: 8842
  }, 
  {
    city: "San Francisco", 
    name: "19th and Irving", 
    country: "US", 
    lng: -122.47746276855469, 
    lat: 37.76371765136719, 
    store_id: 8843
  }, 
  {
    city: "Sacramento", 
    name: "Date & Madison - Sacramento", 
    country: "US", 
    lng: -121.35472869873047, 
    lat: 38.66163635253906, 
    store_id: 8846
  }, 
  {
    city: "St. Louis", 
    name: "South County Mall", 
    country: "US", 
    lng: -90.33131408691406, 
    lat: 38.506866455078125, 
    store_id: 8847
  }, 
  {
    city: "Westminster", 
    name: "Safeway-Westminster #1616", 
    country: "US", 
    lng: -77.01189422607422, 
    lat: 39.5856819152832, 
    store_id: 8849
  }, 
  {
    city: "Washington", 
    name: "15th & I Streets", 
    country: "US", 
    lng: -77.03343200683594, 
    lat: 38.901485443115234, 
    store_id: 8851
  }, 
  {
    city: "Park City", 
    name: "Park Ave & Iron Horse", 
    country: "US", 
    lng: -111.50695037841797, 
    lat: 40.65782928466797, 
    store_id: 8852
  }, 
  {
    city: "Freehold", 
    name: "Route 537 Freehold", 
    country: "US", 
    lng: -74.30877685546875, 
    lat: 40.2413444519043, 
    store_id: 8854
  }, 
  {
    city: "Fairfax", 
    name: "Safeway-Fairfax #1431", 
    country: "US", 
    lng: -77.36836242675781, 
    lat: 38.86616134643555, 
    store_id: 8857
  }, 
  {
    city: "Universal City", 
    name: "Universal City Walk", 
    country: "US", 
    lng: -118.35273742675781, 
    lat: 34.136661529541016, 
    store_id: 8858
  }, 
  {
    city: "Niles", 
    name: "Martin's-Niles #19", 
    country: "US", 
    lng: -86.24832153320312, 
    lat: 41.820777893066406, 
    store_id: 8859
  }, 
  {
    city: "Salt Lake City", 
    name: "Associated Food Store-SLC #2395", 
    country: "US", 
    lng: -111.86772918701172, 
    lat: 40.6488037109375, 
    store_id: 8863
  }, 
  {
    city: "Fullerton", 
    name: "Albertsons-Fullerton #6119", 
    country: "US", 
    lng: -117.87337493896484, 
    lat: 33.89112854003906, 
    store_id: 8867
  }, 
  {
    city: "Folsom", 
    name: "Safeway-Folsom #1794", 
    country: "US", 
    lng: -121.16543579101562, 
    lat: 38.649070739746094, 
    store_id: 8870
  }, 
  {
    city: "Sherman", 
    name: "Target Sherman T-1861", 
    country: "US", 
    lng: -96.61217498779297, 
    lat: 33.680023193359375, 
    store_id: 8871
  }, 
  {
    city: "San Antonio", 
    name: "Target San Antonio T-1852", 
    country: "US", 
    lng: -98.4360122680664, 
    lat: 29.353744506835938, 
    store_id: 8872
  }, 
  {
    city: "Port Arthur", 
    name: "Target Port Arthur T-1877", 
    country: "US", 
    lng: -93.9890365600586, 
    lat: 29.946325302124023, 
    store_id: 8873
  }, 
  {
    city: "Stafford", 
    name: "Target Stafford", 
    country: "US", 
    lng: -77.40802764892578, 
    lat: 38.469051361083984, 
    store_id: 8874
  }, 
  {
    city: "Sheboygan", 
    name: "Target Kohler T-1880", 
    country: "US", 
    lng: -87.76407623291016, 
    lat: 43.71487808227539, 
    store_id: 8875
  }, 
  {
    city: "Corona", 
    name: "Cajalco & Highway 15", 
    country: "US", 
    lng: -117.5157699584961, 
    lat: 33.82352066040039, 
    store_id: 8876
  }, 
  {
    city: "Phoenix", 
    name: "Safeway-Phoenix #1543", 
    country: "US", 
    lng: -111.99150085449219, 
    lat: 33.75772476196289, 
    store_id: 8877
  }, 
  {
    city: "Scottsdale", 
    name: "Safeway-Scottsdale #1750", 
    country: "US", 
    lng: -111.94164276123047, 
    lat: 33.62422180175781, 
    store_id: 8879
  }, 
  {
    city: "Des Moines", 
    name: "Safeway-Seattle #3540", 
    country: "US", 
    lng: -122.29902648925781, 
    lat: 47.41007995605469, 
    store_id: 8880
  }, 
  {
    city: "La Grande", 
    name: "Safeway-La Grande #1827", 
    country: "US", 
    lng: -118.08094787597656, 
    lat: 45.321258544921875, 
    store_id: 8883
  }, 
  {
    city: "La Jolla", 
    name: "Vons-La Jolla #2323", 
    country: "US", 
    lng: -117.27301788330078, 
    lat: 32.84206771850586, 
    store_id: 8884
  }, 
  {
    city: "Los Angeles", 
    name: "Vons-Los Angeles #2261", 
    country: "US", 
    lng: -118.29051971435547, 
    lat: 34.06962203979492, 
    store_id: 8885
  }, 
  {
    city: "Chicago", 
    name: "Roosevelt & Wabash", 
    country: "US", 
    lng: -87.62605285644531, 
    lat: 41.867244720458984, 
    store_id: 8886
  }, 
  {
    city: "Tukwila", 
    name: "Southcenter Mall Center", 
    country: "US", 
    lng: -122.25899505615234, 
    lat: 47.458797454833984, 
    store_id: 8887
  }, 
  {
    city: "Los Angeles", 
    name: "Figueroa & 7th (FIGat7th)", 
    country: "US", 
    lng: -118.26031494140625, 
    lat: 34.04921340942383, 
    store_id: 8888
  }, 
  {
    city: "Valley Village", 
    name: "Laurel Canyon & Riverside", 
    country: "US", 
    lng: -118.396240234375, 
    lat: 34.157798767089844, 
    store_id: 8889
  }, 
  {
    city: "Fresno", 
    name: "Clovis & Kings Canyon - Fresno", 
    country: "US", 
    lng: -119.70099639892578, 
    lat: 36.7361946105957, 
    store_id: 8890
  }, 
  {
    city: "Rockville", 
    name: "Potomac Woods Plaza", 
    country: "US", 
    lng: -77.15898132324219, 
    lat: 39.06167984008789, 
    store_id: 8891
  }, 
  {
    city: "Lees Summit", 
    name: "50th & Chipman", 
    country: "US", 
    lng: -94.40846252441406, 
    lat: 38.92882537841797, 
    store_id: 8893
  }, 
  {
    city: "Salt Lake City", 
    name: "Sheraton Salt Lake City - Lobby", 
    country: "US", 
    lng: -111.895263671875, 
    lat: 40.758270263671875, 
    store_id: 8894
  }, 
  {
    city: "Littleton", 
    name: "Super Target Littleton ST-1776", 
    country: "US", 
    lng: -105.10121154785156, 
    lat: 39.611141204833984, 
    store_id: 8895
  }, 
  {
    city: "Carmel", 
    name: "Super Target Caramel ST-1366", 
    country: "US", 
    lng: -86.23265838623047, 
    lat: 39.93627166748047, 
    store_id: 8896
  }, 
  {
    city: "Claremont", 
    name: "Foothill & Claremont, CLaremont", 
    country: "US", 
    lng: -117.70428466796875, 
    lat: 34.10749435424805, 
    store_id: 8897
  }, 
  {
    city: "Viera", 
    name: "Super Target Viera ST-1934", 
    country: "US", 
    lng: -80.71927642822266, 
    lat: 28.22795867919922, 
    store_id: 8848
  }, 
  {
    city: "North Andover", 
    name: "N Andover/Rte 114", 
    country: "US", 
    lng: -71.11514282226562, 
    lat: 42.66586685180664, 
    store_id: 8898
  }, 
  {
    city: "Antioch", 
    name: "Bell Rd - Hickory Hollow", 
    country: "US", 
    lng: -86.65731048583984, 
    lat: 36.04792022705078, 
    store_id: 8899
  }, 
  {
    city: "West Sacramento", 
    name: "Jefferson & Lake Washington", 
    country: "US", 
    lng: -121.53848266601562, 
    lat: 38.5507926940918, 
    store_id: 8901
  }, 
  {
    city: "El Cerrito", 
    name: "San Pablo & Wall El Cerrito", 
    country: "US", 
    lng: -122.32130432128906, 
    lat: 37.928680419921875, 
    store_id: 8902
  }, 
  {
    city: "Jacksonville", 
    name: "Blanding Blvd. & I-295", 
    country: "US", 
    lng: -81.7385482788086, 
    lat: 30.19322395324707, 
    store_id: 8903
  }, 
  {
    city: "Jacksonville", 
    name: "Beach Blvd & San Pablo Rd", 
    country: "US", 
    lng: -81.43830871582031, 
    lat: 30.288576126098633, 
    store_id: 8904
  }, 
  {
    city: "Largo", 
    name: "Starkey Rd & East Bay Dr", 
    country: "US", 
    lng: -82.76183319091797, 
    lat: 27.91611671447754, 
    store_id: 8905
  }, 
  {
    city: "Euless", 
    name: "Super Target Euless ST-1368", 
    country: "US", 
    lng: -97.10440063476562, 
    lat: 32.88038635253906, 
    store_id: 8906
  }, 
  {
    city: "New York", 
    name: "Broadway & Grand", 
    country: "US", 
    lng: -74.00045013427734, 
    lat: 40.72126007080078, 
    store_id: 8907
  }, 
  {
    city: "Wilmington", 
    name: "Landfall", 
    country: "US", 
    lng: -77.82844543457031, 
    lat: 34.22785186767578, 
    store_id: 8908
  }, 
  {
    city: "Rochester", 
    name: "Clover Commons", 
    country: "US", 
    lng: -77.54730224609375, 
    lat: 43.111122131347656, 
    store_id: 8909
  }, 
  {
    city: "Marietta", 
    name: "Powder Springs Rd @ Macland", 
    country: "US", 
    lng: -84.60260772705078, 
    lat: 33.90594482421875, 
    store_id: 8910
  }, 
  {
    city: "Raleigh", 
    name: "Capital Blvd.", 
    country: "US", 
    lng: -78.59183502197266, 
    lat: 35.82136535644531, 
    store_id: 8911
  }, 
  {
    city: "Fountain Valley", 
    name: "Newhope & Southpark", 
    country: "US", 
    lng: -117.93415832519531, 
    lat: 33.70432662963867, 
    store_id: 8912
  }, 
  {
    city: "San Antonio", 
    name: "Super Target San Antonio ST-1354", 
    country: "US", 
    lng: -98.51006317138672, 
    lat: 29.611818313598633, 
    store_id: 8915
  }, 
  {
    city: "Bellevue", 
    name: "Bellevue - Hwy 100", 
    country: "US", 
    lng: -86.95572662353516, 
    lat: 36.04411315917969, 
    store_id: 8916
  }, 
  {
    city: "Chico", 
    name: "20th & Forest - Chico", 
    country: "US", 
    lng: -121.8011703491211, 
    lat: 39.72639846801758, 
    store_id: 8918
  }, 
  {
    city: "New York", 
    name: "14th & Sixth", 
    country: "US", 
    lng: -73.99639892578125, 
    lat: 40.73698043823242, 
    store_id: 8919
  }, 
  {
    city: "New York", 
    name: "57th & Seventh", 
    country: "US", 
    lng: -73.97897338867188, 
    lat: 40.76487350463867, 
    store_id: 8920
  }, 
  {
    city: "Conroe", 
    name: "I-45 & SH 105", 
    country: "US", 
    lng: -95.47633361816406, 
    lat: 30.31632423400879, 
    store_id: 8922
  }, 
  {
    city: "New York", 
    name: "90th & First", 
    country: "US", 
    lng: -73.94747161865234, 
    lat: 40.779117584228516, 
    store_id: 8923
  }, 
  {
    city: "Green Bay", 
    name: "Main & Auto Plaza", 
    country: "US", 
    lng: -87.96993255615234, 
    lat: 44.48431396484375, 
    store_id: 8924
  }, 
  {
    city: "Jupiter", 
    name: "Abacoa Plaza", 
    country: "US", 
    lng: -80.10719299316406, 
    lat: 26.884063720703125, 
    store_id: 8925
  }, 
  {
    city: "Cleveland Heights", 
    name: "Mayfield Road, Cleveland Heights", 
    country: "US", 
    lng: -81.56893157958984, 
    lat: 41.5162353515625, 
    store_id: 8927
  }, 
  {
    city: "Lincoln", 
    name: "Lincoln-27th & Pine Lake", 
    country: "US", 
    lng: -96.6791763305664, 
    lat: 40.739383697509766, 
    store_id: 8929
  }, 
  {
    city: "Tulsa", 
    name: "Quincy & 71st", 
    country: "US", 
    lng: -95.97396850585938, 
    lat: 36.06022644042969, 
    store_id: 8930
  }, 
  {
    city: "Batavia", 
    name: "Target Batavia T-839", 
    country: "US", 
    lng: -88.34020233154297, 
    lat: 41.85049819946289, 
    store_id: 8931
  }, 
  {
    city: "Akron", 
    name: "U of Akron - Student Union", 
    country: "US", 
    lng: -81.5125732421875, 
    lat: 41.07570266723633, 
    store_id: 8933
  }, 
  {
    city: "Kenosha", 
    name: "Carthage College Clausen Center", 
    country: "US", 
    lng: -87.82133483886719, 
    lat: 42.62203598022461, 
    store_id: 8935
  }, 
  {
    city: "San Mateo", 
    name: "Mollie Stone Market-San Mateo", 
    country: "US", 
    lng: -122.29032135009766, 
    lat: 37.530059814453125, 
    store_id: 8936
  }, 
  {
    city: "Dallas", 
    name: "Super Target Dallas ST-1784", 
    country: "US", 
    lng: -96.74512481689453, 
    lat: 32.8657112121582, 
    store_id: 8937
  }, 
  {
    city: "Sugar Land", 
    name: "Super Target Sugarland ST-1786", 
    country: "US", 
    lng: -95.62747192382812, 
    lat: 29.59633445739746, 
    store_id: 8938
  }, 
  {
    city: "Saint Petersburg", 
    name: "Baywalk", 
    country: "US", 
    lng: -82.63536071777344, 
    lat: 27.77225685119629, 
    store_id: 8941
  }, 
  {
    city: "Washington", 
    name: "Safeway-Wash DC #1276", 
    country: "US", 
    lng: -77.02626037597656, 
    lat: 38.96935272216797, 
    store_id: 8942
  }, 
  {
    city: "Sandy", 
    name: "Super Target Sandy ST-1752", 
    country: "US", 
    lng: -111.89317321777344, 
    lat: 40.56727600097656, 
    store_id: 8943
  }, 
  {
    city: "Kirkland", 
    name: "Safeway-Kirkland #1142", 
    country: "US", 
    lng: -122.17371368408203, 
    lat: 47.678863525390625, 
    store_id: 8944
  }, 
  {
    city: "Williamsburg", 
    name: "Williamsburg Marketplace", 
    country: "US", 
    lng: -76.65908813476562, 
    lat: 37.246849060058594, 
    store_id: 8946
  }, 
  {
    city: "New York", 
    name: "Spring and Varick", 
    country: "US", 
    lng: -74.00557708740234, 
    lat: 40.725772857666016, 
    store_id: 8947
  }, 
  {
    city: "Richmond", 
    name: "Three Chopt Road", 
    country: "US", 
    lng: -77.53179168701172, 
    lat: 37.59034729003906, 
    store_id: 8948
  }, 
  {
    city: "Seattle", 
    name: "1609 West Dravus", 
    country: "US", 
    lng: -122.3780288696289, 
    lat: 47.64828109741211, 
    store_id: 8949
  }, 
  {
    city: "Greensboro", 
    name: "Guilford College", 
    country: "US", 
    lng: -79.88575744628906, 
    lat: 36.088829040527344, 
    store_id: 8950
  }, 
  {
    city: "Frisco", 
    name: "Super Target Frisco ST-1763", 
    country: "US", 
    lng: -96.80583953857422, 
    lat: 33.106719970703125, 
    store_id: 8951
  }, 
  {
    city: "The Woodlands", 
    name: "Panther Creek & Woodlands Pkwy", 
    country: "US", 
    lng: -95.50399017333984, 
    lat: 30.167728424072266, 
    store_id: 8952
  }, 
  {
    city: "Closter", 
    name: "Closter", 
    country: "US", 
    lng: -73.96113586425781, 
    lat: 40.97216033935547, 
    store_id: 8954
  }, 
  {
    city: "Buford", 
    name: "Mall of Georgia", 
    country: "US", 
    lng: -83.98435974121094, 
    lat: 34.0653076171875, 
    store_id: 8956
  }, 
  {
    city: "Burbank", 
    name: "Alameda & San Fernando", 
    country: "US", 
    lng: -118.30070495605469, 
    lat: 34.174583435058594, 
    store_id: 8958
  }, 
  {
    city: "South Pasadena", 
    name: "Vons-South Pasadena #2228", 
    country: "US", 
    lng: -118.15056610107422, 
    lat: 34.111778259277344, 
    store_id: 8959
  }, 
  {
    city: "La Mesa", 
    name: "Vons-La Mesa #2093", 
    country: "US", 
    lng: -117.02442169189453, 
    lat: 32.765037536621094, 
    store_id: 8953
  }, 
  {
    city: "Baytown", 
    name: "Garth Rd & West Baker", 
    country: "US", 
    lng: -94.97813415527344, 
    lat: 29.774028778076172, 
    store_id: 8960
  }, 
  {
    city: "McAllen", 
    name: "10th & Jonquil", 
    country: "US", 
    lng: -98.2251205444336, 
    lat: 26.235322952270508, 
    store_id: 8962
  }, 
  {
    city: "Lufkin", 
    name: "Hwy. 59 & Daniel McCall", 
    country: "US", 
    lng: -94.72834014892578, 
    lat: 31.299659729003906, 
    store_id: 8963
  }, 
  {
    city: "Houston", 
    name: "Memorial & Benignus", 
    country: "US", 
    lng: -95.55023956298828, 
    lat: 29.766475677490234, 
    store_id: 8965
  }, 
  {
    city: "Greenbrae", 
    name: "Mollie Stone - Greenbrae", 
    country: "US", 
    lng: -122.52330017089844, 
    lat: 37.9453010559082, 
    store_id: 8966
  }, 
  {
    city: "Ann Arbor", 
    name: "Briarwood Mall", 
    country: "US", 
    lng: -83.74665832519531, 
    lat: 42.240657806396484, 
    store_id: 8967
  }, 
  {
    city: "San Pedro", 
    name: "Western & 25th", 
    country: "US", 
    lng: -118.31205749511719, 
    lat: 33.72333908081055, 
    store_id: 8969
  }, 
  {
    city: "Los Angeles", 
    name: "La Brea & San Vicente", 
    country: "US", 
    lng: -118.34403228759766, 
    lat: 34.05098342895508, 
    store_id: 8970
  }, 
  {
    city: "Fresno", 
    name: "Kern & N Street - Fresno", 
    country: "US", 
    lng: -119.7852554321289, 
    lat: 36.735748291015625, 
    store_id: 8971
  }, 
  {
    city: "Daly City", 
    name: "Serramonte Center - Daly City", 
    country: "US", 
    lng: -122.4698257446289, 
    lat: 37.672481536865234, 
    store_id: 8972
  }, 
  {
    city: "Raleigh", 
    name: "Stonehenge", 
    country: "US", 
    lng: -78.67874908447266, 
    lat: 35.88779067993164, 
    store_id: 8974
  }, 
  {
    city: "Atlanta", 
    name: "Cumberland Mall", 
    country: "US", 
    lng: -84.46955108642578, 
    lat: 33.88035202026367, 
    store_id: 8975
  }, 
  {
    city: "New York", 
    name: "44th & Lex", 
    country: "US", 
    lng: -73.9749755859375, 
    lat: 40.753177642822266, 
    store_id: 8976
  }, 
  {
    city: "Cranberry Township", 
    name: "Freedom Road", 
    country: "US", 
    lng: -80.10960388183594, 
    lat: 40.68418884277344, 
    store_id: 8977
  }, 
  {
    city: "Fort Wayne", 
    name: "Jefferson Pointe - Ft. Wayne", 
    country: "US", 
    lng: -85.19571685791016, 
    lat: 41.072357177734375, 
    store_id: 8978
  }, 
  {
    city: "Philadelphia", 
    name: "Callowhill Street", 
    country: "US", 
    lng: -75.17144775390625, 
    lat: 39.96092987060547, 
    store_id: 8981
  }, 
  {
    city: "Jacksonville", 
    name: "San Jose & St. Augustine", 
    country: "US", 
    lng: -81.61720275878906, 
    lat: 30.20228385925293, 
    store_id: 8983
  }, 
  {
    city: "Kissimmee", 
    name: "Super Target Kissimmee ST-1918", 
    country: "US", 
    lng: -81.47492980957031, 
    lat: 28.332094192504883, 
    store_id: 8986
  }, 
  {
    city: "Savannah", 
    name: "Target Savannah T-1910", 
    country: "US", 
    lng: -81.1749496459961, 
    lat: 31.984004974365234, 
    store_id: 8988
  }, 
  {
    city: "Altoona", 
    name: "Target-Altoona T-1939", 
    country: "US", 
    lng: -93.50338745117188, 
    lat: 41.64396286010742, 
    store_id: 8989
  }, 
  {
    city: "Meridian", 
    name: "Meridian Rd. & Corporate Dr", 
    country: "US", 
    lng: -116.39334869384766, 
    lat: 43.59956741333008, 
    store_id: 8990
  }, 
  {
    city: "Naperville", 
    name: "Super Target Naperville ST-840", 
    country: "US", 
    lng: -88.20014953613281, 
    lat: 41.76943588256836, 
    store_id: 8991
  }, 
  {
    city: "Chicago", 
    name: "Target Chicago South Loop T-1889", 
    country: "US", 
    lng: -87.63072967529297, 
    lat: 41.867652893066406, 
    store_id: 8992
  }, 
  {
    city: "Mount Pleasant", 
    name: "Belle Hall", 
    country: "US", 
    lng: -79.85652923583984, 
    lat: 32.84089660644531, 
    store_id: 8993
  }, 
  {
    city: "Tacoma", 
    name: "Tacoma Place", 
    country: "US", 
    lng: -122.45948791503906, 
    lat: 47.19218826293945, 
    store_id: 8994
  }, 
  {
    city: "Turlock", 
    name: "Monte Vista & Countryside", 
    country: "US", 
    lng: -120.88043975830078, 
    lat: 37.52159881591797, 
    store_id: 8995
  }, 
  {
    city: "Gresham", 
    name: "Gresham Station", 
    country: "US", 
    lng: -122.44088745117188, 
    lat: 45.504730224609375, 
    store_id: 8997
  }, 
  {
    city: "Vancouver", 
    name: "Heritage Place", 
    country: "US", 
    lng: -122.67402648925781, 
    lat: 45.62736511230469, 
    store_id: 8999
  }, 
  {
    city: "Las Vegas", 
    name: "Charleston & Rampart, Las Vegas", 
    country: "US", 
    lng: -115.28768920898438, 
    lat: 36.15947723388672, 
    store_id: 9000
  }, 
  {
    city: "Banning", 
    name: "Ramsey & 22nd Street, Banning", 
    country: "US", 
    lng: -116.90184020996094, 
    lat: 33.92535400390625, 
    store_id: 9001
  }, 
  {
    city: "Houston", 
    name: "Fry & Kingsland", 
    country: "US", 
    lng: -95.71867370605469, 
    lat: 29.774860382080078, 
    store_id: 9002
  }, 
  {
    city: "Falls Church", 
    name: "Broaddale", 
    country: "US", 
    lng: -77.17413330078125, 
    lat: 38.88473129272461, 
    store_id: 9003
  }, 
  {
    city: "Orlando", 
    name: "S John Young Parkway Towne Pl Blvd", 
    country: "US", 
    lng: -81.42420959472656, 
    lat: 28.366073608398438, 
    store_id: 9004
  }, 
  {
    city: "Greenbelt", 
    name: "Safeway-Greenbelt #107", 
    country: "US", 
    lng: -76.8768310546875, 
    lat: 38.99285125732422, 
    store_id: 9005
  }, 
  {
    city: "Woodinville", 
    name: "Safeway-Woodinville #533", 
    country: "US", 
    lng: -122.08096313476562, 
    lat: 47.756256103515625, 
    store_id: 9006
  }, 
  {
    city: "Ann Arbor", 
    name: "S. University & Church", 
    country: "US", 
    lng: -83.73412322998047, 
    lat: 42.274898529052734, 
    store_id: 9007
  }, 
  {
    city: "Brooklyn", 
    name: "Brooklyn, OH", 
    country: "US", 
    lng: -81.73490905761719, 
    lat: 41.42535400390625, 
    store_id: 9008
  }, 
  {
    city: "Hollywood", 
    name: "Hollywood & McCadden", 
    country: "US", 
    lng: -118.33720397949219, 
    lat: 34.101806640625, 
    store_id: 9009
  }, 
  {
    city: "Nashville", 
    name: "5th & Church", 
    country: "US", 
    lng: -86.78007507324219, 
    lat: 36.16364669799805, 
    store_id: 9011
  }, 
  {
    city: "Vancouver", 
    name: "NE 139th & 20th - Salmon Creek", 
    country: "US", 
    lng: -122.6527328491211, 
    lat: 45.72333908081055, 
    store_id: 9012
  }, 
  {
    city: "Charleston", 
    name: "E. Bay Street", 
    country: "US", 
    lng: -79.93035888671875, 
    lat: 32.78902816772461, 
    store_id: 9013
  }, 
  {
    city: "Tucson", 
    name: "Park Place - Tucson", 
    country: "US", 
    lng: -110.86666870117188, 
    lat: 32.22043991088867, 
    store_id: 9014
  }, 
  {
    city: "Rancho Cordova", 
    name: "Tributary Point & Hazel - RC", 
    country: "US", 
    lng: -121.22019958496094, 
    lat: 38.63208770751953, 
    store_id: 9015
  }, 
  {
    city: "Washington", 
    name: "DuPont South", 
    country: "US", 
    lng: -77.04191589355469, 
    lat: 38.90763473510742, 
    store_id: 9016
  }, 
  {
    city: "West Palm Beach", 
    name: "Super Target West Palm Beach ST-19", 
    country: "US", 
    lng: -80.20277404785156, 
    lat: 26.710935592651367, 
    store_id: 8987
  }, 
  {
    city: "Roseville", 
    name: "Douglas & Rocky Ridge", 
    country: "US", 
    lng: -121.25164031982422, 
    lat: 38.7429313659668, 
    store_id: 9020
  }, 
  {
    city: "Danville", 
    name: "Crow Canyon Rd & Camino Tassajara", 
    country: "US", 
    lng: -121.92193603515625, 
    lat: 37.79885482788086, 
    store_id: 9021
  }, 
  {
    city: "San Jose", 
    name: "Lincoln & Minnesota Willow Glen", 
    country: "US", 
    lng: -121.89727020263672, 
    lat: 37.303794860839844, 
    store_id: 9022
  }, 
  {
    city: "Livermore", 
    name: "First Street & Las Positas", 
    country: "US", 
    lng: -121.74321746826172, 
    lat: 37.6971321105957, 
    store_id: 9023
  }, 
  {
    city: "Santa Monica", 
    name: "3rd & Wilshire (Barnes & Noble)", 
    country: "US", 
    lng: -118.4990234375, 
    lat: 34.01832962036133, 
    store_id: 9024
  }, 
  {
    city: "SAN FRANCISCO", 
    name: "Laurel Village", 
    country: "US", 
    lng: -122.45323181152344, 
    lat: 37.786109924316406, 
    store_id: 9025
  }, 
  {
    city: "Danville", 
    name: "Hartz Ave & Prospect", 
    country: "US", 
    lng: -121.99983215332031, 
    lat: 37.821929931640625, 
    store_id: 9026
  }, 
  {
    city: "Malibu", 
    name: "PCH & Cross Creek", 
    country: "US", 
    lng: -118.68508911132812, 
    lat: 34.035194396972656, 
    store_id: 9027
  }, 
  {
    city: "West Hills", 
    name: "Platt & Victory", 
    country: "US", 
    lng: -118.6416015625, 
    lat: 34.188724517822266, 
    store_id: 9028
  }, 
  {
    city: "Pasadena", 
    name: "Hastings Ranch", 
    country: "US", 
    lng: -118.07318115234375, 
    lat: 34.15046310424805, 
    store_id: 9030
  }, 
  {
    city: "San Francisco", 
    name: "74 New Montgomery", 
    country: "US", 
    lng: -122.40106964111328, 
    lat: 37.7877197265625, 
    store_id: 9031
  }, 
  {
    city: "Corvallis", 
    name: "Timberhill", 
    country: "US", 
    lng: -123.27574920654297, 
    lat: 44.590415954589844, 
    store_id: 9032
  }, 
  {
    city: "Beverly Hills", 
    name: "N Beverly & S. Santa Monica Blvd", 
    country: "US", 
    lng: -118.40235900878906, 
    lat: 34.07058334350586, 
    store_id: 9033
  }, 
  {
    city: "Santa Monica", 
    name: "Main & Hill", 
    country: "US", 
    lng: -118.48249053955078, 
    lat: 34.00112533569336, 
    store_id: 9034
  }, 
  {
    city: "Los Angeles", 
    name: "Larchmont & Beverly", 
    country: "US", 
    lng: -118.3234634399414, 
    lat: 34.07490921020508, 
    store_id: 9035
  }, 
  {
    city: "San Diego", 
    name: "525 B Street", 
    country: "US", 
    lng: -117.15943145751953, 
    lat: 32.7176513671875, 
    store_id: 9036
  }, 
  {
    city: "San Francisco", 
    name: "Polk Street", 
    country: "US", 
    lng: -122.4220962524414, 
    lat: 37.79676818847656, 
    store_id: 9037
  }, 
  {
    city: "Campbell", 
    name: "Hamilton Plaza", 
    country: "US", 
    lng: -121.93034362792969, 
    lat: 37.2927131652832, 
    store_id: 9038
  }, 
  {
    city: "Westminster", 
    name: "Super Target Westminster ST-1928", 
    country: "US", 
    lng: -105.07868957519531, 
    lat: 39.88654327392578, 
    store_id: 9039
  }, 
  {
    city: "North Haven", 
    name: "Target North Haven T-1916", 
    country: "US", 
    lng: -72.87183380126953, 
    lat: 41.350746154785156, 
    store_id: 9040
  }, 
  {
    city: "Stamford", 
    name: "Target Stamford T-1544", 
    country: "US", 
    lng: -73.54137420654297, 
    lat: 41.055477142333984, 
    store_id: 9042
  }, 
  {
    city: "New Port Richey", 
    name: "Target Seven Springs T-1967", 
    country: "US", 
    lng: -82.6662368774414, 
    lat: 28.20026397705078, 
    store_id: 9043
  }, 
  {
    city: "Melbourne", 
    name: "Wickham Rd & I-95", 
    country: "US", 
    lng: -80.72196960449219, 
    lat: 28.230995178222656, 
    store_id: 9044
  }, 
  {
    city: "Town of Southwest Ranches", 
    name: "Sheridan St & Dykes Rd", 
    country: "US", 
    lng: -80.36013793945312, 
    lat: 26.02992057800293, 
    store_id: 9045
  }, 
  {
    city: "Oregon City", 
    name: "Oregon City", 
    country: "US", 
    lng: -122.58392333984375, 
    lat: 45.33125305175781, 
    store_id: 9047
  }, 
  {
    city: "Portland", 
    name: "Multnomah", 
    country: "US", 
    lng: -122.71142578125, 
    lat: 45.468631744384766, 
    store_id: 9048
  }, 
  {
    city: "Eugene", 
    name: "Eugene", 
    country: "US", 
    lng: -123.08927917480469, 
    lat: 44.04030227661133, 
    store_id: 9049
  }, 
  {
    city: "Longview", 
    name: "Longview/Thriftway", 
    country: "US", 
    lng: -122.93047332763672, 
    lat: 46.145877838134766, 
    store_id: 9052
  }, 
  {
    city: "Maple Valley", 
    name: "Wilderness Village", 
    country: "US", 
    lng: -122.04562377929688, 
    lat: 47.388099670410156, 
    store_id: 9053
  }, 
  {
    city: "Kirkland", 
    name: "Totem Lake West", 
    country: "US", 
    lng: -122.18903350830078, 
    lat: 47.71158218383789, 
    store_id: 9054
  }, 
  {
    city: "Sandpoint", 
    name: "Sandpoint, ID", 
    country: "US", 
    lng: -116.54739379882812, 
    lat: 48.27366256713867, 
    store_id: 9055
  }, 
  {
    city: "Kent", 
    name: "208th & Benson/Panther Lk.", 
    country: "US", 
    lng: -122.19820404052734, 
    lat: 47.41607666015625, 
    store_id: 9056
  }, 
  {
    city: "Novi", 
    name: "Novi Rd & W Oaks", 
    country: "US", 
    lng: -83.47683715820312, 
    lat: 42.493873596191406, 
    store_id: 9058
  }, 
  {
    city: "Chargrin Falls", 
    name: "Chagrin Falls, North Main Street", 
    country: "US", 
    lng: -81.39225769042969, 
    lat: 41.43143081665039, 
    store_id: 9059
  }, 
  {
    city: "Blue Ash", 
    name: "Blue Ash - Kenwood", 
    country: "US", 
    lng: -84.37642669677734, 
    lat: 39.23292922973633, 
    store_id: 9063
  }, 
  {
    city: "Chicago", 
    name: "55 E. Jackson", 
    country: "US", 
    lng: -87.62588500976562, 
    lat: 41.878108978271484, 
    store_id: 9064
  }, 
  {
    city: "Cleveland Heights", 
    name: "Cedar Road, Cleveland Heights", 
    country: "US", 
    lng: -81.59410858154297, 
    lat: 41.501243591308594, 
    store_id: 9065
  }, 
  {
    city: "Milwaukee", 
    name: "Webster & Downer", 
    country: "US", 
    lng: -87.8782958984375, 
    lat: 43.06502151489258, 
    store_id: 9066
  }, 
  {
    city: "Atlanta", 
    name: "Peachtree Battle", 
    country: "US", 
    lng: -84.38832092285156, 
    lat: 33.8188591003418, 
    store_id: 9068
  }, 
  {
    city: "Seattle", 
    name: "University Village", 
    country: "US", 
    lng: -122.29974365234375, 
    lat: 47.66268539428711, 
    store_id: 9069
  }, 
  {
    city: "Seattle", 
    name: "University Way", 
    country: "US", 
    lng: -122.31329345703125, 
    lat: 47.66284942626953, 
    store_id: 9070
  }, 
  {
    city: "Redmond", 
    name: "Bear Creek", 
    country: "US", 
    lng: -122.11058807373047, 
    lat: 47.672630310058594, 
    store_id: 9071
  }, 
  {
    city: "Seattle", 
    name: "Pine Street", 
    country: "US", 
    lng: -122.33572387695312, 
    lat: 47.611846923828125, 
    store_id: 9072
  }, 
  {
    city: "Bellevue", 
    name: "120th Ave & NE 8th", 
    country: "US", 
    lng: -122.18059539794922, 
    lat: 47.6160888671875, 
    store_id: 9073
  }, 
  {
    city: "Tukwila", 
    name: "Southcenter", 
    country: "US", 
    lng: -122.25656127929688, 
    lat: 47.455692291259766, 
    store_id: 9074
  }, 
  {
    city: "Vancouver", 
    name: "Vancouver Mall", 
    country: "US", 
    lng: -122.58465576171875, 
    lat: 45.65814971923828, 
    store_id: 9076
  }, 
  {
    city: "Seattle", 
    name: "Northgate", 
    country: "US", 
    lng: -122.32154846191406, 
    lat: 47.70879364013672, 
    store_id: 9078
  }, 
  {
    city: "Seattle", 
    name: "Richmond Beach", 
    country: "US", 
    lng: -122.36470794677734, 
    lat: 47.76580047607422, 
    store_id: 9080
  }, 
  {
    city: "Medford", 
    name: "Medford (B&N)", 
    country: "US", 
    lng: -122.87306213378906, 
    lat: 42.34391784667969, 
    store_id: 9081
  }, 
  {
    city: "Portland", 
    name: "Pioneer Courthouse", 
    country: "US", 
    lng: -122.67950439453125, 
    lat: 45.51909637451172, 
    store_id: 9082
  }, 
  {
    city: "Chicago", 
    name: "Clark & Germania Place", 
    country: "US", 
    lng: -87.63206481933594, 
    lat: 41.910614013671875, 
    store_id: 9084
  }, 
  {
    city: "Reston", 
    name: "Spectrum", 
    country: "US", 
    lng: -77.35507202148438, 
    lat: 38.96147918701172, 
    store_id: 9086
  }, 
  {
    city: "Wayne", 
    name: "Wayne", 
    country: "US", 
    lng: -75.38343811035156, 
    lat: 40.043575286865234, 
    store_id: 9087
  }, 
  {
    city: "Dallas", 
    name: "Berkshire Court", 
    country: "US", 
    lng: -96.80501556396484, 
    lat: 32.865272521972656, 
    store_id: 9088
  }, 
  {
    city: "Washington", 
    name: "Dupont North", 
    country: "US", 
    lng: -77.04570007324219, 
    lat: 38.912784576416016, 
    store_id: 9090
  }, 
  {
    city: "Sterling", 
    name: "Cascade Marketplace", 
    country: "US", 
    lng: -77.39800262451172, 
    lat: 39.034568786621094, 
    store_id: 9091
  }, 
  {
    city: "Las Vegas", 
    name: "Tropicana & Boulder Hwy, Las Vegas", 
    country: "US", 
    lng: -115.05242919921875, 
    lat: 36.10066604614258, 
    store_id: 9092
  }, 
  {
    city: "North Las Vegas", 
    name: "Ann & Camino Al Norte", 
    country: "US", 
    lng: -115.15568542480469, 
    lat: 36.25993728637695, 
    store_id: 9093
  }, 
  {
    city: "Victor", 
    name: "Eastview Mall", 
    country: "US", 
    lng: -77.44264221191406, 
    lat: 43.028587341308594, 
    store_id: 9094
  }, 
  {
    city: "San Marcos", 
    name: "I-35 & Centerpoint - SW Corner", 
    country: "US", 
    lng: -97.98693084716797, 
    lat: 29.828590393066406, 
    store_id: 9096
  }, 
  {
    city: "Rolling Hills", 
    name: "Promenade on the Peninsula", 
    country: "US", 
    lng: -118.37303161621094, 
    lat: 33.77134323120117, 
    store_id: 9098
  }, 
  {
    city: "Bothell", 
    name: "Bothell QFC", 
    country: "US", 
    lng: -122.2113265991211, 
    lat: 47.76580810546875, 
    store_id: 9099
  }, 
  {
    city: "Fullerton", 
    name: "Harbor & Orangethorpe", 
    country: "US", 
    lng: -117.92483520507812, 
    lat: 33.86023712158203, 
    store_id: 9104
  }, 
  {
    city: "Watauga", 
    name: "Super Target Watauga ST-1765", 
    country: "US", 
    lng: -97.25679779052734, 
    lat: 32.88969421386719, 
    store_id: 9105
  }, 
  {
    city: "Plano", 
    name: "SuperTarget West Plano ST-1764 #333", 
    country: "US", 
    lng: -96.82697296142578, 
    lat: 33.03050231933594, 
    store_id: 9106
  }, 
  {
    city: "Shawnee Mission", 
    name: "Super Target Shawnee ST-1759", 
    country: "US", 
    lng: -94.76802062988281, 
    lat: 39.010257720947266, 
    store_id: 9107
  }, 
  {
    city: "Birmingham", 
    name: "Super Target Trussville ST-1773", 
    country: "US", 
    lng: -86.63780212402344, 
    lat: 33.60286331176758, 
    store_id: 9108
  }, 
  {
    city: "Colorado Springs", 
    name: "Safeway-Colorado Springs #1466", 
    country: "US", 
    lng: -104.77283477783203, 
    lat: 38.84823226928711, 
    store_id: 9110
  }, 
  {
    city: "Sacramento", 
    name: "Sacramento Con Ctr-13th St Cafe", 
    country: "US", 
    lng: -121.4891586303711, 
    lat: 38.57881164550781, 
    store_id: 9111
  }, 
  {
    city: "Bellevue", 
    name: "Civica Office Building", 
    country: "US", 
    lng: -122.19662475585938, 
    lat: 47.612579345703125, 
    store_id: 9118
  }, 
  {
    city: "Albuquerque", 
    name: "Juan Tabo", 
    country: "US", 
    lng: -106.5150375366211, 
    lat: 35.09944152832031, 
    store_id: 9119
  }, 
  {
    city: "Covington", 
    name: "Target Covington T-1876", 
    country: "US", 
    lng: -90.1423568725586, 
    lat: 30.443408966064453, 
    store_id: 9120
  }, 
  {
    city: "Boston", 
    name: "Target Dorchester T-1898", 
    country: "US", 
    lng: -71.06288146972656, 
    lat: 42.3288688659668, 
    store_id: 9121
  }, 
  {
    city: "Abingdon", 
    name: "Target Abingdon T-1871", 
    country: "US", 
    lng: -76.31620788574219, 
    lat: 39.46385955810547, 
    store_id: 9123
  }, 
  {
    city: "Riverside", 
    name: "Galleria at Tyler Mall Floor 2", 
    country: "US", 
    lng: -117.45684814453125, 
    lat: 33.909881591796875, 
    store_id: 9124
  }, 
  {
    city: "Stockton", 
    name: "Lincoln Center - Stockton", 
    country: "US", 
    lng: -121.32213592529297, 
    lat: 38.01109313964844, 
    store_id: 9126
  }, 
  {
    city: "Milpitas", 
    name: "N Milpitas Blvd & Town Center Dr", 
    country: "US", 
    lng: -121.9004898071289, 
    lat: 37.43478012084961, 
    store_id: 9127
  }, 
  {
    city: "San Francisco", 
    name: "100 West Portal/Vicente", 
    country: "US", 
    lng: -122.46732330322266, 
    lat: 37.73968505859375, 
    store_id: 9128
  }, 
  {
    city: "San Ramon", 
    name: "Crow Canyon Rd & Crow Canyon Place", 
    country: "US", 
    lng: -121.9722900390625, 
    lat: 37.779911041259766, 
    store_id: 9129
  }, 
  {
    city: "Sacramento", 
    name: "19th & J Street - Sacramento", 
    country: "US", 
    lng: -121.48094177246094, 
    lat: 38.5771484375, 
    store_id: 9130
  }, 
  {
    city: "Cupertino", 
    name: "Stevens Creek & DeAnza", 
    country: "US", 
    lng: -122.03278350830078, 
    lat: 37.321990966796875, 
    store_id: 9131
  }, 
  {
    city: "Foster City", 
    name: "Metro Center Foster City", 
    country: "US", 
    lng: -122.2739028930664, 
    lat: 37.56093978881836, 
    store_id: 9132
  }, 
  {
    city: "Santa Fe", 
    name: "DeVargas Center - Santa Fe", 
    country: "US", 
    lng: -105.95062255859375, 
    lat: 35.692115783691406, 
    store_id: 9134
  }, 
  {
    city: "Gaithersburg", 
    name: "Muddy Branch", 
    country: "US", 
    lng: -77.21623992919922, 
    lat: 39.114410400390625, 
    store_id: 9135
  }, 
  {
    city: "Arlington", 
    name: "Crystal City", 
    country: "US", 
    lng: -77.04967498779297, 
    lat: 38.85825729370117, 
    store_id: 9136
  }, 
  {
    city: "Lynbrook", 
    name: "Lynbrook", 
    country: "US", 
    lng: -73.67593383789062, 
    lat: 40.65516662597656, 
    store_id: 9137
  }, 
  {
    city: "Charlottesville", 
    name: "Charlottesville", 
    country: "US", 
    lng: -78.50088500976562, 
    lat: 38.035465240478516, 
    store_id: 9139
  }, 
  {
    city: "Providence", 
    name: "Thayer Street", 
    country: "US", 
    lng: -71.40074920654297, 
    lat: 41.82755661010742, 
    store_id: 9140
  }, 
  {
    city: "Manhasset", 
    name: "Manhasset", 
    country: "US", 
    lng: -73.70001220703125, 
    lat: 40.79768371582031, 
    store_id: 9141
  }, 
  {
    city: "Oceanside", 
    name: "The Sands (Oceanside)", 
    country: "US", 
    lng: -73.6381607055664, 
    lat: 40.62329864501953, 
    store_id: 9142
  }, 
  {
    city: "New Orleans", 
    name: "7700 Maple Street", 
    country: "US", 
    lng: -90.12969970703125, 
    lat: 29.941774368286133, 
    store_id: 9143
  }, 
  {
    city: "Denver", 
    name: "Hampden & Happy Canyon", 
    country: "US", 
    lng: -104.9281997680664, 
    lat: 39.65277862548828, 
    store_id: 9145
  }, 
  {
    city: "Durham", 
    name: "Super Target-Durham ST-1872", 
    country: "US", 
    lng: -78.95849609375, 
    lat: 35.966583251953125, 
    store_id: 9146
  }, 
  {
    city: "Farmingdale", 
    name: "Target Farmingdale T-1866", 
    country: "US", 
    lng: -73.41907501220703, 
    lat: 40.75175857543945, 
    store_id: 9147
  }, 
  {
    city: "Brooklyn", 
    name: "607 Brighton Beach Ave", 
    country: "US", 
    lng: -73.96112823486328, 
    lat: 40.57786560058594, 
    store_id: 9148
  }, 
  {
    city: "York", 
    name: "Target York West T-1875", 
    country: "US", 
    lng: -76.77835845947266, 
    lat: 39.964210510253906, 
    store_id: 9150
  }, 
  {
    city: "Simpsonville", 
    name: "Target Simpsonville T-1870", 
    country: "US", 
    lng: -82.25979614257812, 
    lat: 34.70591354370117, 
    store_id: 9151
  }, 
  {
    city: "Santa Ana", 
    name: "Bristol & Memory Lane", 
    country: "US", 
    lng: -117.88429260253906, 
    lat: 33.77358627319336, 
    store_id: 9152
  }, 
  {
    city: "Lancaster", 
    name: "Challenger Way & East Ave K", 
    country: "US", 
    lng: -118.11434936523438, 
    lat: 34.67530059814453, 
    store_id: 9153
  }, 
  {
    city: "Durango", 
    name: "College & Main-Durango", 
    country: "US", 
    lng: -107.88166046142578, 
    lat: 37.26979064941406, 
    store_id: 9155
  }, 
  {
    city: "Kennesaw", 
    name: "I-75 & Barrett Pkwy", 
    country: "US", 
    lng: -84.56430053710938, 
    lat: 34.0128173828125, 
    store_id: 9156
  }, 
  {
    city: "Lincolnwood", 
    name: "Touhy & Kostner", 
    country: "US", 
    lng: -87.7377700805664, 
    lat: 42.01197052001953, 
    store_id: 9157
  }, 
  {
    city: "Chicago", 
    name: "66 W. Washington - Daley Plaza", 
    country: "US", 
    lng: -87.6307601928711, 
    lat: 41.88386535644531, 
    store_id: 9158
  }, 
  {
    city: "Hollywood", 
    name: "Highland & Franklin", 
    country: "US", 
    lng: -118.33682250976562, 
    lat: 34.105350494384766, 
    store_id: 9159
  }, 
  {
    city: "San Francisco", 
    name: "27 Drumm Street", 
    country: "US", 
    lng: -122.39666748046875, 
    lat: 37.79393005371094, 
    store_id: 9160
  }, 
  {
    city: "Daly City", 
    name: "Mission St & Gambetta", 
    country: "US", 
    lng: -122.46296691894531, 
    lat: 37.697357177734375, 
    store_id: 9161
  }, 
  {
    city: "Costa Mesa", 
    name: "Harbor & Adams", 
    country: "US", 
    lng: -117.9197998046875, 
    lat: 33.67204284667969, 
    store_id: 9162
  }, 
  {
    city: "Sherman Oaks", 
    name: "Ventura & Noble", 
    country: "US", 
    lng: -118.4603500366211, 
    lat: 34.15269470214844, 
    store_id: 9164
  }, 
  {
    city: "San Jose", 
    name: "Princeton Plaza - San Jose", 
    country: "US", 
    lng: -121.88845825195312, 
    lat: 37.245826721191406, 
    store_id: 9166
  }, 
  {
    city: "Woodland Hills", 
    name: "Winnetka & Ventura", 
    country: "US", 
    lng: -118.56999206542969, 
    lat: 34.17068862915039, 
    store_id: 9168
  }, 
  {
    city: "San Francisco", 
    name: "123 Mission Street", 
    country: "US", 
    lng: -122.39451599121094, 
    lat: 37.79197311401367, 
    store_id: 9169
  }, 
  {
    city: "Phoenix", 
    name: "16th Street & Camelback", 
    country: "US", 
    lng: -112.04582977294922, 
    lat: 33.508758544921875, 
    store_id: 9170
  }, 
  {
    city: "San Diego", 
    name: "Scripps Ranch Village", 
    country: "US", 
    lng: -117.09918975830078, 
    lat: 32.935523986816406, 
    store_id: 9173
  }, 
  {
    city: "Clovis", 
    name: "175 West Shaw - Clovis", 
    country: "US", 
    lng: -119.712646484375, 
    lat: 36.808902740478516, 
    store_id: 9174
  }, 
  {
    city: "Littleton", 
    name: "Broadway & Littleton", 
    country: "US", 
    lng: -104.98927307128906, 
    lat: 39.61302947998047, 
    store_id: 9177
  }, 
  {
    city: "Springfield", 
    name: "Price Cutter-Springfield #51", 
    country: "US", 
    lng: -93.27660369873047, 
    lat: 37.136146545410156, 
    store_id: 9178
  }, 
  {
    city: "Addison", 
    name: "Quorum", 
    country: "US", 
    lng: -96.82447052001953, 
    lat: 32.953468322753906, 
    store_id: 9179
  }, 
  {
    city: "Katy", 
    name: "Mason & Merrymount", 
    country: "US", 
    lng: -95.75021362304688, 
    lat: 29.77682113647461, 
    store_id: 9180
  }, 
  {
    city: "Fort Worth", 
    name: "Hulen & Bellaire (Ft Worth)", 
    country: "US", 
    lng: -97.38965606689453, 
    lat: 32.70664978027344, 
    store_id: 9182
  }, 
  {
    city: "Salinas", 
    name: "Davis & Westridge Pkwy", 
    country: "US", 
    lng: -121.66724395751953, 
    lat: 36.70440673828125, 
    store_id: 9187
  }, 
  {
    city: "Farmingdale", 
    name: "Farmingdale", 
    country: "US", 
    lng: -73.42446899414062, 
    lat: 40.72723388671875, 
    store_id: 9188
  }, 
  {
    city: "Torrance", 
    name: "Artesia & Prairie, Torrance", 
    country: "US", 
    lng: -118.3431167602539, 
    lat: 33.87314224243164, 
    store_id: 9189
  }, 
  {
    city: "Lewis", 
    name: "Lewis, Neverland Drive", 
    country: "US", 
    lng: -83.01954650878906, 
    lat: 40.1579475402832, 
    store_id: 9190
  }, 
  {
    city: "Bremerton", 
    name: "Safeway-Bremerton #1524", 
    country: "US", 
    lng: -122.63054656982422, 
    lat: 47.62113952636719, 
    store_id: 9191
  }, 
  {
    city: "San Jose", 
    name: "Santana Row", 
    country: "US", 
    lng: -121.94912719726562, 
    lat: 37.320945739746094, 
    store_id: 9192
  }, 
  {
    city: "Bakersfield", 
    name: "Stockdale Village- Bakersfield", 
    country: "US", 
    lng: -119.06139373779297, 
    lat: 35.35593032836914, 
    store_id: 9195
  }, 
  {
    city: "Woodinville", 
    name: "Woodinville", 
    country: "US", 
    lng: -122.15174102783203, 
    lat: 47.75344467163086, 
    store_id: 9197
  }, 
  {
    city: "Alexandria", 
    name: "Pinecrest", 
    country: "US", 
    lng: -77.16197967529297, 
    lat: 38.823219299316406, 
    store_id: 9198
  }, 
  {
    city: "Tigard", 
    name: "Washington Square", 
    country: "US", 
    lng: -122.7803726196289, 
    lat: 45.450992584228516, 
    store_id: 9199
  }, 
  {
    city: "Marlborough", 
    name: "Marlborough Route 20", 
    country: "US", 
    lng: -71.58915710449219, 
    lat: 42.3393440246582, 
    store_id: 9200
  }, 
  {
    city: "Fresno", 
    name: "Target North Fresno T-911", 
    country: "US", 
    lng: -119.79067993164062, 
    lat: 36.84717559814453, 
    store_id: 9202
  }, 
  {
    city: "Washington", 
    name: "Liberty Place", 
    country: "US", 
    lng: -77.0217056274414, 
    lat: 38.89414596557617, 
    store_id: 9203
  }, 
  {
    city: "New Canaan", 
    name: "New Canaan", 
    country: "US", 
    lng: -73.49507141113281, 
    lat: 41.14643096923828, 
    store_id: 9204
  }, 
  {
    city: "Los Angeles", 
    name: "Westwood & Lindbrook", 
    country: "US", 
    lng: -118.4447250366211, 
    lat: 34.059425354003906, 
    store_id: 9205
  }, 
  {
    city: "New York", 
    name: "One Penn Plaza", 
    country: "US", 
    lng: -73.99276733398438, 
    lat: 40.751617431640625, 
    store_id: 9206
  }, 
  {
    city: "Woodstock", 
    name: "Towne Lake Parkway", 
    country: "US", 
    lng: -84.55213165283203, 
    lat: 34.10823059082031, 
    store_id: 9207
  }, 
  {
    city: "Alpharetta", 
    name: "Northpoint Mall", 
    country: "US", 
    lng: -84.29315185546875, 
    lat: 34.04875946044922, 
    store_id: 9208
  }, 
  {
    city: "Milpitas", 
    name: "McCarthy Ranch", 
    country: "US", 
    lng: -121.92098999023438, 
    lat: 37.42833709716797, 
    store_id: 9209
  }, 
  {
    city: "Buffalo", 
    name: "235 Delaware Ave", 
    country: "US", 
    lng: -78.87623596191406, 
    lat: 42.89081573486328, 
    store_id: 9211
  }, 
  {
    city: "Alpharetta", 
    name: "Haynes Bridge Village", 
    country: "US", 
    lng: -84.2696533203125, 
    lat: 34.02177810668945, 
    store_id: 9212
  }, 
  {
    city: "Decatur", 
    name: "Decatur Square", 
    country: "US", 
    lng: -84.29582977294922, 
    lat: 33.775489807128906, 
    store_id: 9213
  }, 
  {
    city: "Charlotte", 
    name: "Morrocroft Village - HT", 
    country: "US", 
    lng: -80.82522583007812, 
    lat: 35.153411865234375, 
    store_id: 9214
  }, 
  {
    city: "Watertown", 
    name: "Watertown - Mt. Auburn", 
    country: "US", 
    lng: -71.18108367919922, 
    lat: 42.36642837524414, 
    store_id: 9216
  }, 
  {
    city: "New York", 
    name: "Liberty & Nassau", 
    country: "US", 
    lng: -74.00950622558594, 
    lat: 40.708740234375, 
    store_id: 9218
  }, 
  {
    city: "Ridgecrest", 
    name: "Albertsons-Ridgecrest #6331", 
    country: "US", 
    lng: -117.67437744140625, 
    lat: 35.60577392578125, 
    store_id: 9219
  }, 
  {
    city: "Kennesaw", 
    name: "U.S. 41 @ Acworth", 
    country: "US", 
    lng: -84.65545654296875, 
    lat: 34.02985382080078, 
    store_id: 9220
  }, 
  {
    city: "Lafayette", 
    name: "Super Target Lafayette ST-1473", 
    country: "US", 
    lng: -92.04937744140625, 
    lat: 30.160390853881836, 
    store_id: 9221
  }, 
  {
    city: "San Jose", 
    name: "Capitol & McLaughlin", 
    country: "US", 
    lng: -121.82186889648438, 
    lat: 37.300209045410156, 
    store_id: 9222
  }, 
  {
    city: "Pittsburgh", 
    name: "Greentree Road", 
    country: "US", 
    lng: -80.04566192626953, 
    lat: 40.4190788269043, 
    store_id: 9223
  }, 
  {
    city: "Eagan", 
    name: "2040 Cliff Road - Eagan", 
    country: "US", 
    lng: -93.21038818359375, 
    lat: 44.78962326049805, 
    store_id: 9224
  }, 
  {
    city: "North Olmsted", 
    name: "Great Northern Mall", 
    country: "US", 
    lng: -81.906982421875, 
    lat: 41.4162712097168, 
    store_id: 9225
  }, 
  {
    city: "Fairfield", 
    name: "Texas & Jefferson - Fairfield", 
    country: "US", 
    lng: -122.04209899902344, 
    lat: 38.24942398071289, 
    store_id: 9226
  }, 
  {
    city: "Redwood City", 
    name: "Marsh & Florence - Redwood City", 
    country: "US", 
    lng: -122.18590545654297, 
    lat: 37.47868347167969, 
    store_id: 9227
  }, 
  {
    city: "Scottsdale", 
    name: "Frank Lloyd Wright & Thompson Peak", 
    country: "US", 
    lng: -111.87374877929688, 
    lat: 33.621368408203125, 
    store_id: 9229
  }, 
  {
    city: "New York", 
    name: "50th & Lex", 
    country: "US", 
    lng: -73.9726333618164, 
    lat: 40.75686264038086, 
    store_id: 9231
  }, 
  {
    city: "Las Vegas", 
    name: "Rainbow & Silverstream, Las Vegas", 
    country: "US", 
    lng: -115.24263763427734, 
    lat: 36.17940902709961, 
    store_id: 9232
  }, 
  {
    city: "Monona", 
    name: "Monona & Broadway", 
    country: "US", 
    lng: -89.3240966796875, 
    lat: 43.04738998413086, 
    store_id: 9233
  }, 
  {
    city: "Orinda", 
    name: "Moraga & Bryant", 
    country: "US", 
    lng: -122.18244934082031, 
    lat: 37.87895965576172, 
    store_id: 9234
  }, 
  {
    city: "St Louis", 
    name: "STL - Baggage Claim 2", 
    country: "US", 
    lng: -90.3662338256836, 
    lat: 38.742950439453125, 
    store_id: 9235
  }, 
  {
    city: "Greenwood Village", 
    name: "Orchard & Willow", 
    country: "US", 
    lng: -104.889404296875, 
    lat: 39.61005401611328, 
    store_id: 9236
  }, 
  {
    city: "South Portland", 
    name: "Maine Crossing", 
    country: "US", 
    lng: -70.34525299072266, 
    lat: 43.63420486450195, 
    store_id: 9238
  }, 
  {
    city: "Houston", 
    name: "Echo Lane & I-10", 
    country: "US", 
    lng: -95.5217514038086, 
    lat: 29.78229522705078, 
    store_id: 9240
  }, 
  {
    city: "Arlington", 
    name: "Virginia Square Metro", 
    country: "US", 
    lng: -77.1036605834961, 
    lat: 38.88302993774414, 
    store_id: 9241
  }, 
  {
    city: "Reno", 
    name: "Damonte Ranch & Virginia - Reno", 
    country: "US", 
    lng: -119.75474548339844, 
    lat: 39.42029571533203, 
    store_id: 9242
  }, 
  {
    city: "Portland", 
    name: "Fred Meyer-Staduim #360", 
    country: "US", 
    lng: -122.69297790527344, 
    lat: 45.52382278442383, 
    store_id: 9243
  }, 
  {
    city: "Oklahoma City", 
    name: "Rockwell & Northwest Hwy", 
    country: "US", 
    lng: -97.63789367675781, 
    lat: 35.556941986083984, 
    store_id: 9244
  }, 
  {
    city: "Los Angeles", 
    name: "National & Castle Heights", 
    country: "US", 
    lng: -118.4009780883789, 
    lat: 34.03105163574219, 
    store_id: 9247
  }, 
  {
    city: "Colorado Springs", 
    name: "Super Target Colorado SpringsST1501", 
    country: "US", 
    lng: -104.71805572509766, 
    lat: 38.888397216796875, 
    store_id: 9248
  }, 
  {
    city: "San Ramon", 
    name: "Target San Ramon T-949", 
    country: "US", 
    lng: -121.96388244628906, 
    lat: 37.761878967285156, 
    store_id: 9249
  }, 
  {
    city: "Norco", 
    name: "Target Norco T-736", 
    country: "US", 
    lng: -117.56271362304688, 
    lat: 33.900962829589844, 
    store_id: 9250
  }, 
  {
    city: "Sunrise", 
    name: "Sawgrass Mills Mall West", 
    country: "US", 
    lng: -80.32301330566406, 
    lat: 26.150453567504883, 
    store_id: 9251
  }, 
  {
    city: "Schiller Park", 
    name: "O'Hare Travel Oasis Space K2", 
    country: "US", 
    lng: -87.88101196289062, 
    lat: 41.953025817871094, 
    store_id: 9252
  }, 
  {
    city: "Belvidere", 
    name: "Belvidere Travel Oasis Space K2", 
    country: "US", 
    lng: -88.84170532226562, 
    lat: 42.23464584350586, 
    store_id: 9253
  }, 
  {
    city: "Rocky Hill", 
    name: "Rocky Hill", 
    country: "US", 
    lng: -72.67767333984375, 
    lat: 41.658721923828125, 
    store_id: 9255
  }, 
  {
    city: "Greenwood Village", 
    name: "King Soopers-Greenwood Village #96", 
    country: "US", 
    lng: -104.92110443115234, 
    lat: 39.60791015625, 
    store_id: 9256
  }, 
  {
    city: "Georgetown", 
    name: "Austin Ave & Williams Dr", 
    country: "US", 
    lng: -97.67744445800781, 
    lat: 30.649160385131836, 
    store_id: 9258
  }, 
  {
    city: "Delray Beach", 
    name: "Via Addison", 
    country: "US", 
    lng: -80.14600372314453, 
    lat: 26.427026748657227, 
    store_id: 9259
  }, 
  {
    city: "El Paso", 
    name: "I-10 & George Dieter Dr", 
    country: "US", 
    lng: -106.30354309082031, 
    lat: 31.72403335571289, 
    store_id: 9260
  }, 
  {
    city: "Chula Vista", 
    name: "Vons-Chula Vista #2071", 
    country: "US", 
    lng: -116.9664306640625, 
    lat: 32.64601516723633, 
    store_id: 9245
  }, 
  {
    city: "St Louis", 
    name: "STL - East Terminal", 
    country: "US", 
    lng: -90.36541748046875, 
    lat: 38.74251174926758, 
    store_id: 9262
  }, 
  {
    city: "Saint Petersburg", 
    name: "4th St. & 9th Ave.", 
    country: "US", 
    lng: -82.6386947631836, 
    lat: 27.78142738342285, 
    store_id: 9265
  }, 
  {
    city: "New York", 
    name: "75th & Broadway", 
    country: "US", 
    lng: -73.98107147216797, 
    lat: 40.7810173034668, 
    store_id: 9267
  }, 
  {
    city: "Kansas City", 
    name: "Super Target-Kansas City T-1455", 
    country: "US", 
    lng: -94.46393585205078, 
    lat: 39.2472038269043, 
    store_id: 9268
  }, 
  {
    city: "Plano", 
    name: "Custer & Parker", 
    country: "US", 
    lng: -96.73192596435547, 
    lat: 33.040428161621094, 
    store_id: 9269
  }, 
  {
    city: "San Francisco", 
    name: "Stonestown Galleria", 
    country: "US", 
    lng: -122.47661590576172, 
    lat: 37.727989196777344, 
    store_id: 9270
  }, 
  {
    city: "Greenwood Village", 
    name: "King Soopers-Greenwood Village #100", 
    country: "US", 
    lng: -104.88409423828125, 
    lat: 39.626094818115234, 
    store_id: 9271
  }, 
  {
    city: "Las Vegas", 
    name: "Albertsons-Las Vegas #6091", 
    country: "US", 
    lng: -115.0455322265625, 
    lat: 36.15849685668945, 
    store_id: 9272
  }, 
  {
    city: "Bloomfield Hills", 
    name: "Maple & Lahser", 
    country: "US", 
    lng: -83.26202392578125, 
    lat: 42.5459098815918, 
    store_id: 9274
  }, 
  {
    city: "San Jose", 
    name: "Stevens Creek & Lawrence", 
    country: "US", 
    lng: -121.99405670166016, 
    lat: 37.32246017456055, 
    store_id: 9275
  }, 
  {
    city: "Frisco", 
    name: "Preston and Warren", 
    country: "US", 
    lng: -96.80675506591797, 
    lat: 33.10824966430664, 
    store_id: 9276
  }, 
  {
    city: "Chicago", 
    name: "Logan & California", 
    country: "US", 
    lng: -87.69735717773438, 
    lat: 41.92792892456055, 
    store_id: 9277
  }, 
  {
    city: "Merced", 
    name: "Yosemite & Paulson - Merced", 
    country: "US", 
    lng: -120.4603271484375, 
    lat: 37.33232116699219, 
    store_id: 9278
  }, 
  {
    city: "Scottsdale", 
    name: "Safeway-Phoenix #1491", 
    country: "US", 
    lng: -111.91041564941406, 
    lat: 33.51044464111328, 
    store_id: 9279
  }, 
  {
    city: "Phoenix", 
    name: "Scottsdale & Loop 101, Scottsdale", 
    country: "US", 
    lng: -111.92927551269531, 
    lat: 33.655521392822266, 
    store_id: 9280
  }, 
  {
    city: "Wilmington", 
    name: "Target Brandywine T-1146", 
    country: "US", 
    lng: -75.540283203125, 
    lat: 39.83076477050781, 
    store_id: 9281
  }, 
  {
    city: "Sarasota", 
    name: "Fruitville Rd & Honore Ave", 
    country: "US", 
    lng: -82.46320343017578, 
    lat: 27.33932876586914, 
    store_id: 9282
  }, 
  {
    city: "Denver", 
    name: "King Soopers-Denver #19", 
    country: "US", 
    lng: -105.04830169677734, 
    lat: 39.65565490722656, 
    store_id: 9283
  }, 
  {
    city: "Novi", 
    name: "Kroger-Novi #632", 
    country: "US", 
    lng: -83.518798828125, 
    lat: 42.491668701171875, 
    store_id: 9284
  }, 
  {
    city: "Hattiesburg", 
    name: "U of S. MS/Hattisburg -Cook Library", 
    country: "US", 
    lng: -89.33444213867188, 
    lat: 31.327613830566406, 
    store_id: 9285
  }, 
  {
    city: "Williamsburg", 
    name: "FarmFresh-Williamsburg #321", 
    country: "US", 
    lng: -76.68055725097656, 
    lat: 37.27572250366211, 
    store_id: 9286
  }, 
  {
    city: "Surprise", 
    name: "Safeway-Sun City West #1520", 
    country: "US", 
    lng: -112.37320709228516, 
    lat: 33.655094146728516, 
    store_id: 9287
  }, 
  {
    city: "Richmond", 
    name: "Richmond Pkwy & San Pablo", 
    country: "US", 
    lng: -122.33487701416016, 
    lat: 37.99029541015625, 
    store_id: 9288
  }, 
  {
    city: "Chandler", 
    name: "54th St. & Ray Rd., Chandler", 
    country: "US", 
    lng: -111.96822357177734, 
    lat: 33.3173828125, 
    store_id: 9289
  }, 
  {
    city: "Houston", 
    name: "Westheimer & Post Oak", 
    country: "US", 
    lng: -95.46063232421875, 
    lat: 29.74118995666504, 
    store_id: 9290
  }, 
  {
    city: "Hawthorne", 
    name: "Rosecrans & Oceangate, Hawthorne", 
    country: "US", 
    lng: -118.36676025390625, 
    lat: 33.90143966674805, 
    store_id: 9292
  }, 
  {
    city: "West Lafayette", 
    name: "Wabash Landing", 
    country: "US", 
    lng: -86.90176391601562, 
    lat: 40.42146301269531, 
    store_id: 9294
  }, 
  {
    city: "Chicago", 
    name: "1900 W. Montrose", 
    country: "US", 
    lng: -87.6761703491211, 
    lat: 41.96162414550781, 
    store_id: 9295
  }, 
  {
    city: "Marietta", 
    name: "E. Piedmont", 
    country: "US", 
    lng: -84.48052978515625, 
    lat: 33.973548889160156, 
    store_id: 9296
  }, 
  {
    city: "Bethesda", 
    name: "Sumner Place", 
    country: "US", 
    lng: -77.11836242675781, 
    lat: 38.9493522644043, 
    store_id: 9297
  }, 
  {
    city: "Phoenix", 
    name: "44th Street & Indian School", 
    country: "US", 
    lng: -111.98829650878906, 
    lat: 33.4952507019043, 
    store_id: 9298
  }, 
  {
    city: "Hurst", 
    name: "Super Target Hurst ST-1766 #72", 
    country: "US", 
    lng: -97.183837890625, 
    lat: 32.836666107177734, 
    store_id: 9299
  }, 
  {
    city: "Coppell", 
    name: "Denton Tap & Sandy Lake Rd.", 
    country: "US", 
    lng: -96.99266815185547, 
    lat: 32.97117614746094, 
    store_id: 9300
  }, 
  {
    city: "San Francisco", 
    name: "Levi's Plaza at Sansome", 
    country: "US", 
    lng: -122.40300750732422, 
    lat: 37.80305480957031, 
    store_id: 9302
  }, 
  {
    city: "Chicago", 
    name: "6738 N. Sheridan - Rodgers Park", 
    country: "US", 
    lng: -87.66119384765625, 
    lat: 42.00465774536133, 
    store_id: 9303
  }, 
  {
    city: "West Hills", 
    name: "Fallbrook & Victory", 
    country: "US", 
    lng: -118.6242446899414, 
    lat: 34.18674087524414, 
    store_id: 9304
  }, 
  {
    city: "Phoenix", 
    name: "Albertsons-Phoenix #985", 
    country: "US", 
    lng: -112.02972412109375, 
    lat: 33.6529541015625, 
    store_id: 9305
  }, 
  {
    city: "Burleson", 
    name: "Albertsons-Burleson #4279", 
    country: "US", 
    lng: -97.3218994140625, 
    lat: 32.564640045166016, 
    store_id: 9306
  }, 
  {
    city: "Las Vegas", 
    name: "Albertsons-Las Vegas #6006", 
    country: "US", 
    lng: -115.13804626464844, 
    lat: 36.0122184753418, 
    store_id: 9307
  }, 
  {
    city: "Chicago", 
    name: "W. Bryn Mawr & Winthrop - Edgewater", 
    country: "US", 
    lng: -87.6578140258789, 
    lat: 41.98381805419922, 
    store_id: 9310
  }, 
  {
    city: "Waipahu", 
    name: "Waikele Premium Outlets", 
    country: "US", 
    lng: -158.00685119628906, 
    lat: 21.399518966674805, 
    store_id: 9311
  }, 
  {
    city: "Boston", 
    name: "Two Atlantic Avenue", 
    country: "US", 
    lng: -71.05082702636719, 
    lat: 42.363975524902344, 
    store_id: 9315
  }, 
  {
    city: "Phoenix", 
    name: "7th Street & Thunderbird", 
    country: "US", 
    lng: -112.06546020507812, 
    lat: 33.606807708740234, 
    store_id: 9317
  }, 
  {
    city: "Frisco", 
    name: "Stonebrier Mall", 
    country: "US", 
    lng: -96.81192779541016, 
    lat: 33.09916305541992, 
    store_id: 9318
  }, 
  {
    city: "Carson City", 
    name: "Carson St & College Pkwy-Carson Cty", 
    country: "US", 
    lng: -119.7724609375, 
    lat: 39.1877555847168, 
    store_id: 9322
  }, 
  {
    city: "Ellicott City", 
    name: "Safeway-Ellicott City #1459", 
    country: "US", 
    lng: -76.81868743896484, 
    lat: 39.25148010253906, 
    store_id: 9324
  }, 
  {
    city: "Lakeville", 
    name: "Super Target Lakeville ST-1484", 
    country: "US", 
    lng: -93.2894058227539, 
    lat: 44.6846923828125, 
    store_id: 9325
  }, 
  {
    city: "Culver City", 
    name: "Target Culver City T-198", 
    country: "US", 
    lng: -118.39341735839844, 
    lat: 33.99916458129883, 
    store_id: 9312
  }, 
  {
    city: "Littleton", 
    name: "King Soopers-Littleton #25", 
    country: "US", 
    lng: -105.13066864013672, 
    lat: 39.58185958862305, 
    store_id: 9326
  }, 
  {
    city: "Aurora", 
    name: "Iliff & Buckley", 
    country: "US", 
    lng: -104.78843688964844, 
    lat: 39.67277526855469, 
    store_id: 9327
  }, 
  {
    city: "Erie", 
    name: "Safeway-Erie #1667", 
    country: "US", 
    lng: -105.1009750366211, 
    lat: 40.01654815673828, 
    store_id: 9328
  }, 
  {
    city: "Portland", 
    name: "Fred Meyer-Johnson Creek #153", 
    country: "US", 
    lng: -122.58067321777344, 
    lat: 45.458560943603516, 
    store_id: 9329
  }, 
  {
    city: "Kansas City", 
    name: "Ward Parkway", 
    country: "US", 
    lng: -94.607177734375, 
    lat: 38.97030258178711, 
    store_id: 9330
  }, 
  {
    city: "Frederick", 
    name: "Westview", 
    country: "US", 
    lng: -77.41156768798828, 
    lat: 39.375919342041016, 
    store_id: 9331
  }, 
  {
    city: "Charlotte", 
    name: "Promenade", 
    country: "US", 
    lng: -80.77445220947266, 
    lat: 35.0639533996582, 
    store_id: 9334
  }, 
  {
    city: "Baker City", 
    name: "Safeway-Baker City #4381", 
    country: "US", 
    lng: -117.81901550292969, 
    lat: 44.78097915649414, 
    store_id: 9335
  }, 
  {
    city: "Stockton", 
    name: "Safeway-Stockton #2707", 
    country: "US", 
    lng: -121.32124328613281, 
    lat: 38.00870895385742, 
    store_id: 9337
  }, 
  {
    city: "City of Commerce", 
    name: "Citadel Outlets, City of Commerce", 
    country: "US", 
    lng: -118.15258026123047, 
    lat: 34.005611419677734, 
    store_id: 9338
  }, 
  {
    city: "Salinas", 
    name: "Safeway-Salinas #2654", 
    country: "US", 
    lng: -121.62062072753906, 
    lat: 36.6991081237793, 
    store_id: 9339
  }, 
  {
    city: "Sonora", 
    name: "Sonora Crossroads - Sonora", 
    country: "US", 
    lng: -120.36714935302734, 
    lat: 37.97279357910156, 
    store_id: 9342
  }, 
  {
    city: "Sacramento", 
    name: "Howe & Fair Oaks - Sacramento", 
    country: "US", 
    lng: -121.41381072998047, 
    lat: 38.5733528137207, 
    store_id: 9343
  }, 
  {
    city: "Bell", 
    name: "Atlantic & Florence, Bell", 
    country: "US", 
    lng: -118.18838500976562, 
    lat: 33.9705924987793, 
    store_id: 9344
  }, 
  {
    city: "Evanston", 
    name: "Chicago & Main", 
    country: "US", 
    lng: -87.6788558959961, 
    lat: 42.034122467041016, 
    store_id: 9346
  }, 
  {
    city: "New York", 
    name: "Spring Street at Crosby St", 
    country: "US", 
    lng: -73.99795532226562, 
    lat: 40.7225341796875, 
    store_id: 9347
  }, 
  {
    city: "Moses Lake", 
    name: "Moses Lake", 
    country: "US", 
    lng: -119.24710845947266, 
    lat: 47.101436614990234, 
    store_id: 9349
  }, 
  {
    city: "Concord", 
    name: "Oak Grove & Treat", 
    country: "US", 
    lng: -122.02417755126953, 
    lat: 37.93849563598633, 
    store_id: 9350
  }, 
  {
    city: "New York", 
    name: "41st & Madison", 
    country: "US", 
    lng: -73.97972106933594, 
    lat: 40.751956939697266, 
    store_id: 9351
  }, 
  {
    city: "Tustin", 
    name: "Redhill & El Camino Real", 
    country: "US", 
    lng: -117.81513977050781, 
    lat: 33.734317779541016, 
    store_id: 9352
  }, 
  {
    city: "Los Angeles", 
    name: "Sunset & Gower", 
    country: "US", 
    lng: -118.32249450683594, 
    lat: 34.097347259521484, 
    store_id: 9353
  }, 
  {
    city: "Lake Forest", 
    name: "Bake & Trabuco", 
    country: "US", 
    lng: -117.70188903808594, 
    lat: 33.65577697753906, 
    store_id: 9355
  }, 
  {
    city: "Fountain Valley", 
    name: "Brookhurst & Edinger", 
    country: "US", 
    lng: -117.95497131347656, 
    lat: 33.72959518432617, 
    store_id: 9356
  }, 
  {
    city: "Buffalo", 
    name: "Elmwood Avenue", 
    country: "US", 
    lng: -78.87681579589844, 
    lat: 42.92259979248047, 
    store_id: 9357
  }, 
  {
    city: "Santa Barbara", 
    name: "800 State Street", 
    country: "US", 
    lng: -119.69947814941406, 
    lat: 34.41990661621094, 
    store_id: 9358
  }, 
  {
    city: "Washington", 
    name: "Dupont Circle", 
    country: "US", 
    lng: -77.04366302490234, 
    lat: 38.91054916381836, 
    store_id: 9359
  }, 
  {
    city: "Arlington", 
    name: "Pentagon Centre", 
    country: "US", 
    lng: -77.05924987792969, 
    lat: 38.86182403564453, 
    store_id: 9361
  }, 
  {
    city: "Highland Park", 
    name: "1849 Green Bay Rd-Renaissance Place", 
    country: "US", 
    lng: -87.80236053466797, 
    lat: 42.185611724853516, 
    store_id: 9362
  }, 
  {
    city: "Washington", 
    name: "5185 MacArthur Blvd.", 
    country: "US", 
    lng: -77.10276794433594, 
    lat: 38.92674255371094, 
    store_id: 9363
  }, 
  {
    city: "Lincoln", 
    name: "12th and P", 
    country: "US", 
    lng: -96.70380401611328, 
    lat: 40.81454849243164, 
    store_id: 9364
  }, 
  {
    city: "Atlantic City", 
    name: "Atlantic City, The Walk", 
    country: "US", 
    lng: -74.43708038330078, 
    lat: 39.36077880859375, 
    store_id: 9365
  }, 
  {
    city: "Las Vegas", 
    name: "Rio Hotel & Casino Star Deli", 
    country: "US", 
    lng: -115.18721008300781, 
    lat: 36.11820602416992, 
    store_id: 9367
  }, 
  {
    city: "Laughlin", 
    name: "Harrahs Laughlin Club Cappucino", 
    country: "US", 
    lng: -114.57706451416016, 
    lat: 35.14447784423828, 
    store_id: 9368
  }, 
  {
    city: "Brunswick", 
    name: "Brunswick, Center Road", 
    country: "US", 
    lng: -81.80717468261719, 
    lat: 41.23782730102539, 
    store_id: 9370
  }, 
  {
    city: "Morgan Hill", 
    name: "Safeway-Morgan Hill #1455", 
    country: "US", 
    lng: -121.6368408203125, 
    lat: 37.12879943847656, 
    store_id: 9372
  }, 
  {
    city: "Albany", 
    name: "Safeway-Albany #1659", 
    country: "US", 
    lng: -123.08134460449219, 
    lat: 44.62745666503906, 
    store_id: 9373
  }, 
  {
    city: "Centennial", 
    name: "Safeway-Aurora #1933", 
    country: "US", 
    lng: -104.75235748291016, 
    lat: 39.61247253417969, 
    store_id: 9374
  }, 
  {
    city: "Fountain", 
    name: "Safeway-Fountain #1975", 
    country: "US", 
    lng: -104.69928741455078, 
    lat: 38.71653366088867, 
    store_id: 9377
  }, 
  {
    city: "Forest Lake", 
    name: "Forest Lake", 
    country: "US", 
    lng: -93.00933074951172, 
    lat: 45.283416748046875, 
    store_id: 9379
  }, 
  {
    city: "Roseville", 
    name: "Roseville & Sunrise, Roseville", 
    country: "US", 
    lng: -121.24987030029297, 
    lat: 38.76128387451172, 
    store_id: 9380
  }, 
  {
    city: "Flagstaff", 
    name: "Safeway - Flagstaff #2028", 
    country: "US", 
    lng: -111.6630630493164, 
    lat: 35.18976593017578, 
    store_id: 9381
  }, 
  {
    city: "Reno", 
    name: "Caughlin & McCarran - Reno", 
    country: "US", 
    lng: -119.85287475585938, 
    lat: 39.4844970703125, 
    store_id: 9383
  }, 
  {
    city: "Calabasas", 
    name: "Albertsons-Calabasas #6335", 
    country: "US", 
    lng: -118.70024871826172, 
    lat: 34.144142150878906, 
    store_id: 9385
  }, 
  {
    city: "Lewisville", 
    name: "Super Target Lewisville ST-1395", 
    country: "US", 
    lng: -96.97098541259766, 
    lat: 33.01213836669922, 
    store_id: 9386
  }, 
  {
    city: "Glendale", 
    name: "Albertsons-Glendale #941", 
    country: "US", 
    lng: -112.1673583984375, 
    lat: 33.59730529785156, 
    store_id: 9390
  }, 
  {
    city: "Katy", 
    name: "Randall's - Katy #3070", 
    country: "US", 
    lng: -95.75, 
    lat: 29.760028839111328, 
    store_id: 9392
  }, 
  {
    city: "Atlanta", 
    name: "Kroger-Atlanta #350", 
    country: "US", 
    lng: -84.38309478759766, 
    lat: 33.88963317871094, 
    store_id: 9393
  }, 
  {
    city: "Des Peres", 
    name: "West County Mall - Floor 1 South", 
    country: "US", 
    lng: -90.44740295410156, 
    lat: 38.60026168823242, 
    store_id: 9394
  }, 
  {
    city: "East Northport", 
    name: "East Northport, Rte. 25", 
    country: "US", 
    lng: -73.3238754272461, 
    lat: 40.839351654052734, 
    store_id: 9395
  }, 
  {
    city: "Lemoore", 
    name: "Lemoore & Cinnamon, Lemoore", 
    country: "US", 
    lng: -119.78114318847656, 
    lat: 36.3072509765625, 
    store_id: 9396
  }, 
  {
    city: "Hacienda Heights", 
    name: "Vons-Hacienda Heights #3086", 
    country: "US", 
    lng: -117.96812438964844, 
    lat: 33.99538803100586, 
    store_id: 9397
  }, 
  {
    city: "Los Angeles", 
    name: "Vons-Los Angeles #2077", 
    country: "US", 
    lng: -118.42708587646484, 
    lat: 34.026615142822266, 
    store_id: 9398
  }, 
  {
    city: "Spokane", 
    name: "12519 N. Division", 
    country: "US", 
    lng: -117.4048843383789, 
    lat: 47.77134704589844, 
    store_id: 9399
  }, 
  {
    city: "Santa Ana", 
    name: "Vons - Santa Ana #1626", 
    country: "US", 
    lng: -117.8869400024414, 
    lat: 33.6983528137207, 
    store_id: 9400
  }, 
  {
    city: "Burbank", 
    name: "Vons-Burbank #3083", 
    country: "US", 
    lng: -118.345703125, 
    lat: 34.15510559082031, 
    store_id: 9401
  }, 
  {
    city: "Agoura Hills", 
    name: "Vons-Agoura Hills #2001", 
    country: "US", 
    lng: -118.75862884521484, 
    lat: 34.15333938598633, 
    store_id: 9402
  }, 
  {
    city: "Windsor", 
    name: "Safeway - Windsor #1434", 
    country: "US", 
    lng: -122.80638122558594, 
    lat: 38.55132293701172, 
    store_id: 9403
  }, 
  {
    city: "San Francisco", 
    name: "Safeway - San Francisco #667", 
    country: "US", 
    lng: -122.43876647949219, 
    lat: 37.74374008178711, 
    store_id: 9404
  }, 
  {
    city: "Hemet", 
    name: "Target Hemet T-761", 
    country: "US", 
    lng: -117.00902557373047, 
    lat: 33.74600601196289, 
    store_id: 9405
  }, 
  {
    city: "Newark", 
    name: "Safeway - Newark #1224", 
    country: "US", 
    lng: -122.04901123046875, 
    lat: 37.55226516723633, 
    store_id: 9406
  }, 
  {
    city: "Huntington Beach", 
    name: "Vons-Huntington Beach #2090", 
    country: "US", 
    lng: -118.02550506591797, 
    lat: 33.72983932495117, 
    store_id: 9407
  }, 
  {
    city: "Westchester", 
    name: "Follett - Westbrook Corp Center", 
    country: "US", 
    lng: -87.90233612060547, 
    lat: 41.845558166503906, 
    store_id: 9409
  }, 
  {
    city: "Evanston", 
    name: "Target Evanston T-927", 
    country: "US", 
    lng: -87.67689514160156, 
    lat: 42.01919937133789, 
    store_id: 9410
  }, 
  {
    city: "Elkhart", 
    name: "Martins-Elkhart #17", 
    country: "US", 
    lng: -85.92759704589844, 
    lat: 41.70209884643555, 
    store_id: 9411
  }, 
  {
    city: "Charlotte", 
    name: "Target Charlotte T-1087", 
    country: "US", 
    lng: -80.81346893310547, 
    lat: 35.06022262573242, 
    store_id: 9412
  }, 
  {
    city: "Lancaster", 
    name: "Kroger-Lancaster #931", 
    country: "US", 
    lng: -82.579345703125, 
    lat: 39.7158088684082, 
    store_id: 9413
  }, 
  {
    city: "Florence", 
    name: "Safeway - Florence #363", 
    country: "US", 
    lng: -124.10308837890625, 
    lat: 43.97299575805664, 
    store_id: 9414
  }, 
  {
    city: "Arlington", 
    name: "Safeway - Arlington #534", 
    country: "US", 
    lng: -122.1815414428711, 
    lat: 48.151634216308594, 
    store_id: 9415
  }, 
  {
    city: "Yakima", 
    name: "Safeway-Yakima #502", 
    country: "US", 
    lng: -120.5847396850586, 
    lat: 46.59906005859375, 
    store_id: 9416
  }, 
  {
    city: "Austin", 
    name: "Parmer & McNeil", 
    country: "US", 
    lng: -97.74366760253906, 
    lat: 30.444868087768555, 
    store_id: 9417
  }, 
  {
    city: "South San Francisco", 
    name: "Grand & Linden", 
    country: "US", 
    lng: -122.41094970703125, 
    lat: 37.655277252197266, 
    store_id: 9418
  }, 
  {
    city: "Petaluma", 
    name: "Lakeville & McDowell", 
    country: "US", 
    lng: -122.5994644165039, 
    lat: 38.23370361328125, 
    store_id: 9419
  }, 
  {
    city: "Menlo Park", 
    name: "Sand Hill & Sharon Park", 
    country: "US", 
    lng: -122.19770050048828, 
    lat: 37.42350387573242, 
    store_id: 9420
  }, 
  {
    city: "Sarasota", 
    name: "1st St & Central Ave", 
    country: "US", 
    lng: -82.54259490966797, 
    lat: 27.33738136291504, 
    store_id: 9421
  }, 
  {
    city: "Fort Myers", 
    name: "College & Winkler", 
    country: "US", 
    lng: -81.89685821533203, 
    lat: 26.55608367919922, 
    store_id: 9422
  }, 
  {
    city: "Belle Isle", 
    name: "S Conway Rd & Hoffner Ave", 
    country: "US", 
    lng: -81.33109283447266, 
    lat: 28.481882095336914, 
    store_id: 9424
  }, 
  {
    city: "Savannah", 
    name: "Oglethorpe Mall", 
    country: "US", 
    lng: -81.11646270751953, 
    lat: 32.00333786010742, 
    store_id: 9426
  }, 
  {
    city: "Stockbridge", 
    name: "Eagles Landing Pkwy & Medical Blvd", 
    country: "US", 
    lng: -84.22409057617188, 
    lat: 33.51132583618164, 
    store_id: 9427
  }, 
  {
    city: "Orland Park", 
    name: "Orland Park-179th & Wolf", 
    country: "US", 
    lng: -87.89079284667969, 
    lat: 41.561683654785156, 
    store_id: 9429
  }, 
  {
    city: "Burbank", 
    name: "Burbank-79th & Harlem", 
    country: "US", 
    lng: -87.79920196533203, 
    lat: 41.7464714050293, 
    store_id: 9430
  }, 
  {
    city: "New Lenox", 
    name: "New Lenox-Rte. 30 & Joliet Hwy", 
    country: "US", 
    lng: -87.91695404052734, 
    lat: 41.507747650146484, 
    store_id: 9431
  }, 
  {
    city: "Marion", 
    name: "32nd & Western", 
    country: "US", 
    lng: -85.67266845703125, 
    lat: 40.532020568847656, 
    store_id: 9432
  }, 
  {
    city: "Redmond", 
    name: "Nolan Town Center- Redmond", 
    country: "US", 
    lng: -121.19279479980469, 
    lat: 44.26894760131836, 
    store_id: 9436
  }, 
  {
    city: "El Paso", 
    name: "I-10 and Airway", 
    country: "US", 
    lng: -106.39273834228516, 
    lat: 31.779233932495117, 
    store_id: 9437
  }, 
  {
    city: "Denton", 
    name: "University Dr & Carroll Blvd", 
    country: "US", 
    lng: -97.1361083984375, 
    lat: 33.230438232421875, 
    store_id: 9438
  }, 
  {
    city: "Chesapeake", 
    name: "Battlefield & Volvo", 
    country: "US", 
    lng: -76.25074005126953, 
    lat: 36.76315689086914, 
    store_id: 9439
  }, 
  {
    city: "Alexandria", 
    name: "Mt. Vernon Plaza", 
    country: "US", 
    lng: -77.08480834960938, 
    lat: 38.74947738647461, 
    store_id: 9440
  }, 
  {
    city: "Virginia Beach", 
    name: "Harris Teeter-Virginia Beach #239", 
    country: "US", 
    lng: -76.06488037109375, 
    lat: 36.75486373901367, 
    store_id: 9441
  }, 
  {
    city: "Surprise", 
    name: "Safeway-Surprise #1997", 
    country: "US", 
    lng: -112.4253158569336, 
    lat: 33.637516021728516, 
    store_id: 9443
  }, 
  {
    city: "Mesa", 
    name: "Safeway - Mesa #1567", 
    country: "US", 
    lng: -111.77217864990234, 
    lat: 33.42398452758789, 
    store_id: 9444
  }, 
  {
    city: "Mesa", 
    name: "Safeway-Mesa #2644", 
    country: "US", 
    lng: -111.6839370727539, 
    lat: 33.45513916015625, 
    store_id: 9445
  }, 
  {
    city: "Tucson", 
    name: "Safeway-Tucson #250", 
    country: "US", 
    lng: -110.89149475097656, 
    lat: 32.308265686035156, 
    store_id: 9446
  }, 
  {
    city: "Ft Myers", 
    name: "Super Target Ft Myers ST-818", 
    country: "US", 
    lng: -81.87124633789062, 
    lat: 26.544336318969727, 
    store_id: 9447
  }, 
  {
    city: "Soldotna", 
    name: "Fred Meyer-Soldotna #17", 
    country: "US", 
    lng: -151.0499267578125, 
    lat: 60.48981857299805, 
    store_id: 9448
  }, 
  {
    city: "Moorpark", 
    name: "Vons - Moorpark #1735", 
    country: "US", 
    lng: -118.899169921875, 
    lat: 34.26778793334961, 
    store_id: 9449
  }, 
  {
    city: "Campbell", 
    name: "Safeway - Campbell #1293", 
    country: "US", 
    lng: -121.95006561279297, 
    lat: 37.28044128417969, 
    store_id: 9450
  }, 
  {
    city: "Arcadia", 
    name: "Albertsons-Arcadia #6561", 
    country: "US", 
    lng: -118.02349090576172, 
    lat: 34.107540130615234, 
    store_id: 9451
  }, 
  {
    city: "Secaucus", 
    name: "Secaucus, Harmon Meadow", 
    country: "US", 
    lng: -74.04625701904297, 
    lat: 40.78715515136719, 
    store_id: 9452
  }, 
  {
    city: "Hermitage", 
    name: "Andrew Jackson Pkwy @ Lebanon Pike", 
    country: "US", 
    lng: -86.59807586669922, 
    lat: 36.214439392089844, 
    store_id: 9453
  }, 
  {
    city: "Nashville", 
    name: "West End Ave & 30th Ave So", 
    country: "US", 
    lng: -86.81379699707031, 
    lat: 36.1435432434082, 
    store_id: 9454
  }, 
  {
    city: "Marietta", 
    name: "Kroger - Marietta #454", 
    country: "US", 
    lng: -84.48825073242188, 
    lat: 33.96765899658203, 
    store_id: 9455
  }, 
  {
    city: "Grand Rapids", 
    name: "Amway Grand Plaza", 
    country: "US", 
    lng: -85.67219543457031, 
    lat: 42.966800689697266, 
    store_id: 9456
  }, 
  {
    city: "San Bruno", 
    name: "501 San Mateo Avenue", 
    country: "US", 
    lng: -122.41136932373047, 
    lat: 37.62473678588867, 
    store_id: 9460
  }, 
  {
    city: "San Jose", 
    name: "Story & White", 
    country: "US", 
    lng: -121.81803131103516, 
    lat: 37.35749053955078, 
    store_id: 9461
  }, 
  {
    city: "Pittsburg", 
    name: "Buchanan & Loveridge", 
    country: "US", 
    lng: -121.87355041503906, 
    lat: 37.9981689453125, 
    store_id: 9462
  }, 
  {
    city: "Elk Grove", 
    name: "Elk Grove Florin & Bond", 
    country: "US", 
    lng: -121.37361907958984, 
    lat: 38.422950744628906, 
    store_id: 9463
  }, 
  {
    city: "Davie", 
    name: "Griffin Rd & University Dr", 
    country: "US", 
    lng: -80.252685546875, 
    lat: 26.062692642211914, 
    store_id: 9464
  }, 
  {
    city: "Fayetteville", 
    name: "Hwy 85 & Hwy 92", 
    country: "US", 
    lng: -84.45691680908203, 
    lat: 33.430938720703125, 
    store_id: 9465
  }, 
  {
    city: "Concord", 
    name: "Concord, Hwy 29", 
    country: "US", 
    lng: -80.60592651367188, 
    lat: 35.439579010009766, 
    store_id: 9466
  }, 
  {
    city: "King of Prussia", 
    name: "King of Prussia Mall -Court Level 2", 
    country: "US", 
    lng: -75.38667297363281, 
    lat: 40.089454650878906, 
    store_id: 9467
  }, 
  {
    city: "North Wales", 
    name: "Montgomery Mall", 
    country: "US", 
    lng: -75.2446060180664, 
    lat: 40.23515701293945, 
    store_id: 9468
  }, 
  {
    city: "Myrtle Beach", 
    name: "Long Bay Resort", 
    country: "US", 
    lng: -78.81830596923828, 
    lat: 33.74115753173828, 
    store_id: 9469
  }, 
  {
    city: "Knoxville", 
    name: "I-75 at Merchant Rd", 
    country: "US", 
    lng: -83.97054290771484, 
    lat: 36.01038360595703, 
    store_id: 9470
  }, 
  {
    city: "Clovis", 
    name: "Target Clovis T-2018", 
    country: "US", 
    lng: -119.72567749023438, 
    lat: 36.83766555786133, 
    store_id: 9471
  }, 
  {
    city: "Sacramento", 
    name: "5th & I Sacramento", 
    country: "US", 
    lng: -121.49949645996094, 
    lat: 38.58377456665039, 
    store_id: 9472
  }, 
  {
    city: "Dublin", 
    name: "Amador Valley & Village Pkwy", 
    country: "US", 
    lng: -121.92658996582031, 
    lat: 37.710044860839844, 
    store_id: 9473
  }, 
  {
    city: "Buena Park", 
    name: "Target Buena Park T-2082", 
    country: "US", 
    lng: -117.9996566772461, 
    lat: 33.85871124267578, 
    store_id: 9474
  }, 
  {
    city: "Redding", 
    name: "Lake & Hilltop - Redding", 
    country: "US", 
    lng: -122.37128448486328, 
    lat: 40.61037063598633, 
    store_id: 9475
  }, 
  {
    city: "Huntington Beach", 
    name: "Target Huntington Beach T-2051", 
    country: "US", 
    lng: -117.95572662353516, 
    lat: 33.671226501464844, 
    store_id: 9476
  }, 
  {
    city: "Victorville", 
    name: "Vons-Victorville #2131", 
    country: "US", 
    lng: -117.29003143310547, 
    lat: 34.47180938720703, 
    store_id: 9478
  }, 
  {
    city: "Redondo Beach", 
    name: "Target Redondo Beach T-1980", 
    country: "US", 
    lng: -118.3572998046875, 
    lat: 33.86907196044922, 
    store_id: 9479
  }, 
  {
    city: "Northridge", 
    name: "Target Northridge T-2020", 
    country: "US", 
    lng: -118.5031509399414, 
    lat: 34.234580993652344, 
    store_id: 9480
  }, 
  {
    city: "Fremont", 
    name: "Boscell & Auto Mall Pkwy", 
    country: "US", 
    lng: -121.97614288330078, 
    lat: 37.504154205322266, 
    store_id: 9481
  }, 
  {
    city: "Sacramento", 
    name: "Watt & Fair Oaks - Sacramento", 
    country: "US", 
    lng: -121.3825912475586, 
    lat: 38.57532501220703, 
    store_id: 9482
  }, 
  {
    city: "Boise", 
    name: "Boise Towne Square", 
    country: "US", 
    lng: -116.27912139892578, 
    lat: 43.60807418823242, 
    store_id: 9483
  }, 
  {
    city: "Forest Park", 
    name: "Madison & Elgin - Forest Park", 
    country: "US", 
    lng: -87.80625915527344, 
    lat: 41.879783630371094, 
    store_id: 9484
  }, 
  {
    city: "Covington", 
    name: "Lake Dr & US 190", 
    country: "US", 
    lng: -90.08438873291016, 
    lat: 30.4431095123291, 
    store_id: 9485
  }, 
  {
    city: "Las Vegas", 
    name: "Sandhill & Flamingo, Las Vegas", 
    country: "US", 
    lng: -115.09164428710938, 
    lat: 36.11488342285156, 
    store_id: 9489
  }, 
  {
    city: "Oklahoma City", 
    name: "Memorial & MacArthur", 
    country: "US", 
    lng: -97.61956024169922, 
    lat: 35.6081428527832, 
    store_id: 9490
  }, 
  {
    city: "Stockton", 
    name: "Eight Mile & I-5 - Stockton", 
    country: "US", 
    lng: -121.37491607666016, 
    lat: 38.053043365478516, 
    store_id: 9492
  }, 
  {
    city: "El Paso", 
    name: "Joe Battle & Montwood", 
    country: "US", 
    lng: -106.26866912841797, 
    lat: 31.759552001953125, 
    store_id: 9494
  }, 
  {
    city: "Montgomery", 
    name: "Zelda Rd at Carter Hill Rd", 
    country: "US", 
    lng: -86.26420593261719, 
    lat: 32.35445785522461, 
    store_id: 9495
  }, 
  {
    city: "Phoenix", 
    name: "Tatum & Rose Garden, Phoenix", 
    country: "US", 
    lng: -111.97822570800781, 
    lat: 33.676239013671875, 
    store_id: 9496
  }, 
  {
    city: "Camp Verde", 
    name: "I-17 & Hwy 260, Camp Verde", 
    country: "US", 
    lng: -111.88198852539062, 
    lat: 34.575523376464844, 
    store_id: 9497
  }, 
  {
    city: "El Cajon", 
    name: "Chase & Avocado, El Cajon", 
    country: "US", 
    lng: -116.95649719238281, 
    lat: 32.78062057495117, 
    store_id: 9498
  }, 
  {
    city: "Temecula", 
    name: "Promenade In Temecula, Temecula", 
    country: "US", 
    lng: -117.15394592285156, 
    lat: 33.52570343017578, 
    store_id: 9499
  }, 
  {
    city: "Temecula", 
    name: "Hwy 79 & Pechanga, Temecula", 
    country: "US", 
    lng: -117.12767028808594, 
    lat: 33.47528839111328, 
    store_id: 9500
  }, 
  {
    city: "Paso Robles", 
    name: "Creston & Sherwood, Paso Robles", 
    country: "US", 
    lng: -120.6587905883789, 
    lat: 35.6164665222168, 
    store_id: 9501
  }, 
  {
    city: "Fontana", 
    name: "Sierra & Jurupa", 
    country: "US", 
    lng: -117.43524932861328, 
    lat: 34.04905319213867, 
    store_id: 9502
  }, 
  {
    city: "Bakersfield", 
    name: "24th & L Street, Bakersfield", 
    country: "US", 
    lng: -119.01616668701172, 
    lat: 35.38087844848633, 
    store_id: 9503
  }, 
  {
    city: "Los Angeles", 
    name: "1st & Los Angeles (Doubletree)", 
    country: "US", 
    lng: -118.24220275878906, 
    lat: 34.050865173339844, 
    store_id: 9504
  }, 
  {
    city: "Cypress", 
    name: "Valley View & Ball", 
    country: "US", 
    lng: -118.0292739868164, 
    lat: 33.81644821166992, 
    store_id: 9506
  }, 
  {
    city: "San Diego", 
    name: "29th & University, San Diego", 
    country: "US", 
    lng: -117.13116455078125, 
    lat: 32.748260498046875, 
    store_id: 9507
  }, 
  {
    city: "Thornton", 
    name: "I-25 & 120th-Thornton", 
    country: "US", 
    lng: -104.98777770996094, 
    lat: 39.91450881958008, 
    store_id: 9508
  }, 
  {
    city: "Effingham", 
    name: "I-70 & Hwy 32", 
    country: "US", 
    lng: -88.56665802001953, 
    lat: 39.13896179199219, 
    store_id: 9510
  }, 
  {
    city: "South Bend", 
    name: "Ireland & Miami", 
    country: "US", 
    lng: -86.23019409179688, 
    lat: 41.62887191772461, 
    store_id: 9511
  }, 
  {
    city: "Yakima", 
    name: "Valley Mall", 
    country: "US", 
    lng: -120.48329162597656, 
    lat: 46.56697463989258, 
    store_id: 9513
  }, 
  {
    city: "Flagstaff", 
    name: "Target Flagstaff T-935", 
    country: "US", 
    lng: -111.66142272949219, 
    lat: 35.18434143066406, 
    store_id: 9514
  }, 
  {
    city: "Mesa", 
    name: "Safeway - Mesa #1637", 
    country: "US", 
    lng: -111.75231170654297, 
    lat: 33.39483642578125, 
    store_id: 9515
  }, 
  {
    city: "Phoenix", 
    name: "Target Phoenix T-950", 
    country: "US", 
    lng: -111.98430633544922, 
    lat: 33.4788818359375, 
    store_id: 9516
  }, 
  {
    city: "Seaside", 
    name: "Canyon Del Rey & Del Monte", 
    country: "US", 
    lng: -121.85565948486328, 
    lat: 36.6078987121582, 
    store_id: 9517
  }, 
  {
    city: "Tracy", 
    name: "Target Tracy T-738", 
    country: "US", 
    lng: -121.45962524414062, 
    lat: 37.757545471191406, 
    store_id: 9518
  }, 
  {
    city: "Oxford", 
    name: "I-20 & Hwy 21", 
    country: "US", 
    lng: -85.82818603515625, 
    lat: 33.60749435424805, 
    store_id: 9519
  }, 
  {
    city: "San Francisco", 
    name: "425 Battery", 
    country: "US", 
    lng: -122.4005126953125, 
    lat: 37.79509735107422, 
    store_id: 9520
  }, 
  {
    city: "Pittsburg", 
    name: "Railroad & Leland", 
    country: "US", 
    lng: -121.89033508300781, 
    lat: 38.01312255859375, 
    store_id: 9521
  }, 
  {
    city: "Suisun City", 
    name: "Sunset & Merganser - Suisun City", 
    country: "US", 
    lng: -122.02006530761719, 
    lat: 38.24643325805664, 
    store_id: 9522
  }, 
  {
    city: "Snellville", 
    name: "Ronald Reagan & Hwy 124", 
    country: "US", 
    lng: -84.0138168334961, 
    lat: 33.87379837036133, 
    store_id: 9523
  }, 
  {
    city: "Chico", 
    name: "Safeway - Chico #1125", 
    country: "US", 
    lng: -121.82273864746094, 
    lat: 39.76212692260742, 
    store_id: 9524
  }, 
  {
    city: "San Leandro", 
    name: "Safeway - San Leandro #994", 
    country: "US", 
    lng: -122.15480041503906, 
    lat: 37.72368240356445, 
    store_id: 9525
  }, 
  {
    city: "Mira Loma", 
    name: "Target Mira Loma T-1961", 
    country: "US", 
    lng: -117.55532836914062, 
    lat: 33.9759635925293, 
    store_id: 9526
  }, 
  {
    city: "Tallahassee", 
    name: "Target-Tallahassee T-1973", 
    country: "US", 
    lng: -84.21537780761719, 
    lat: 30.56092071533203, 
    store_id: 9527
  }, 
  {
    city: "Tampa", 
    name: "Target Tampa T-2040", 
    country: "US", 
    lng: -82.5078353881836, 
    lat: 27.958267211914062, 
    store_id: 9528
  }, 
  {
    city: "Winter Park", 
    name: "Target Orlando/Winter Park T-2032", 
    country: "US", 
    lng: -81.28778076171875, 
    lat: 28.59511947631836, 
    store_id: 9529
  }, 
  {
    city: "Spring Hill", 
    name: "Target Spring Hill T-919", 
    country: "US", 
    lng: -82.59471893310547, 
    lat: 28.49666404724121, 
    store_id: 9530
  }, 
  {
    city: "Urbandale", 
    name: "Target Des Moines North T-2041", 
    country: "US", 
    lng: -93.69975280761719, 
    lat: 41.63008117675781, 
    store_id: 9532
  }, 
  {
    city: "Leominster", 
    name: "Target Leominster T-1965", 
    country: "US", 
    lng: -71.71378326416016, 
    lat: 42.527313232421875, 
    store_id: 9533
  }, 
  {
    city: "Baltimore", 
    name: "Target Middle River T-1970", 
    country: "US", 
    lng: -76.44873046875, 
    lat: 39.3347282409668, 
    store_id: 9534
  }, 
  {
    city: "Caledonia", 
    name: "Target Grand Rapids M-6 T-2015", 
    country: "US", 
    lng: -85.61585998535156, 
    lat: 42.84596252441406, 
    store_id: 9536
  }, 
  {
    city: "Grand Rapids", 
    name: "Target Grand Rapids T-2014", 
    country: "US", 
    lng: -85.54114532470703, 
    lat: 42.91244888305664, 
    store_id: 9538
  }, 
  {
    city: "Burlington", 
    name: "Target Burlington T-2037", 
    country: "US", 
    lng: -79.51990509033203, 
    lat: 36.066375732421875, 
    store_id: 9539
  }, 
  {
    city: "Arden", 
    name: "Target Asheville T-2011", 
    country: "US", 
    lng: -82.5322036743164, 
    lat: 35.46070098876953, 
    store_id: 9540
  }, 
  {
    city: "Webster", 
    name: "Target Webster T-2038", 
    country: "US", 
    lng: -77.45064544677734, 
    lat: 43.21133041381836, 
    store_id: 9541
  }, 
  {
    city: "Medford", 
    name: "Target Medford T-1948", 
    country: "US", 
    lng: -72.98894500732422, 
    lat: 40.824913024902344, 
    store_id: 9542
  }, 
  {
    city: "Columbus", 
    name: "Target Worthington T-1978", 
    country: "US", 
    lng: -83.02062225341797, 
    lat: 40.065059661865234, 
    store_id: 9543
  }, 
  {
    city: "Hilliard", 
    name: "Target Hilliard T-1969", 
    country: "US", 
    lng: -83.12257385253906, 
    lat: 40.03826141357422, 
    store_id: 9544
  }, 
  {
    city: "Corvallis", 
    name: "Fred Meyer-Corvallis #70", 
    country: "US", 
    lng: -123.27420806884766, 
    lat: 44.575382232666016, 
    store_id: 9545
  }, 
  {
    city: "Auburn", 
    name: "1102 Supermall Way", 
    country: "US", 
    lng: -122.24549865722656, 
    lat: 47.29609680175781, 
    store_id: 9546
  }, 
  {
    city: "Seattle", 
    name: "3rd and Pike", 
    country: "US", 
    lng: -122.33790588378906, 
    lat: 47.60951232910156, 
    store_id: 9547
  }, 
  {
    city: "Duluth", 
    name: "Duluth - Superior & 4th", 
    country: "US", 
    lng: -92.10317993164062, 
    lat: 46.783382415771484, 
    store_id: 9548
  }, 
  {
    city: "Fargo", 
    name: "Fargo-32nd & 25th", 
    country: "US", 
    lng: -96.82063293457031, 
    lat: 46.83191680908203, 
    store_id: 9549
  }, 
  {
    city: "Olive Branch", 
    name: "Olive Branch", 
    country: "US", 
    lng: -89.84554290771484, 
    lat: 34.96243667602539, 
    store_id: 9550
  }, 
  {
    city: "Clarksville", 
    name: "S Hampton & Wilma Rudolph", 
    country: "US", 
    lng: -87.2931137084961, 
    lat: 36.58964538574219, 
    store_id: 9551
  }, 
  {
    city: "Seattle", 
    name: "35th and 73rd-Wedgwood", 
    country: "US", 
    lng: -122.29064178466797, 
    lat: 47.681396484375, 
    store_id: 9552
  }, 
  {
    city: "Memphis", 
    name: "MEM - Concourse B, Y Connector", 
    country: "US", 
    lng: -89.9817123413086, 
    lat: 35.051998138427734, 
    store_id: 9553
  }, 
  {
    city: "College Station", 
    name: "Hwy 6 & University", 
    country: "US", 
    lng: -96.31640625, 
    lat: 30.638273239135742, 
    store_id: 9554
  }, 
  {
    city: "Friendswood", 
    name: "FM 518 & FM 528", 
    country: "US", 
    lng: -95.18731689453125, 
    lat: 29.509511947631836, 
    store_id: 9555
  }, 
  {
    city: "Virginia Beach", 
    name: "31 Ocean", 
    country: "US", 
    lng: -75.97904968261719, 
    lat: 36.85895538330078, 
    store_id: 9556
  }, 
  {
    city: "Morgantown", 
    name: "Morgantown", 
    country: "US", 
    lng: -79.96372985839844, 
    lat: 39.65522766113281, 
    store_id: 9557
  }, 
  {
    city: "Opelika", 
    name: "Target Opelika T-1499", 
    country: "US", 
    lng: -85.40929412841797, 
    lat: 32.623199462890625, 
    store_id: 9558
  }, 
  {
    city: "St Petersburg", 
    name: "Hilton St. Petersburg", 
    country: "US", 
    lng: -82.6341552734375, 
    lat: 27.76793670654297, 
    store_id: 9559
  }, 
  {
    city: "Baytown", 
    name: "Target Baytown T-887", 
    country: "US", 
    lng: -94.97628784179688, 
    lat: 29.77195930480957, 
    store_id: 9560
  }, 
  {
    city: "Arlington", 
    name: "Crowne Plaza Reagan National Airpor", 
    country: "US", 
    lng: -77.05033111572266, 
    lat: 38.860595703125, 
    store_id: 9561
  }, 
  {
    city: "San Jose", 
    name: "Safeway - San Jose #1574", 
    country: "US", 
    lng: -121.87432861328125, 
    lat: 37.26007080078125, 
    store_id: 9563
  }, 
  {
    city: "Janesville", 
    name: "Target Janesville T-809", 
    country: "US", 
    lng: -88.99835205078125, 
    lat: 42.72077560424805, 
    store_id: 9564
  }, 
  {
    city: "Reading", 
    name: "Reading Walkers Brook", 
    country: "US", 
    lng: -71.09385681152344, 
    lat: 42.51999282836914, 
    store_id: 9565
  }, 
  {
    city: "Austin", 
    name: "Radisson Hotel & Suites- Austin", 
    country: "US", 
    lng: -97.74388122558594, 
    lat: 30.262819290161133, 
    store_id: 9566
  }, 
  {
    city: "Sacramento", 
    name: "65th St. & Folsom - Sacramento", 
    country: "US", 
    lng: -121.42811584472656, 
    lat: 38.55402374267578, 
    store_id: 9568
  }, 
  {
    city: "Land O Lake", 
    name: "SR 54 & Collier Pkwy", 
    country: "US", 
    lng: -82.4403076171875, 
    lat: 28.186649322509766, 
    store_id: 9569
  }, 
  {
    city: "Reno", 
    name: "S Virginia & Sierra Ctr Pky - Reno", 
    country: "US", 
    lng: -119.78378295898438, 
    lat: 39.465389251708984, 
    store_id: 9570
  }, 
  {
    city: "Carson City", 
    name: "Hwy 395 & Rhodes St - Carson Cty", 
    country: "US", 
    lng: -119.76811218261719, 
    lat: 39.14556884765625, 
    store_id: 9571
  }, 
  {
    city: "State College", 
    name: "North Atherton Street", 
    country: "US", 
    lng: -77.90747833251953, 
    lat: 40.80906677246094, 
    store_id: 9572
  }, 
  {
    city: "Plainfield", 
    name: "Plainfield-127th & Route 59", 
    country: "US", 
    lng: -88.20447540283203, 
    lat: 41.65255355834961, 
    store_id: 9573
  }, 
  {
    city: "Machesney Park", 
    name: "Route 173 & Orlando", 
    country: "US", 
    lng: -89.0322494506836, 
    lat: 42.36515426635742, 
    store_id: 9574
  }, 
  {
    city: "Gilbert", 
    name: "Safeway - Gilbert #1748", 
    country: "US", 
    lng: -111.72358703613281, 
    lat: 33.377933502197266, 
    store_id: 9576
  }, 
  {
    city: "Harlingen", 
    name: "Ed Carey & Sunshine Strip", 
    country: "US", 
    lng: -97.6743392944336, 
    lat: 26.17272186279297, 
    store_id: 9577
  }, 
  {
    city: "Dallas", 
    name: "DFW - Concourse D, Simply Books", 
    country: "US", 
    lng: -97.04476928710938, 
    lat: 32.898643493652344, 
    store_id: 9578
  }, 
  {
    city: "Bothell", 
    name: "QFC-Inglemore #838", 
    country: "US", 
    lng: -122.24343872070312, 
    lat: 47.72895812988281, 
    store_id: 9579
  }, 
  {
    city: "Richland", 
    name: "Safeway-Richland #333", 
    country: "US", 
    lng: -119.27554321289062, 
    lat: 46.299617767333984, 
    store_id: 9580
  }, 
  {
    city: "Santa Monica", 
    name: "Vons-Santa Monica #2262", 
    country: "US", 
    lng: -118.48990631103516, 
    lat: 34.017372131347656, 
    store_id: 9581
  }, 
  {
    city: "Kalamazoo", 
    name: "Kalamazoo - West Main", 
    country: "US", 
    lng: -85.6557388305664, 
    lat: 42.29657745361328, 
    store_id: 9583
  }, 
  {
    city: "Hopkins", 
    name: "Hwy 7 & Hopkins Crossroads", 
    country: "US", 
    lng: -93.41883087158203, 
    lat: 44.9333381652832, 
    store_id: 9584
  }, 
  {
    city: "Cottage Grove", 
    name: "Cottage Grove-E. Point Douglas", 
    country: "US", 
    lng: -92.95707702636719, 
    lat: 44.833099365234375, 
    store_id: 9585
  }, 
  {
    city: "Omaha", 
    name: "147th & Maple", 
    country: "US", 
    lng: -96.14521026611328, 
    lat: 41.29136657714844, 
    store_id: 9586
  }, 
  {
    city: "New York", 
    name: "Allen & Delancey", 
    country: "US", 
    lng: -73.98995208740234, 
    lat: 40.719322204589844, 
    store_id: 9589
  }, 
  {
    city: "Feasterville", 
    name: "Feasterville", 
    country: "US", 
    lng: -74.99787902832031, 
    lat: 40.148826599121094, 
    store_id: 9590
  }, 
  {
    city: "Houston", 
    name: "I-10 & Kirkwood", 
    country: "US", 
    lng: -95.58861541748047, 
    lat: 29.783878326416016, 
    store_id: 9591
  }, 
  {
    city: "Waxahachie", 
    name: "Hwy. 287 & Hwy. 77", 
    country: "US", 
    lng: -96.84038543701172, 
    lat: 32.41720199584961, 
    store_id: 9592
  }, 
  {
    city: "Germantown", 
    name: "Mequon Road & Squire", 
    country: "US", 
    lng: -88.1144790649414, 
    lat: 43.221473693847656, 
    store_id: 9593
  }, 
  {
    city: "Marina del Rey", 
    name: "Lincoln & Fiji", 
    country: "US", 
    lng: -118.43782043457031, 
    lat: 33.97871398925781, 
    store_id: 9594
  }, 
  {
    city: "North Charlotte", 
    name: "Northlake Mall", 
    country: "US", 
    lng: -80.85103607177734, 
    lat: 35.35255813598633, 
    store_id: 9595
  }, 
  {
    city: "Oklahoma City", 
    name: "Target Oklahoma City N T-43", 
    country: "US", 
    lng: -97.56412506103516, 
    lat: 35.524349212646484, 
    store_id: 9596
  }, 
  {
    city: "Auburn", 
    name: "Auburn ME, Mount Auburn Ave.", 
    country: "US", 
    lng: -70.23430633544922, 
    lat: 44.12066650390625, 
    store_id: 9598
  }, 
  {
    city: "Livermore", 
    name: "Airway & Kitty Hawk", 
    country: "US", 
    lng: -121.81758117675781, 
    lat: 37.69917678833008, 
    store_id: 9599
  }, 
  {
    city: "Palm Beach Gardens", 
    name: "PGA & Turnpike", 
    country: "US", 
    lng: -80.132568359375, 
    lat: 26.841556549072266, 
    store_id: 9600
  }, 
  {
    city: "Jacksonville", 
    name: "John Turner Butler & US 1", 
    country: "US", 
    lng: -81.59868621826172, 
    lat: 30.243148803710938, 
    store_id: 9602
  }, 
  {
    city: "Bradenton", 
    name: "75th St & Cortez Rd", 
    country: "US", 
    lng: -82.63655853271484, 
    lat: 27.462890625, 
    store_id: 9603
  }, 
  {
    city: "Anchorage", 
    name: "Tudor & Lake Otis- Anchorage", 
    country: "US", 
    lng: -149.8357391357422, 
    lat: 61.18126678466797, 
    store_id: 9604
  }, 
  {
    city: "Phoenix", 
    name: "99th Avenue & Camelback, Phoenix", 
    country: "US", 
    lng: -112.27562713623047, 
    lat: 33.50802230834961, 
    store_id: 9605
  }, 
  {
    city: "Chino", 
    name: "Mountain & Riverside", 
    country: "US", 
    lng: -117.66722106933594, 
    lat: 34.01998519897461, 
    store_id: 9606
  }, 
  {
    city: "Thousand Oaks", 
    name: "Janss & Moorpark, Thousand Oaks", 
    country: "US", 
    lng: -118.86752319335938, 
    lat: 34.2000617980957, 
    store_id: 9607
  }, 
  {
    city: "Carlsbad", 
    name: "Avenida Encinas & Poinsettia", 
    country: "US", 
    lng: -117.31111907958984, 
    lat: 33.10144805908203, 
    store_id: 9608
  }, 
  {
    city: "Huntington Beach", 
    name: "Bolsa & Edwards", 
    country: "US", 
    lng: -118.01530456542969, 
    lat: 33.744056701660156, 
    store_id: 9609
  }, 
  {
    city: "Simsbury", 
    name: "Simsburytown Shops", 
    country: "US", 
    lng: -72.79985809326172, 
    lat: 41.880035400390625, 
    store_id: 9610
  }, 
  {
    city: "Chesterfield Township", 
    name: "Chesterfield, I-94 & 23 Mile Rd", 
    country: "US", 
    lng: -82.82898712158203, 
    lat: 42.67414474487305, 
    store_id: 9611
  }, 
  {
    city: "New Hudson", 
    name: "New Hudson - Milford & Lyon Ctr", 
    country: "US", 
    lng: -83.61548614501953, 
    lat: 42.515567779541016, 
    store_id: 9612
  }, 
  {
    city: "Arlington", 
    name: "S Cooper & Bardin", 
    country: "US", 
    lng: -97.13404083251953, 
    lat: 32.67095947265625, 
    store_id: 9614
  }, 
  {
    city: "Newport News", 
    name: "Jefferson Commons", 
    country: "US", 
    lng: -76.51372528076172, 
    lat: 37.12959289550781, 
    store_id: 9615
  }, 
  {
    city: "Brentwood", 
    name: "Target Brentwood T-1983", 
    country: "US", 
    lng: -86.77857208251953, 
    lat: 36.04280090332031, 
    store_id: 9616
  }, 
  {
    city: "Georgetown", 
    name: "Target Georgetown T-1982", 
    country: "US", 
    lng: -97.69873046875, 
    lat: 30.63104820251465, 
    store_id: 9617
  }, 
  {
    city: "Huntsville", 
    name: "Whitesburg Dr at Governors Dr", 
    country: "US", 
    lng: -86.57876586914062, 
    lat: 34.7197380065918, 
    store_id: 9619
  }, 
  {
    city: "Los Angeles", 
    name: "Cedars-Sinai Medical Center", 
    country: "US", 
    lng: -118.38072204589844, 
    lat: 34.07624053955078, 
    store_id: 9620
  }, 
  {
    city: "Fairfield", 
    name: "Safeway - Fairfield #1127", 
    country: "US", 
    lng: -122.05320739746094, 
    lat: 38.27185821533203, 
    store_id: 9621
  }, 
  {
    city: "Schaumburg", 
    name: "Target Schaumburg T-880", 
    country: "US", 
    lng: -88.0489730834961, 
    lat: 42.03764724731445, 
    store_id: 9624
  }, 
  {
    city: "Dallas", 
    name: "Safeway - Dallas -#4404", 
    country: "US", 
    lng: -123.31269836425781, 
    lat: 44.930458068847656, 
    store_id: 9626
  }, 
  {
    city: "Lake Worth", 
    name: "Target Lake Worth T-2008", 
    country: "US", 
    lng: -97.42976379394531, 
    lat: 32.81390380859375, 
    store_id: 9628
  }, 
  {
    city: "Austin", 
    name: "Target Four Points T-1953", 
    country: "US", 
    lng: -97.85032653808594, 
    lat: 30.402908325195312, 
    store_id: 9629
  }, 
  {
    city: "Weatherford", 
    name: "Target Weatherford T-1981", 
    country: "US", 
    lng: -97.78535461425781, 
    lat: 32.72801971435547, 
    store_id: 9630
  }, 
  {
    city: "Houston", 
    name: "Target Houston T-1975", 
    country: "US", 
    lng: -95.46224975585938, 
    lat: 29.686857223510742, 
    store_id: 9631
  }, 
  {
    city: "Charlottesville", 
    name: "Target Charlottesville T-1858", 
    country: "US", 
    lng: -78.44098663330078, 
    lat: 38.12888717651367, 
    store_id: 9632
  }, 
  {
    city: "Santa Rosa", 
    name: "Target Santa Rosa T-937", 
    country: "US", 
    lng: -122.71332550048828, 
    lat: 38.41912841796875, 
    store_id: 9633
  }, 
  {
    city: "Des Moines", 
    name: "3830 Merle Hay Road", 
    country: "US", 
    lng: -93.69817352294922, 
    lat: 41.63117980957031, 
    store_id: 9635
  }, 
  {
    city: "Waukegan", 
    name: "Waukegan & Lakehurst - Waukegan", 
    country: "US", 
    lng: -87.89630889892578, 
    lat: 42.34564208984375, 
    store_id: 9636
  }, 
  {
    city: "Normal", 
    name: "College Hills-Veterans & Von Maur", 
    country: "US", 
    lng: -88.95513916015625, 
    lat: 40.5065803527832, 
    store_id: 9637
  }, 
  {
    city: "Springfield", 
    name: "Battlefield Mall", 
    country: "US", 
    lng: -93.26516723632812, 
    lat: 37.16279602050781, 
    store_id: 9638
  }, 
  {
    city: "Omaha", 
    name: "15th & Douglas", 
    country: "US", 
    lng: -95.93607330322266, 
    lat: 41.25849151611328, 
    store_id: 9639
  }, 
  {
    city: "Henderson", 
    name: "Galleria at Sunset, Henderson", 
    country: "US", 
    lng: -115.04222106933594, 
    lat: 36.06713104248047, 
    store_id: 9640
  }, 
  {
    city: "Henderson", 
    name: "Valle Verde & Paseo Verde", 
    country: "US", 
    lng: -115.06295013427734, 
    lat: 36.02401351928711, 
    store_id: 9641
  }, 
  {
    city: "Ashland", 
    name: "TA - Ashland", 
    country: "US", 
    lng: -82.26315307617188, 
    lat: 40.857540130615234, 
    store_id: 9642
  }, 
  {
    city: "Hermiston", 
    name: "Hermiston- Hermiston, OR", 
    country: "US", 
    lng: -119.29052734375, 
    lat: 45.849388122558594, 
    store_id: 9643
  }, 
  {
    city: "Virginia Beach", 
    name: "Lynnhaven Parkway", 
    country: "US", 
    lng: -76.06778717041016, 
    lat: 36.82442092895508, 
    store_id: 9644
  }, 
  {
    city: "Salisbury", 
    name: "North Salisbury", 
    country: "US", 
    lng: -75.5687026977539, 
    lat: 38.4054069519043, 
    store_id: 9645
  }, 
  {
    city: "Orlando", 
    name: "East Colonial Dr & Maguire Rd", 
    country: "US", 
    lng: -81.34622955322266, 
    lat: 28.553653717041016, 
    store_id: 9646
  }, 
  {
    city: "Ukiah", 
    name: "E. Perkins & Hwy 101 - Ukiah", 
    country: "US", 
    lng: -123.19554138183594, 
    lat: 39.15201187133789, 
    store_id: 9647
  }, 
  {
    city: "Modesto", 
    name: "Coffee & Floyd - Modesto", 
    country: "US", 
    lng: -120.97624206542969, 
    lat: 37.677764892578125, 
    store_id: 9648
  }, 
  {
    city: "Hollywood", 
    name: "Sunset Blvd & St Andrews Place", 
    country: "US", 
    lng: -118.31106567382812, 
    lat: 34.09827423095703, 
    store_id: 9649
  }, 
  {
    city: "Granada Hills", 
    name: "Vons-Granada Hills #2250", 
    country: "US", 
    lng: -118.49974822998047, 
    lat: 34.27186584472656, 
    store_id: 9651
  }, 
  {
    city: "Simi Valley", 
    name: "Wood Ranch & Country Club", 
    country: "US", 
    lng: -118.810546875, 
    lat: 34.25373840332031, 
    store_id: 9652
  }, 
  {
    city: "Pleasant Hill", 
    name: "Safeway - Pleasant Hill #1541", 
    country: "US", 
    lng: -122.05973052978516, 
    lat: 37.94864273071289, 
    store_id: 9653
  }, 
  {
    city: "Pasadena", 
    name: "Vons-Pasadena #2152", 
    country: "US", 
    lng: -118.15315246582031, 
    lat: 34.13593673706055, 
    store_id: 9654
  }, 
  {
    city: "Stillwater", 
    name: "Kowalski-Stillwater/Oak Park", 
    country: "US", 
    lng: -92.84461212158203, 
    lat: 45.03251266479492, 
    store_id: 9656
  }, 
  {
    city: "Boston", 
    name: "Manulife Financial", 
    country: "US", 
    lng: -71.04033660888672, 
    lat: 42.34748840332031, 
    store_id: 9657
  }, 
  {
    city: "Nashville", 
    name: "Kroger - Nashville #895", 
    country: "US", 
    lng: -86.81843566894531, 
    lat: 36.105987548828125, 
    store_id: 9658
  }, 
  {
    city: "Flower Mound", 
    name: "Kroger-Flower Mound #456", 
    country: "US", 
    lng: -97.07185363769531, 
    lat: 33.03496170043945, 
    store_id: 9659
  }, 
  {
    city: "Oshkosh", 
    name: "Target Oshkosh T-807", 
    country: "US", 
    lng: -88.5778579711914, 
    lat: 43.99856948852539, 
    store_id: 9660
  }, 
  {
    city: "Wheeling", 
    name: "Kroger-Wheeling #562", 
    country: "US", 
    lng: -80.69986724853516, 
    lat: 40.07424545288086, 
    store_id: 9661
  }, 
  {
    city: "Fresno", 
    name: "Palm & Herndon, Fresno", 
    country: "US", 
    lng: -119.80787658691406, 
    lat: 36.83665466308594, 
    store_id: 9662
  }, 
  {
    city: "Hawthorne", 
    name: "Crenshaw & I-105, Hawthorne", 
    country: "US", 
    lng: -118.32588195800781, 
    lat: 33.92420959472656, 
    store_id: 9664
  }, 
  {
    city: "El Cajon", 
    name: "Bradley & Magnolia, El Cajon", 
    country: "US", 
    lng: -116.96196746826172, 
    lat: 32.820316314697266, 
    store_id: 9665
  }, 
  {
    city: "Mishawaka", 
    name: "Douglas & Main", 
    country: "US", 
    lng: -86.18163299560547, 
    lat: 41.70793533325195, 
    store_id: 9666
  }, 
  {
    city: "Fountain Valley", 
    name: "Albertsons-Fountain Vly #6157", 
    country: "US", 
    lng: -117.95487976074219, 
    lat: 33.729591369628906, 
    store_id: 9667
  }, 
  {
    city: "Twin Falls", 
    name: "Target Twin Falls T-699", 
    country: "US", 
    lng: -114.46302032470703, 
    lat: 42.59050369262695, 
    store_id: 9668
  }, 
  {
    city: "Rochester", 
    name: "Meijers-Rochester #57", 
    country: "US", 
    lng: -83.12864685058594, 
    lat: 42.63473892211914, 
    store_id: 9670
  }, 
  {
    city: "Bossier City", 
    name: "I-20 & Airline", 
    country: "US", 
    lng: -93.70135498046875, 
    lat: 32.52709197998047, 
    store_id: 9673
  }, 
  {
    city: "New York", 
    name: "55th & Seventh", 
    country: "US", 
    lng: -73.9810791015625, 
    lat: 40.76438522338867, 
    store_id: 9675
  }, 
  {
    city: "Centerville", 
    name: "Centerville", 
    country: "US", 
    lng: -84.16110229492188, 
    lat: 39.610130310058594, 
    store_id: 9676
  }, 
  {
    city: "Ashburn", 
    name: "Ashbrook Commons", 
    country: "US", 
    lng: -77.47036743164062, 
    lat: 39.062294006347656, 
    store_id: 9677
  }, 
  {
    city: "Brevard", 
    name: "Ingles-Brevard #67", 
    country: "US", 
    lng: -82.72713470458984, 
    lat: 35.240570068359375, 
    store_id: 9678
  }, 
  {
    city: "Greendale", 
    name: "Southridge Mall - Lower Level", 
    country: "US", 
    lng: -88.00466918945312, 
    lat: 42.94844055175781, 
    store_id: 9679
  }, 
  {
    city: "Opelika", 
    name: "I-85 @ Hwy 280", 
    country: "US", 
    lng: -85.40391540527344, 
    lat: 32.61788558959961, 
    store_id: 9680
  }, 
  {
    city: "Fort Mill", 
    name: "Baxter Town Center", 
    country: "US", 
    lng: -80.96707153320312, 
    lat: 35.02885818481445, 
    store_id: 9681
  }, 
  {
    city: "Fayetteville", 
    name: "Fayetteville, Syracuse", 
    country: "US", 
    lng: -76.01654052734375, 
    lat: 43.02888488769531, 
    store_id: 9682
  }, 
  {
    city: "Camp Hill", 
    name: "Camp Hill Trindle Rd.", 
    country: "US", 
    lng: -76.93473815917969, 
    lat: 40.23868942260742, 
    store_id: 9683
  }, 
  {
    city: "Stuart", 
    name: "US 1 & Britt Rd", 
    country: "US", 
    lng: -80.26824951171875, 
    lat: 27.236406326293945, 
    store_id: 9684
  }, 
  {
    city: "Honolulu", 
    name: "Hawaii Kai Towne Center", 
    country: "US", 
    lng: -157.71083068847656, 
    lat: 21.28319549560547, 
    store_id: 9685
  }, 
  {
    city: "Rancho Cucamonga", 
    name: "Foothill & Archibald", 
    country: "US", 
    lng: -117.59225463867188, 
    lat: 34.106876373291016, 
    store_id: 9689
  }, 
  {
    city: "Baldwin Park", 
    name: "Puente & Francisquito, Baldwin Park", 
    country: "US", 
    lng: -117.96761322021484, 
    lat: 34.064674377441406, 
    store_id: 9690
  }, 
  {
    city: "Dekalb", 
    name: "Sycamore & Barber Greene", 
    country: "US", 
    lng: -88.72269439697266, 
    lat: 41.956016540527344, 
    store_id: 9691
  }, 
  {
    city: "Lemon Grove", 
    name: "Broadway & Lemon Grove", 
    country: "US", 
    lng: -117.03033447265625, 
    lat: 32.7425651550293, 
    store_id: 9692
  }, 
  {
    city: "Paso Robles", 
    name: "46 West & US 101, Paso Robles", 
    country: "US", 
    lng: -120.69696044921875, 
    lat: 35.58427810668945, 
    store_id: 9693
  }, 
  {
    city: "Columbus", 
    name: "National & 17th", 
    country: "US", 
    lng: -85.88253021240234, 
    lat: 39.215938568115234, 
    store_id: 9694
  }, 
  {
    city: "Statesville", 
    name: "Statesville", 
    country: "US", 
    lng: -80.86183166503906, 
    lat: 35.79157257080078, 
    store_id: 9695
  }, 
  {
    city: "Henderson", 
    name: "Vons-Henderson #1795", 
    country: "US", 
    lng: -115.09992980957031, 
    lat: 35.978736877441406, 
    store_id: 9697
  }, 
  {
    city: "Syracuse", 
    name: "Armory Square", 
    country: "US", 
    lng: -76.1552505493164, 
    lat: 43.04764938354492, 
    store_id: 9698
  }, 
  {
    city: "Sumner", 
    name: "Sumner", 
    country: "US", 
    lng: -122.229248046875, 
    lat: 47.202816009521484, 
    store_id: 9699
  }, 
  {
    city: "Irvine", 
    name: "Albertsons-Irvine #6596", 
    country: "US", 
    lng: -117.81575775146484, 
    lat: 33.682559967041016, 
    store_id: 9700
  }, 
  {
    city: "Charlotte", 
    name: "The Arbors", 
    country: "US", 
    lng: -80.75749969482422, 
    lat: 35.33760070800781, 
    store_id: 9702
  }, 
  {
    city: "Morgan Hill", 
    name: "Cochrane & Monterey", 
    country: "US", 
    lng: -121.66450500488281, 
    lat: 37.143978118896484, 
    store_id: 9703
  }, 
  {
    city: "Elk Grove", 
    name: "Bruceville & Poppy Ridge", 
    country: "US", 
    lng: -121.41817474365234, 
    lat: 38.393653869628906, 
    store_id: 9704
  }, 
  {
    city: "Dumfries", 
    name: "Dumfries", 
    country: "US", 
    lng: -77.33483123779297, 
    lat: 38.59744644165039, 
    store_id: 9705
  }, 
  {
    city: "Scottsdale", 
    name: "Safeway - Scottsdale #2088", 
    country: "US", 
    lng: -111.97593688964844, 
    lat: 33.62569808959961, 
    store_id: 9706
  }, 
  {
    city: "Strongsville", 
    name: "Target Strongsville T-985", 
    country: "US", 
    lng: -81.8283920288086, 
    lat: 41.31667709350586, 
    store_id: 9707
  }, 
  {
    city: "Plano", 
    name: "Kroger-Plano #598", 
    country: "US", 
    lng: -96.76653289794922, 
    lat: 33.109962463378906, 
    store_id: 9708
  }, 
  {
    city: "Bedford", 
    name: "Hwy 183 & Central Dr", 
    country: "US", 
    lng: -97.13228607177734, 
    lat: 32.836238861083984, 
    store_id: 9709
  }, 
  {
    city: "Chesapeake", 
    name: "Target Chesapeake City T-1021", 
    country: "US", 
    lng: -76.23185729980469, 
    lat: 36.77143859863281, 
    store_id: 9710
  }, 
  {
    city: "Henderson", 
    name: "Warm Springs & Julia, Henderson", 
    country: "US", 
    lng: -115.04246520996094, 
    lat: 36.05579376220703, 
    store_id: 9712
  }, 
  {
    city: "Austintown", 
    name: "Austintown", 
    country: "US", 
    lng: -80.7677001953125, 
    lat: 41.12135314941406, 
    store_id: 9714
  }, 
  {
    city: "Parma", 
    name: "Parma, Ridge Road", 
    country: "US", 
    lng: -81.7352066040039, 
    lat: 41.38005447387695, 
    store_id: 9716
  }, 
  {
    city: "Turlock", 
    name: "Johnson & Canal - Turlock", 
    country: "US", 
    lng: -120.82559967041016, 
    lat: 37.49938201904297, 
    store_id: 9717
  }, 
  {
    city: "Modesto", 
    name: "Briggsmore & Prescott - Modesto", 
    country: "US", 
    lng: -121.03146362304688, 
    lat: 37.6699333190918, 
    store_id: 9718
  }, 
  {
    city: "San Jose", 
    name: "Safeway-San Jose #997", 
    country: "US", 
    lng: -121.908203125, 
    lat: 37.252662658691406, 
    store_id: 9719
  }, 
  {
    city: "Yuba City", 
    name: "Target Yuba City T-318", 
    country: "US", 
    lng: -121.63259887695312, 
    lat: 39.14594650268555, 
    store_id: 9720
  }, 
  {
    city: "Snellville", 
    name: "Target Snellville T-917", 
    country: "US", 
    lng: -84.01581573486328, 
    lat: 33.87451171875, 
    store_id: 9721
  }, 
  {
    city: "Louisville", 
    name: "Target Louisville T-780", 
    country: "US", 
    lng: -85.5949478149414, 
    lat: 38.215450286865234, 
    store_id: 9724
  }, 
  {
    city: "Paramus", 
    name: "Rt. 4 - Paramus", 
    country: "US", 
    lng: -74.06643676757812, 
    lat: 40.92033767700195, 
    store_id: 9725
  }, 
  {
    city: "Surprise", 
    name: "Safeway-Surprise #2699", 
    country: "US", 
    lng: -112.35746002197266, 
    lat: 33.61056137084961, 
    store_id: 9726
  }, 
  {
    city: "Billerica", 
    name: "Billerica", 
    country: "US", 
    lng: -71.28934478759766, 
    lat: 42.58163070678711, 
    store_id: 9728
  }, 
  {
    city: "North Hills", 
    name: "Sepulveda & Nordhoff", 
    country: "US", 
    lng: -118.4672622680664, 
    lat: 34.234619140625, 
    store_id: 9729
  }, 
  {
    city: "Colton", 
    name: "Mt. Vernon & Washington", 
    country: "US", 
    lng: -117.3095474243164, 
    lat: 34.049354553222656, 
    store_id: 9730
  }, 
  {
    city: "El Centro", 
    name: "Dogwood & I-8, El Centro", 
    country: "US", 
    lng: -115.53288269042969, 
    lat: 32.76668167114258, 
    store_id: 9731
  }, 
  {
    city: "Denver", 
    name: "Colfax & Krameria", 
    country: "US", 
    lng: -104.91648864746094, 
    lat: 39.739864349365234, 
    store_id: 9733
  }, 
  {
    city: "Woodbridge", 
    name: "Woodbridge, Litchfield Turnpike", 
    country: "US", 
    lng: -72.97776794433594, 
    lat: 41.340187072753906, 
    store_id: 9734
  }, 
  {
    city: "Huntsville", 
    name: "I-45 & 11th", 
    country: "US", 
    lng: -95.57075500488281, 
    lat: 30.71735954284668, 
    store_id: 9735
  }, 
  {
    city: "Ankeny", 
    name: "Hy-Vee - Ankeny #1", 
    country: "US", 
    lng: -93.60208129882812, 
    lat: 41.73464584350586, 
    store_id: 9736
  }, 
  {
    city: "New Orleans", 
    name: "New Orleans Marriott Convention Ctr", 
    country: "US", 
    lng: -90.06495666503906, 
    lat: 29.943716049194336, 
    store_id: 9737
  }, 
  {
    city: "Fort Collins", 
    name: "King Soopers-Fort Collins #97", 
    country: "US", 
    lng: -105.03851318359375, 
    lat: 40.552276611328125, 
    store_id: 9740
  }, 
  {
    city: "Joplin", 
    name: "3rd & Range Line", 
    country: "US", 
    lng: -94.47703552246094, 
    lat: 37.08802795410156, 
    store_id: 9741
  }, 
  {
    city: "Joplin", 
    name: "Price Cutter-Joplin #57", 
    country: "US", 
    lng: -94.53273010253906, 
    lat: 37.07151412963867, 
    store_id: 9742
  }, 
  {
    city: "Reno", 
    name: "Harrahs Reno", 
    country: "US", 
    lng: -119.81251525878906, 
    lat: 39.52777099609375, 
    store_id: 9743
  }, 
  {
    city: "Cincinnati", 
    name: "Kenwood Towne Center", 
    country: "US", 
    lng: -84.3776626586914, 
    lat: 39.20219421386719, 
    store_id: 9744
  }, 
  {
    city: "Anacortes", 
    name: "Safeway-Anacortes #593", 
    country: "US", 
    lng: -122.61190032958984, 
    lat: 48.512603759765625, 
    store_id: 9745
  }, 
  {
    city: "Spokane", 
    name: "Safeway-Spokane #1242", 
    country: "US", 
    lng: -117.37445831298828, 
    lat: 47.629329681396484, 
    store_id: 9746
  }, 
  {
    city: "Delafield", 
    name: "Target Delafield T-864", 
    country: "US", 
    lng: -88.37700653076172, 
    lat: 43.05105972290039, 
    store_id: 9747
  }, 
  {
    city: "San Diego", 
    name: "Vons-San Diego #2118", 
    country: "US", 
    lng: -117.1163558959961, 
    lat: 32.8073616027832, 
    store_id: 9748
  }, 
  {
    city: "Bakersfield", 
    name: "Albertsons-Bakersfield #6377", 
    country: "US", 
    lng: -119.14635467529297, 
    lat: 35.3821907043457, 
    store_id: 9749
  }, 
  {
    city: "Camarillo", 
    name: "Vons-Camarillo #1672", 
    country: "US", 
    lng: -119.03817749023438, 
    lat: 34.22603225708008, 
    store_id: 9750
  }, 
  {
    city: "Escondido", 
    name: "Vons-Escondido #2344", 
    country: "US", 
    lng: -117.07352447509766, 
    lat: 33.10289764404297, 
    store_id: 9751
  }, 
  {
    city: "Casselberry", 
    name: "Target Casselberry T-898", 
    country: "US", 
    lng: -81.34039306640625, 
    lat: 28.671316146850586, 
    store_id: 9752
  }, 
  {
    city: "Garden City", 
    name: "Target Garden City T-906", 
    country: "US", 
    lng: -100.84310150146484, 
    lat: 37.98002624511719, 
    store_id: 9753
  }, 
  {
    city: "Las Vegas", 
    name: "LAS Term 3, Conc D, Gates 31-43", 
    country: "US", 
    lng: -115.14085388183594, 
    lat: 36.05673599243164, 
    store_id: 9756
  }, 
  {
    city: "Forest Grove", 
    name: "Safeway-Forest Grove #406", 
    country: "US", 
    lng: -123.09535217285156, 
    lat: 45.51999282836914, 
    store_id: 9757
  }, 
  {
    city: "Memphis", 
    name: "MEM - Concourse C, Space C16", 
    country: "US", 
    lng: -89.98177337646484, 
    lat: 35.051944732666016, 
    store_id: 9759
  }, 
  {
    city: "Tucson", 
    name: "Safeway-Tucson #1255", 
    country: "US", 
    lng: -110.97491455078125, 
    lat: 32.33597183227539, 
    store_id: 9760
  }, 
  {
    city: "Macon", 
    name: "I-75 @ Tom Hill Sr Blvd", 
    country: "US", 
    lng: -83.68785095214844, 
    lat: 32.899757385253906, 
    store_id: 9761
  }, 
  {
    city: "Plantation", 
    name: "Sunrise Jacaranda Square", 
    country: "US", 
    lng: -80.26854705810547, 
    lat: 26.147924423217773, 
    store_id: 9762
  }, 
  {
    city: "College Park", 
    name: "University of Maryland", 
    country: "US", 
    lng: -76.93890380859375, 
    lat: 38.98048782348633, 
    store_id: 9763
  }, 
  {
    city: "Astoria", 
    name: "35th Ave and 37th St", 
    country: "US", 
    lng: -73.9234848022461, 
    lat: 40.75590896606445, 
    store_id: 9764
  }, 
  {
    city: "El Paso", 
    name: "Mesa & Kerby", 
    country: "US", 
    lng: -106.50049591064453, 
    lat: 31.77442169189453, 
    store_id: 9765
  }, 
  {
    city: "Fife", 
    name: "Pacific Highway & Willow St-Fife", 
    country: "US", 
    lng: -122.36514282226562, 
    lat: 47.242767333984375, 
    store_id: 9766
  }, 
  {
    city: "Larkspur", 
    name: "Larkspur Landing - Center Court", 
    country: "US", 
    lng: -122.5094223022461, 
    lat: 37.947608947753906, 
    store_id: 9768
  }, 
  {
    city: "Las Vegas", 
    name: "LAS Term C", 
    country: "US", 
    lng: -115.14725494384766, 
    lat: 36.081302642822266, 
    store_id: 9769
  }, 
  {
    city: "Brookings", 
    name: "Hy-Vee - Brookings #1", 
    country: "US", 
    lng: -96.76979064941406, 
    lat: 44.298095703125, 
    store_id: 9770
  }, 
  {
    city: "Yankton", 
    name: "Hy-Vee - Yankton #1", 
    country: "US", 
    lng: -97.39543151855469, 
    lat: 42.89136505126953, 
    store_id: 9771
  }, 
  {
    city: "Oceanside", 
    name: "Old Grove & Mission, Oceanside", 
    country: "US", 
    lng: -117.30767059326172, 
    lat: 33.231544494628906, 
    store_id: 9773
  }, 
  {
    city: "Ontario", 
    name: "Archibald & Inland Empire", 
    country: "US", 
    lng: -117.59379577636719, 
    lat: 34.0718994140625, 
    store_id: 9774
  }, 
  {
    city: "Freedom", 
    name: "Freedom & Airport", 
    country: "US", 
    lng: -121.77713012695312, 
    lat: 36.938392639160156, 
    store_id: 9775
  }, 
  {
    city: "Reno", 
    name: "Robb & Mae Anne - Reno", 
    country: "US", 
    lng: -119.88178253173828, 
    lat: 39.527313232421875, 
    store_id: 9778
  }, 
  {
    city: "Aiken", 
    name: "Kroger-Aiken #675", 
    country: "US", 
    lng: -81.7211685180664, 
    lat: 33.52567672729492, 
    store_id: 9779
  }, 
  {
    city: "Louisville", 
    name: "Target Louisville T-1071", 
    country: "US", 
    lng: -85.55718994140625, 
    lat: 38.29700469970703, 
    store_id: 9780
  }, 
  {
    city: "Marysville", 
    name: "Meijer-Marysville #229", 
    country: "US", 
    lng: -82.497802734375, 
    lat: 42.90872573852539, 
    store_id: 9781
  }, 
  {
    city: "Phoenix", 
    name: "Target Phoenix T-851", 
    country: "US", 
    lng: -112.21858978271484, 
    lat: 33.475704193115234, 
    store_id: 9783
  }, 
  {
    city: "Leominster", 
    name: "Leominster, Commercial Road", 
    country: "US", 
    lng: -71.74166107177734, 
    lat: 42.53506851196289, 
    store_id: 9784
  }, 
  {
    city: "Grand Rapids", 
    name: "Woodland Mall - Center Court", 
    country: "US", 
    lng: -85.58829498291016, 
    lat: 42.9163818359375, 
    store_id: 9785
  }, 
  {
    city: "White Plains", 
    name: "Westchester Mall Level 3", 
    country: "US", 
    lng: -73.75949096679688, 
    lat: 41.03171157836914, 
    store_id: 9786
  }, 
  {
    city: "Charlottesville", 
    name: "Kroger - Charlottesville #334", 
    country: "US", 
    lng: -78.47417449951172, 
    lat: 38.08866500854492, 
    store_id: 9787
  }, 
  {
    city: "Burien", 
    name: "Safeway - Burien #1664", 
    country: "US", 
    lng: -122.336181640625, 
    lat: 47.471641540527344, 
    store_id: 9788
  }, 
  {
    city: "Westminster", 
    name: "Pavillions - Westminster #2206", 
    country: "US", 
    lng: -117.9875717163086, 
    lat: 33.724220275878906, 
    store_id: 9789
  }, 
  {
    city: "Phoenix", 
    name: "24th St & Baseline, Phoenix", 
    country: "US", 
    lng: -112.03068542480469, 
    lat: 33.37866973876953, 
    store_id: 9790
  }, 
  {
    city: "Oxnard", 
    name: "Saviers & Channel Islands, Oxnard", 
    country: "US", 
    lng: -119.17713928222656, 
    lat: 34.171470642089844, 
    store_id: 9791
  }, 
  {
    city: "Mesquite", 
    name: "Virgin River Hotel & Casino", 
    country: "US", 
    lng: -114.06695556640625, 
    lat: 36.814884185791016, 
    store_id: 9739
  }, 
  {
    city: "Sioux City", 
    name: "Hy-Vee - Sioux City #1", 
    country: "US", 
    lng: -96.4190444946289, 
    lat: 42.52054214477539, 
    store_id: 9794
  }, 
  {
    city: "Moreno Valley", 
    name: "Frederick & Hwy 60, Moreno Valley", 
    country: "US", 
    lng: -117.26179504394531, 
    lat: 33.93901824951172, 
    store_id: 9795
  }, 
  {
    city: "Covina", 
    name: "Citrus & College, Covina", 
    country: "US", 
    lng: -117.89045715332031, 
    lat: 34.08732604980469, 
    store_id: 9796
  }, 
  {
    city: "Greenwood", 
    name: "Emerson & Main", 
    country: "US", 
    lng: -86.08203887939453, 
    lat: 39.61394500732422, 
    store_id: 9797
  }, 
  {
    city: "Lake Oswego", 
    name: "Centerpoint - Lake Oswego", 
    country: "US", 
    lng: -122.73956298828125, 
    lat: 45.419944763183594, 
    store_id: 9798
  }, 
  {
    city: "Tyler", 
    name: "Loop 323 & Troup", 
    country: "US", 
    lng: -95.27792358398438, 
    lat: 32.30878829956055, 
    store_id: 9799
  }, 
  {
    city: "Vancouver", 
    name: "88th & Andresen Rd - Vancouver", 
    country: "US", 
    lng: -122.60095977783203, 
    lat: 45.6859130859375, 
    store_id: 9800
  }, 
  {
    city: "Seattle", 
    name: "1st & Walker-Seattle", 
    country: "US", 
    lng: -122.33393859863281, 
    lat: 47.58420181274414, 
    store_id: 9801
  }, 
  {
    city: "Benbrook", 
    name: "I-20 & Hwy. 377", 
    country: "US", 
    lng: -97.46065521240234, 
    lat: 32.68224334716797, 
    store_id: 9802
  }, 
  {
    city: "Tacoma", 
    name: "Parkland-Tacoma", 
    country: "US", 
    lng: -122.43417358398438, 
    lat: 47.14060974121094, 
    store_id: 9803
  }, 
  {
    city: "Chino", 
    name: "Target Chino Hills T-912", 
    country: "US", 
    lng: -117.719482421875, 
    lat: 33.99916076660156, 
    store_id: 9804
  }, 
  {
    city: "Los Angeles", 
    name: "Sheraton Gateway Hotel", 
    country: "US", 
    lng: -118.39093780517578, 
    lat: 33.9464225769043, 
    store_id: 9805
  }, 
  {
    city: "Marysville", 
    name: "Marysville, OH", 
    country: "US", 
    lng: -83.35037231445312, 
    lat: 40.23670959472656, 
    store_id: 9806
  }, 
  {
    city: "Miami", 
    name: "MIA - Main E Food Ct", 
    country: "US", 
    lng: -80.2637710571289, 
    lat: 25.772571563720703, 
    store_id: 9808
  }, 
  {
    city: "The Woodlands", 
    name: "Six Pines & Lake Woodlands", 
    country: "US", 
    lng: -95.46432495117188, 
    lat: 30.163761138916016, 
    store_id: 9809
  }, 
  {
    city: "Texarkana", 
    name: "I-30 & Richmond", 
    country: "US", 
    lng: -94.08899688720703, 
    lat: 33.457820892333984, 
    store_id: 9812
  }, 
  {
    city: "Chesapeake", 
    name: "Farm Fresh-Chesapeake #190", 
    country: "US", 
    lng: -76.29959106445312, 
    lat: 36.728206634521484, 
    store_id: 9813
  }, 
  {
    city: "Lakewood", 
    name: "Pavilions-Lakewood #2209", 
    country: "US", 
    lng: -118.11682891845703, 
    lat: 33.85655975341797, 
    store_id: 9815
  }, 
  {
    city: "Lake Elsinore", 
    name: "Albertsons-Lake Elsinore #6798", 
    country: "US", 
    lng: -117.36668395996094, 
    lat: 33.68612289428711, 
    store_id: 9816
  }, 
  {
    city: "Miami", 
    name: "Target Miami Dadeland T-1039", 
    country: "US", 
    lng: -80.3047103881836, 
    lat: 25.692941665649414, 
    store_id: 9818
  }, 
  {
    city: "Kings Island", 
    name: "Cedar Fair Kings Island Intl Walk", 
    country: "US", 
    lng: -84.24870300292969, 
    lat: 39.3578987121582, 
    store_id: 9820
  }, 
  {
    city: "Tulalip", 
    name: "Tulalip", 
    country: "US", 
    lng: -122.18864440917969, 
    lat: 48.093360900878906, 
    store_id: 9821
  }, 
  {
    city: "Missoula", 
    name: "Missoula Fresh Market - Reserve", 
    country: "US", 
    lng: -114.04151153564453, 
    lat: 46.83453369140625, 
    store_id: 9822
  }, 
  {
    city: "Plano", 
    name: "Kroger-Plano #563", 
    country: "US", 
    lng: -96.65550231933594, 
    lat: 33.01523971557617, 
    store_id: 9823
  }, 
  {
    city: "Austin", 
    name: "Target Austin T-1061", 
    country: "US", 
    lng: -97.82831573486328, 
    lat: 30.233991622924805, 
    store_id: 9824
  }, 
  {
    city: "Lynnwood", 
    name: "Fred Meyer-Alderwood, WA #688", 
    country: "US", 
    lng: -122.27155303955078, 
    lat: 47.847843170166016, 
    store_id: 9827
  }, 
  {
    city: "Broomfield", 
    name: "King Soopers-Broomfield, CO #86", 
    country: "US", 
    lng: -105.05359649658203, 
    lat: 39.91679763793945, 
    store_id: 9829
  }, 
  {
    city: "Atlanta", 
    name: "Macy's @ Lenox Mall", 
    country: "US", 
    lng: -84.36229705810547, 
    lat: 33.8484001159668, 
    store_id: 9830
  }, 
  {
    city: "Culver City", 
    name: "Target Culver City South T-2632", 
    country: "US", 
    lng: -118.39572143554688, 
    lat: 33.985328674316406, 
    store_id: 9831
  }, 
  {
    city: "Mesquite", 
    name: "Target Mesquite T-2572", 
    country: "US", 
    lng: -96.62187194824219, 
    lat: 32.810890197753906, 
    store_id: 9832
  }, 
  {
    city: "Kyle", 
    name: "Target Kyle T-2725", 
    country: "US", 
    lng: -97.84430694580078, 
    lat: 29.996200561523438, 
    store_id: 9833
  }, 
  {
    city: "Sioux Falls", 
    name: "Target Sioux Falls East T-2540", 
    country: "US", 
    lng: -96.6520004272461, 
    lat: 43.540000915527344, 
    store_id: 9834
  }, 
  {
    city: "Omak", 
    name: "Safeway-Omak #1194", 
    country: "US", 
    lng: -119.51022338867188, 
    lat: 48.41809844970703, 
    store_id: 9836
  }, 
  {
    city: "Palm Bay", 
    name: "Palm Bay Rd & I-95", 
    country: "US", 
    lng: -80.6487045288086, 
    lat: 28.03468132019043, 
    store_id: 9837
  }, 
  {
    city: "San Diego", 
    name: "32nd & University, San Diego", 
    country: "US", 
    lng: -117.1249771118164, 
    lat: 32.74867630004883, 
    store_id: 9838
  }, 
  {
    city: "Rohnert Park", 
    name: "Safeway - Rohnert Park #918", 
    country: "US", 
    lng: -122.70854949951172, 
    lat: 38.34779739379883, 
    store_id: 9841
  }, 
  {
    city: "Irvine", 
    name: "University of California-Irvine", 
    country: "US", 
    lng: -117.84212493896484, 
    lat: 33.6484260559082, 
    store_id: 9845
  }, 
  {
    city: "Sacramento", 
    name: "Antelope & Daly - Sacramento", 
    country: "US", 
    lng: -121.3262939453125, 
    lat: 38.706268310546875, 
    store_id: 9846
  }, 
  {
    city: "Dixon", 
    name: "Safeway - Dixon #1258", 
    country: "US", 
    lng: -121.83895874023438, 
    lat: 38.45703887939453, 
    store_id: 9847
  }, 
  {
    city: "Buena Park", 
    name: "Lincoln & Valley View", 
    country: "US", 
    lng: -118.02977752685547, 
    lat: 33.83200454711914, 
    store_id: 9848
  }, 
  {
    city: "Hesperia", 
    name: "Hesperia & Bear Valley", 
    country: "US", 
    lng: -117.29255676269531, 
    lat: 34.47032928466797, 
    store_id: 9849
  }, 
  {
    city: "Casselberry", 
    name: "SR 436 & Howell Branch Rd", 
    country: "US", 
    lng: -81.31680297851562, 
    lat: 28.625661849975586, 
    store_id: 9852
  }, 
  {
    city: "Venice", 
    name: "Target Venice T-813", 
    country: "US", 
    lng: -82.3909912109375, 
    lat: 27.050273895263672, 
    store_id: 9854
  }, 
  {
    city: "Gainesville", 
    name: "University of Florida Library", 
    country: "US", 
    lng: -82.3428955078125, 
    lat: 29.65121841430664, 
    store_id: 9857
  }, 
  {
    city: "Jacksonville", 
    name: "Town Center Pkwy & Brightman Blvd", 
    country: "US", 
    lng: -81.52680206298828, 
    lat: 30.263233184814453, 
    store_id: 9858
  }, 
  {
    city: "Sarasota", 
    name: "Sarasota Square Mall - First Level", 
    country: "US", 
    lng: -82.4932632446289, 
    lat: 27.234106063842773, 
    store_id: 9859
  }, 
  {
    city: "Estero", 
    name: "Coconut Point", 
    country: "US", 
    lng: -81.80876922607422, 
    lat: 26.40416717529297, 
    store_id: 9860
  }, 
  {
    city: "Bradenton", 
    name: "SR 70 & I-75", 
    country: "US", 
    lng: -82.46407318115234, 
    lat: 27.44352912902832, 
    store_id: 9861
  }, 
  {
    city: "Tallahassee", 
    name: "Capital Circle & Blair Stone", 
    country: "US", 
    lng: -84.2375717163086, 
    lat: 30.403228759765625, 
    store_id: 9866
  }, 
  {
    city: "Lakewood", 
    name: "Safeway - Lakewood #2342", 
    country: "US", 
    lng: -105.1224365234375, 
    lat: 39.6811637878418, 
    store_id: 9867
  }, 
  {
    city: "Clayton", 
    name: "Clayton, NC", 
    country: "US", 
    lng: -78.49797821044922, 
    lat: 35.6660041809082, 
    store_id: 9868
  }, 
  {
    city: "Newnan", 
    name: "Kroger - Newnan #647", 
    country: "US", 
    lng: -84.75212097167969, 
    lat: 33.37582778930664, 
    store_id: 9869
  }, 
  {
    city: "Nashville", 
    name: "Metrocenter & Dominican", 
    country: "US", 
    lng: -86.7978286743164, 
    lat: 36.187713623046875, 
    store_id: 9870
  }, 
  {
    city: "Brentwood", 
    name: "Nolensville & Concord", 
    country: "US", 
    lng: -86.69223022460938, 
    lat: 35.9991340637207, 
    store_id: 9871
  }, 
  {
    city: "Norfolk", 
    name: "NAB Little Creek", 
    country: "US", 
    lng: -76.16230773925781, 
    lat: 36.91450119018555, 
    store_id: 9873
  }, 
  {
    city: "Downey", 
    name: "Lakewood & Telegraph, Downey", 
    country: "US", 
    lng: -118.11073303222656, 
    lat: 33.961090087890625, 
    store_id: 9874
  }, 
  {
    city: "Irvine", 
    name: "The Village Apartments", 
    country: "US", 
    lng: -117.75041198730469, 
    lat: 33.65312576293945, 
    store_id: 9876
  }, 
  {
    city: "Page", 
    name: "Safeway - Page #249", 
    country: "US", 
    lng: -111.4585189819336, 
    lat: 36.915977478027344, 
    store_id: 9887
  }, 
  {
    city: "Mechanicsville", 
    name: "Bell Creek", 
    country: "US", 
    lng: -77.35619354248047, 
    lat: 37.60711669921875, 
    store_id: 9888
  }, 
  {
    city: "Reno", 
    name: "Grand Sierra Resort", 
    country: "US", 
    lng: -119.77944946289062, 
    lat: 39.523399353027344, 
    store_id: 9889
  }, 
  {
    city: "Knoxville", 
    name: "University of Tennessee Student Cen", 
    country: "US", 
    lng: -83.9259033203125, 
    lat: 35.95431137084961, 
    store_id: 9890
  }, 
  {
    city: "Austin", 
    name: "Downtown Austin Courtyard", 
    country: "US", 
    lng: -97.74044799804688, 
    lat: 30.26546859741211, 
    store_id: 9891
  }, 
  {
    city: "Norfolk", 
    name: "Norfolk Naval Station - Navy Exchan", 
    country: "US", 
    lng: -76.3031997680664, 
    lat: 36.940399169921875, 
    store_id: 9892
  }, 
  {
    city: "Sterling", 
    name: "IAD -  West Bag Claim", 
    country: "US", 
    lng: -77.44976806640625, 
    lat: 38.958187103271484, 
    store_id: 9893
  }, 
  {
    city: "Clovis", 
    name: "Vons-Clovis #1756", 
    country: "US", 
    lng: -119.68505096435547, 
    lat: 36.835960388183594, 
    store_id: 9894
  }, 
  {
    city: "Stockton", 
    name: "Morada Lane & Hwy 99 - Stockton", 
    country: "US", 
    lng: -121.26074981689453, 
    lat: 38.03732681274414, 
    store_id: 9895
  }, 
  {
    city: "Aurora", 
    name: "Safeway #137 - Aurora", 
    country: "US", 
    lng: -104.84564971923828, 
    lat: 39.69599533081055, 
    store_id: 9896
  }, 
  {
    city: "Greenville", 
    name: "Haywood Mall", 
    country: "US", 
    lng: -82.33354949951172, 
    lat: 34.84946823120117, 
    store_id: 9897
  }, 
  {
    city: "Charleston", 
    name: "Harris Teeter Charleston #456", 
    country: "US", 
    lng: -79.9364013671875, 
    lat: 32.74184799194336, 
    store_id: 9898
  }, 
  {
    city: "Leesburg", 
    name: "Harris Teeter-Ashburn #100", 
    country: "US", 
    lng: -77.4709243774414, 
    lat: 39.06035232543945, 
    store_id: 9900
  }, 
  {
    city: "Kent", 
    name: "Safeway - Kent #459", 
    country: "US", 
    lng: -122.19561004638672, 
    lat: 47.415321350097656, 
    store_id: 9901
  }, 
  {
    city: "OXNARD", 
    name: "Vons - Oxnard #2825", 
    country: "US", 
    lng: -119.2217025756836, 
    lat: 34.18851089477539, 
    store_id: 9902
  }, 
  {
    city: "Schaumburg", 
    name: "Super Target West Schaumburg ST-835", 
    country: "US", 
    lng: -88.1458740234375, 
    lat: 42.023216247558594, 
    store_id: 9903
  }, 
  {
    city: "Lebanon", 
    name: "Kroger - Lebanon #447", 
    country: "US", 
    lng: -84.1816177368164, 
    lat: 39.453765869140625, 
    store_id: 9905
  }, 
  {
    city: "Vista", 
    name: "Sycamore & Shadowridge", 
    country: "US", 
    lng: -117.21857452392578, 
    lat: 33.162811279296875, 
    store_id: 9906
  }, 
  {
    city: "Fresno", 
    name: "Ashlan & Blythe, Fresno", 
    country: "US", 
    lng: -119.87245178222656, 
    lat: 36.79316711425781, 
    store_id: 9907
  }, 
  {
    city: "Fresno", 
    name: "Riverpark North", 
    country: "US", 
    lng: -119.7903823852539, 
    lat: 36.84817123413086, 
    store_id: 9908
  }, 
  {
    city: "Prosser", 
    name: "Merlot Dr & Wine Country Rd - Pross", 
    country: "US", 
    lng: -119.79004669189453, 
    lat: 46.219337463378906, 
    store_id: 9909
  }, 
  {
    city: "Mishawaka", 
    name: "Meijer - Mishawaka #128", 
    country: "US", 
    lng: -86.17649841308594, 
    lat: 41.59320068359375, 
    store_id: 9911
  }, 
  {
    city: "Ft. Wayne", 
    name: "Meijer - Ft. Wayne #124", 
    country: "US", 
    lng: -85.16517639160156, 
    lat: 41.137813568115234, 
    store_id: 9913
  }, 
  {
    city: "Mishawaka", 
    name: "Martin's #25 - Gumwood", 
    country: "US", 
    lng: -86.17525482177734, 
    lat: 41.72515869140625, 
    store_id: 9914
  }, 
  {
    city: "Lawrenceville", 
    name: "Kroger-Lawrenceville #424", 
    country: "US", 
    lng: -83.98690795898438, 
    lat: 34.00503921508789, 
    store_id: 9917
  }, 
  {
    city: "Kennesaw", 
    name: "Target Kennesaw T-981", 
    country: "US", 
    lng: -84.57316589355469, 
    lat: 34.00818634033203, 
    store_id: 9920
  }, 
  {
    city: "Denver", 
    name: "Park Ave & Globeville- Denver", 
    country: "US", 
    lng: -104.99455261230469, 
    lat: 39.76547622680664, 
    store_id: 9922
  }, 
  {
    city: "Longmont", 
    name: "17th & Main- Longmont", 
    country: "US", 
    lng: -105.10260009765625, 
    lat: 40.19061279296875, 
    store_id: 9923
  }, 
  {
    city: "Arvada", 
    name: "58th & Kipling- Arvada", 
    country: "US", 
    lng: -105.1093521118164, 
    lat: 39.80217361450195, 
    store_id: 9926
  }, 
  {
    city: "Conifer", 
    name: "Safeway - Conifer #2792", 
    country: "US", 
    lng: -105.30364227294922, 
    lat: 39.527198791503906, 
    store_id: 9927
  }, 
  {
    city: "Boulder", 
    name: "Twenty Ninth Street", 
    country: "US", 
    lng: -105.25547790527344, 
    lat: 40.01865768432617, 
    store_id: 9929
  }, 
  {
    city: "Chicago", 
    name: "Millennium Station - Underground", 
    country: "US", 
    lng: -87.62410736083984, 
    lat: 41.88511276245117, 
    store_id: 9931
  }, 
  {
    city: "St. George", 
    name: "W Sunset Blvd & N Bluff St", 
    country: "US", 
    lng: -113.60196685791016, 
    lat: 37.126590728759766, 
    store_id: 9933
  }, 
  {
    city: "Columbia", 
    name: "Snowden River", 
    country: "US", 
    lng: -76.83942413330078, 
    lat: 39.176326751708984, 
    store_id: 9934
  }, 
  {
    city: "Warren", 
    name: "12 Mile & Mound", 
    country: "US", 
    lng: -83.04745483398438, 
    lat: 42.50753402709961, 
    store_id: 9935
  }, 
  {
    city: "Battle Creek", 
    name: "Battle Creek, Beckley & I-94", 
    country: "US", 
    lng: -85.179443359375, 
    lat: 42.26226043701172, 
    store_id: 9936
  }, 
  {
    city: "Tolleson", 
    name: "99th Ave & Lower Buckeye", 
    country: "US", 
    lng: -112.27194213867188, 
    lat: 33.42263412475586, 
    store_id: 9937
  }, 
  {
    city: "Suwanee", 
    name: "Peachtree Pkwy & Brookwood Rd", 
    country: "US", 
    lng: -84.1744155883789, 
    lat: 34.09498977661133, 
    store_id: 9938
  }, 
  {
    city: "Lawrenceville", 
    name: "Hwy 124 & Webb Gin House Rd", 
    country: "US", 
    lng: -84.00605773925781, 
    lat: 33.90024185180664, 
    store_id: 9939
  }, 
  {
    city: "Winston-Salem", 
    name: "Hanes Mall Kiosk", 
    country: "US", 
    lng: -80.29997253417969, 
    lat: 36.070430755615234, 
    store_id: 9940
  }, 
  {
    city: "Albuquerque", 
    name: "Smiths-Albuquerque #439", 
    country: "US", 
    lng: -106.49649047851562, 
    lat: 35.13134765625, 
    store_id: 9941
  }, 
  {
    city: "Surprise", 
    name: "Bell & Brookside, Surprise", 
    country: "US", 
    lng: -112.39083862304688, 
    lat: 33.63904571533203, 
    store_id: 9946
  }, 
  {
    city: "Tustin", 
    name: "Tustin Marketplace", 
    country: "US", 
    lng: -117.79309844970703, 
    lat: 33.72442626953125, 
    store_id: 9947
  }, 
  {
    city: "Los Angeles", 
    name: "3rd & Gage, Los Angeles", 
    country: "US", 
    lng: -118.18421936035156, 
    lat: 34.03362274169922, 
    store_id: 9948
  }, 
  {
    city: "Honolulu", 
    name: "Moanalua Shopping Center", 
    country: "US", 
    lng: -157.9287567138672, 
    lat: 21.344728469848633, 
    store_id: 9949
  }, 
  {
    city: "Seattle", 
    name: "Columbia Tower 40th Floor- Seattle", 
    country: "US", 
    lng: -122.33069610595703, 
    lat: 47.60459899902344, 
    store_id: 9950
  }, 
  {
    city: "Springfield", 
    name: "Target Springfield T-1031", 
    country: "US", 
    lng: -93.26314544677734, 
    lat: 37.15180206298828, 
    store_id: 9951
  }, 
  {
    city: "Dallas", 
    name: "Target Dallas/Medallion T-55", 
    country: "US", 
    lng: -96.75479888916016, 
    lat: 32.85620880126953, 
    store_id: 9952
  }, 
  {
    city: "Fort Belvoir", 
    name: "AAFES Ft. Belvoir", 
    country: "US", 
    lng: -77.14315795898438, 
    lat: 38.69744873046875, 
    store_id: 9953
  }, 
  {
    city: "Denver", 
    name: "44th Ave & Federal Blvd-Denver", 
    country: "US", 
    lng: -105.02471160888672, 
    lat: 39.776405334472656, 
    store_id: 9955
  }, 
  {
    city: "Easton", 
    name: "Giant Landover-Easton #323", 
    country: "US", 
    lng: -76.05567169189453, 
    lat: 38.77468490600586, 
    store_id: 9957
  }, 
  {
    city: "Cary", 
    name: "Harris Teeter-Cary #138", 
    country: "US", 
    lng: -78.85201263427734, 
    lat: 35.79027557373047, 
    store_id: 9958
  }, 
  {
    city: "Riverside", 
    name: "Van Buren & Arlington", 
    country: "US", 
    lng: -117.4543685913086, 
    lat: 33.94536209106445, 
    store_id: 9959
  }, 
  {
    city: "Fayetteville", 
    name: "College & Joyce", 
    country: "US", 
    lng: -94.14584350585938, 
    lat: 36.12273406982422, 
    store_id: 9960
  }, 
  {
    city: "Flagstaff", 
    name: "Safeway-Flagstaff #270", 
    country: "US", 
    lng: -111.57857513427734, 
    lat: 35.225833892822266, 
    store_id: 9961
  }, 
  {
    city: "Flagstaff", 
    name: "Safeway - Flagstaff #1225", 
    country: "US", 
    lng: -111.6219711303711, 
    lat: 35.21976089477539, 
    store_id: 9962
  }, 
  {
    city: "Washington", 
    name: "Hamilton Crowne Plaza", 
    country: "US", 
    lng: -77.03175354003906, 
    lat: 38.903076171875, 
    store_id: 9963
  }, 
  {
    city: "Miami", 
    name: "Target Miami T-968", 
    country: "US", 
    lng: -80.32068634033203, 
    lat: 25.677541732788086, 
    store_id: 9964
  }, 
  {
    city: "Philadelphia", 
    name: "12th & Walnut", 
    country: "US", 
    lng: -75.16064453125, 
    lat: 39.94902420043945, 
    store_id: 9965
  }, 
  {
    city: "Wickenburg", 
    name: "Safeway - Wickenburg #1584", 
    country: "US", 
    lng: -112.77081298828125, 
    lat: 33.96097183227539, 
    store_id: 9968
  }, 
  {
    city: "Bryant", 
    name: "Target Bryant T-2204", 
    country: "US", 
    lng: -92.53041076660156, 
    lat: 34.60431671142578, 
    store_id: 9969
  }, 
  {
    city: "Phoenix", 
    name: "Target Paradise Vall Phoenix  T-233", 
    country: "US", 
    lng: -111.9893569946289, 
    lat: 33.600250244140625, 
    store_id: 9970
  }, 
  {
    city: "Diamond Bar", 
    name: "Target Diamond Bar T-2179", 
    country: "US", 
    lng: -117.8216552734375, 
    lat: 34.00456619262695, 
    store_id: 9971
  }, 
  {
    city: "Livermore", 
    name: "Safeway - Livermore #910", 
    country: "US", 
    lng: -121.77728271484375, 
    lat: 37.68029022216797, 
    store_id: 9972
  }, 
  {
    city: "Hayward", 
    name: "Target Hayward T-2185", 
    country: "US", 
    lng: -122.11982727050781, 
    lat: 37.668182373046875, 
    store_id: 9973
  }, 
  {
    city: "Costa Mesa", 
    name: "Orange Coast College", 
    country: "US", 
    lng: -117.9114761352539, 
    lat: 33.67259216308594, 
    store_id: 9974
  }, 
  {
    city: "Lake Elsinore", 
    name: "Target Lake Elsinore T-2195", 
    country: "US", 
    lng: -117.34268188476562, 
    lat: 33.69202423095703, 
    store_id: 9975
  }, 
  {
    city: "Pleasant Hill", 
    name: "Safeway - Pleasant Hill #928", 
    country: "US", 
    lng: -122.0724105834961, 
    lat: 37.934226989746094, 
    store_id: 9976
  }, 
  {
    city: "Canoga Park", 
    name: "Target Woodland Hills/TopangaT-2143", 
    country: "US", 
    lng: -118.60254669189453, 
    lat: 34.192710876464844, 
    store_id: 9977
  }, 
  {
    city: "Lincoln", 
    name: "Target Lincoln T-2214", 
    country: "US", 
    lng: -121.30274963378906, 
    lat: 38.87107467651367, 
    store_id: 9978
  }, 
  {
    city: "Longmont", 
    name: "Super Target Longmont T-2218", 
    country: "US", 
    lng: -105.13079833984375, 
    lat: 40.14039993286133, 
    store_id: 9979
  }, 
  {
    city: "Westminster", 
    name: "Super Target Westminster ST - 2197", 
    country: "US", 
    lng: -105.05089569091797, 
    lat: 39.93579864501953, 
    store_id: 9980
  }, 
  {
    city: "Fresno", 
    name: "Vons - Fresno #2188", 
    country: "US", 
    lng: -119.75707244873047, 
    lat: 36.86586380004883, 
    store_id: 9981
  }, 
  {
    city: "WILLCOX", 
    name: "Safeway - Willcox #272", 
    country: "US", 
    lng: -109.84227752685547, 
    lat: 32.26326370239258, 
    store_id: 9982
  }, 
  {
    city: "Norfolk", 
    name: "Target Norfolk T-1048", 
    country: "US", 
    lng: -76.21244812011719, 
    lat: 36.86547088623047, 
    store_id: 9984
  }, 
  {
    city: "Albany", 
    name: "ALB Concourse B Times Square", 
    country: "US", 
    lng: -73.80821990966797, 
    lat: 42.74131774902344, 
    store_id: 9985
  }, 
  {
    city: "Martinsburg", 
    name: "Target Martinsburg T-2538", 
    country: "US", 
    lng: -77.99219512939453, 
    lat: 39.442718505859375, 
    store_id: 9986
  }, 
  {
    city: "Cedar Falls", 
    name: "Target Cedar Falls - T-2526", 
    country: "US", 
    lng: -92.4636001586914, 
    lat: 42.47370147705078, 
    store_id: 9987
  }, 
  {
    city: "Hammond", 
    name: "Target Hammond - T-2531", 
    country: "US", 
    lng: -91.02217102050781, 
    lat: 30.440818786621094, 
    store_id: 9988
  }, 
  {
    city: "Waukesha", 
    name: "Target Waukesha South - T-2546", 
    country: "US", 
    lng: -88.25992584228516, 
    lat: 42.9896125793457, 
    store_id: 9989
  }, 
  {
    city: "Vista", 
    name: "Target Vista South T-2165", 
    country: "US", 
    lng: -117.22789764404297, 
    lat: 33.132835388183594, 
    store_id: 9990
  }, 
  {
    city: "West Hollywood", 
    name: "Von's-West Hollywood #2739", 
    country: "US", 
    lng: -118.38662719726562, 
    lat: 34.08372116088867, 
    store_id: 9991
  }, 
  {
    city: "Murrieta", 
    name: "Target Murrieta North T-2499", 
    country: "US", 
    lng: -117.17597198486328, 
    lat: 33.599449157714844, 
    store_id: 9992
  }, 
  {
    city: "Spring Hill", 
    name: "Target Spring Hill East - T-2489", 
    country: "US", 
    lng: -82.59823608398438, 
    lat: 28.49565315246582, 
    store_id: 9994
  }, 
  {
    city: "Lisbon", 
    name: "Target Lisbon T-2433", 
    country: "US", 
    lng: -71.9974136352539, 
    lat: 41.58216857910156, 
    store_id: 9995
  }, 
  {
    city: "Kona", 
    name: "Target Hawaii Kona T-2412", 
    country: "US", 
    lng: -156.0038299560547, 
    lat: 19.649497985839844, 
    store_id: 9996
  }, 
  {
    city: "Warren", 
    name: "Target Warren T-2544", 
    country: "US", 
    lng: -83.08419799804688, 
    lat: 42.494014739990234, 
    store_id: 9997
  }, 
  {
    city: "Stowe", 
    name: "Target W Pottsgrove Twp T-2548", 
    country: "US", 
    lng: -75.65061950683594, 
    lat: 40.26226043701172, 
    store_id: 9998
  }, 
  {
    city: "Cheltenham", 
    name: "Target Cheltenham - T-2527", 
    country: "US", 
    lng: -75.15506744384766, 
    lat: 40.07533264160156, 
    store_id: 9999
  }, 
  {
    city: "West Melbourne", 
    name: "Target West Melbourne - T-2547", 
    country: "US", 
    lng: -80.66500091552734, 
    lat: 28.035600662231445, 
    store_id: 9993
  }, 
  {
    city: "Easton", 
    name: "Target Lower Nazareth T-2536", 
    country: "US", 
    lng: -75.26940155029297, 
    lat: 40.68669891357422, 
    store_id: 10000
  }, 
  {
    city: "Allentown", 
    name: "Target Hanover Township T-2399", 
    country: "US", 
    lng: -75.44239807128906, 
    lat: 40.645198822021484, 
    store_id: 10001
  }, 
  {
    city: "Reading", 
    name: "Target Exeter Township T-2529", 
    country: "US", 
    lng: -75.86001586914062, 
    lat: 40.306583404541016, 
    store_id: 10002
  }, 
  {
    city: "Hampton", 
    name: "Target Hampton T-2501", 
    country: "US", 
    lng: -76.38331604003906, 
    lat: 37.039180755615234, 
    store_id: 10003
  }, 
  {
    city: "Huntsville", 
    name: "Target Huntsville T-2533", 
    country: "US", 
    lng: -95.47434997558594, 
    lat: 30.31451416015625, 
    store_id: 10004
  }, 
  {
    city: "Wylie", 
    name: "Target Wylie - T-2550", 
    country: "US", 
    lng: -96.59329223632812, 
    lat: 33.011199951171875, 
    store_id: 10005
  }, 
  {
    city: "Huntersville", 
    name: "Target Huntersville T-966", 
    country: "US", 
    lng: -80.86172485351562, 
    lat: 35.443199157714844, 
    store_id: 10006
  }, 
  {
    city: "Raleigh", 
    name: "RDU Terminal C Central Atrium", 
    country: "US", 
    lng: -78.79271697998047, 
    lat: 35.878074645996094, 
    store_id: 10007
  }, 
  {
    city: "Indianapolis", 
    name: "IND Concourse B18", 
    country: "US", 
    lng: -86.27420043945312, 
    lat: 39.72779083251953, 
    store_id: 10008
  }, 
  {
    city: "Indianapolis", 
    name: "IND Concourse A Plaza", 
    country: "US", 
    lng: -86.27413940429688, 
    lat: 39.730201721191406, 
    store_id: 10009
  }, 
  {
    city: "Indianapolis", 
    name: "IND Pre Sec Civic Plaza", 
    country: "US", 
    lng: -86.2728042602539, 
    lat: 39.7296257019043, 
    store_id: 10010
  }, 
  {
    city: "San Antonio", 
    name: "The Quarry - East", 
    country: "US", 
    lng: -98.47815704345703, 
    lat: 29.4960994720459, 
    store_id: 10011
  }, 
  {
    city: "Jacksonville", 
    name: "JAX C 6", 
    country: "US", 
    lng: -81.68110656738281, 
    lat: 30.49325180053711, 
    store_id: 10012
  }, 
  {
    city: "Miami", 
    name: "SW 120th St & SW 137th Ave", 
    country: "US", 
    lng: -80.41526794433594, 
    lat: 25.654062271118164, 
    store_id: 10013
  }, 
  {
    city: "Owensboro", 
    name: "Target Owensboro T-757", 
    country: "US", 
    lng: -87.12269592285156, 
    lat: 37.71693420410156, 
    store_id: 10015
  }, 
  {
    city: "Monroe", 
    name: "ULM Student Center", 
    country: "US", 
    lng: -92.07432556152344, 
    lat: 32.52778244018555, 
    store_id: 10016
  }, 
  {
    city: "Joplin", 
    name: "Target Joplin T-774", 
    country: "US", 
    lng: -94.4738540649414, 
    lat: 37.08521270751953, 
    store_id: 10017
  }, 
  {
    city: "Phillipsburg", 
    name: "Stop & Shop - Phillipsburg #816", 
    country: "US", 
    lng: -75.1466293334961, 
    lat: 40.678279876708984, 
    store_id: 10018
  }, 
  {
    city: "New Hyde Park", 
    name: "Stop & Shop-New Hyde Park #570", 
    country: "US", 
    lng: -73.69843292236328, 
    lat: 40.74135208129883, 
    store_id: 10019
  }, 
  {
    city: "Galloway", 
    name: "Kroger - Galloway #623", 
    country: "US", 
    lng: -83.15592193603516, 
    lat: 39.9516716003418, 
    store_id: 10020
  }, 
  {
    city: "Milton", 
    name: "Safeway - Milton #3545", 
    country: "US", 
    lng: -122.29544830322266, 
    lat: 47.249122619628906, 
    store_id: 10023
  }, 
  {
    city: "Spanish Fort", 
    name: "I-10 & Hwy 181", 
    country: "US", 
    lng: -87.85153198242188, 
    lat: 30.667173385620117, 
    store_id: 10024
  }, 
  {
    city: "Victorville", 
    name: "Roy Rogers & Civic Drive", 
    country: "US", 
    lng: -117.3256607055664, 
    lat: 34.521114349365234, 
    store_id: 10025
  }, 
  {
    city: "Santa Clarita", 
    name: "Newall & Carl Ct", 
    country: "US", 
    lng: -118.51631927490234, 
    lat: 34.372047424316406, 
    store_id: 10027
  }, 
  {
    city: "Baldwin Park", 
    name: "Baldwin Park & Francisquito", 
    country: "US", 
    lng: -117.97889709472656, 
    lat: 34.07062911987305, 
    store_id: 10028
  }, 
  {
    city: "Lake Elsinore", 
    name: "Collier & Central, Lake Elsinore", 
    country: "US", 
    lng: -117.34204864501953, 
    lat: 33.690460205078125, 
    store_id: 10029
  }, 
  {
    city: "Auburn", 
    name: "Hwy 49 & Combie", 
    country: "US", 
    lng: -121.09356689453125, 
    lat: 39.04210662841797, 
    store_id: 10030
  }, 
  {
    city: "Santa Rosa", 
    name: "Santa Rosa & Yolanda", 
    country: "US", 
    lng: -122.71292114257812, 
    lat: 38.41244125366211, 
    store_id: 10031
  }, 
  {
    city: "West Sacramento", 
    name: "Lake & Enterprise", 
    country: "US", 
    lng: -121.57978057861328, 
    lat: 38.57260513305664, 
    store_id: 10032
  }, 
  {
    city: "Oakland", 
    name: "Estuary Cove - Oakland", 
    country: "US", 
    lng: -122.25100708007812, 
    lat: 37.78794860839844, 
    store_id: 10033
  }, 
  {
    city: "La Mesa", 
    name: "La Mesa & Spring, La Mesa", 
    country: "US", 
    lng: -117.02153015136719, 
    lat: 32.76424026489258, 
    store_id: 10034
  }, 
  {
    city: "Los Angeles", 
    name: "11th & Grand", 
    country: "US", 
    lng: -118.26232147216797, 
    lat: 34.04151916503906, 
    store_id: 10036
  }, 
  {
    city: "Livermore", 
    name: "Isabel & Vineyard", 
    country: "US", 
    lng: -121.8044662475586, 
    lat: 37.650760650634766, 
    store_id: 10037
  }, 
  {
    city: "Aurora", 
    name: "Mississippi and Buckley", 
    country: "US", 
    lng: -104.79046630859375, 
    lat: 39.694217681884766, 
    store_id: 10038
  }, 
  {
    city: "River Forest", 
    name: "Lake & Harlem - River Forest", 
    country: "US", 
    lng: -87.80521392822266, 
    lat: 41.88754653930664, 
    store_id: 10039
  }, 
  {
    city: "Orland Park", 
    name: "Orland Square Mall", 
    country: "US", 
    lng: -87.84803771972656, 
    lat: 41.619686126708984, 
    store_id: 10040
  }, 
  {
    city: "Crown Point", 
    name: "Crown Point-Summit & Main", 
    country: "US", 
    lng: -87.3636703491211, 
    lat: 41.426902770996094, 
    store_id: 10042
  }, 
  {
    city: "Fort Wayne", 
    name: "Jefferson & Fairfield", 
    country: "US", 
    lng: -85.14563751220703, 
    lat: 41.075408935546875, 
    store_id: 10043
  }, 
  {
    city: "Lexington", 
    name: "Fayette Mall", 
    country: "US", 
    lng: -84.52804565429688, 
    lat: 37.98920440673828, 
    store_id: 10044
  }, 
  {
    city: "Andrews AFB", 
    name: "Andrews Air Force Base", 
    country: "US", 
    lng: -76.88386535644531, 
    lat: 38.81557083129883, 
    store_id: 10046
  }, 
  {
    city: "Silver Spring", 
    name: "Plaza del Mercado", 
    country: "US", 
    lng: -77.04658508300781, 
    lat: 39.09101104736328, 
    store_id: 10047
  }, 
  {
    city: "Nottingham", 
    name: "Perry Hall", 
    country: "US", 
    lng: -76.48139190673828, 
    lat: 39.398216247558594, 
    store_id: 10048
  }, 
  {
    city: "St. Louis", 
    name: "Big Bend & Dougherty Ferry", 
    country: "US", 
    lng: -90.47504425048828, 
    lat: 38.568660736083984, 
    store_id: 10050
  }, 
  {
    city: "Raleigh", 
    name: "Lake Boone Trail", 
    country: "US", 
    lng: -78.69375610351562, 
    lat: 35.81608963012695, 
    store_id: 10051
  }, 
  {
    city: "North Platte", 
    name: "North Platte-I80 & S Hwy 83", 
    country: "US", 
    lng: -100.76504516601562, 
    lat: 41.115745544433594, 
    store_id: 10052
  }, 
  {
    city: "Portland", 
    name: "Sylvan Retail- Portland", 
    country: "US", 
    lng: -122.73493194580078, 
    lat: 45.509517669677734, 
    store_id: 10053
  }, 
  {
    city: "Modesto", 
    name: "Kansas Avenue & Hwy 99 - Modesto", 
    country: "US", 
    lng: -121.01849365234375, 
    lat: 37.64554977416992, 
    store_id: 10054
  }, 
  {
    city: "Stockton", 
    name: "Arch Road & Hwy 99 - Stockton", 
    country: "US", 
    lng: -121.22205352783203, 
    lat: 37.905555725097656, 
    store_id: 10055
  }, 
  {
    city: "Acworth", 
    name: "Super Target Acworth ST-2091", 
    country: "US", 
    lng: -84.6839599609375, 
    lat: 34.03981018066406, 
    store_id: 10014
  }, 
  {
    city: "Washington", 
    name: "1110 Vermont Ave., NW", 
    country: "US", 
    lng: -77.03317260742188, 
    lat: 38.904205322265625, 
    store_id: 10056
  }, 
  {
    city: "Washington", 
    name: "Capital Gallery", 
    country: "US", 
    lng: -77.02155303955078, 
    lat: 38.88606643676758, 
    store_id: 10057
  }, 
  {
    city: "Waterloo", 
    name: "Waterloo-Flammang & Crossroads", 
    country: "US", 
    lng: -92.32660675048828, 
    lat: 42.46021270751953, 
    store_id: 10060
  }, 
  {
    city: "Chicago", 
    name: "Fullerton & Racine - Lincoln Park", 
    country: "US", 
    lng: -87.66033935546875, 
    lat: 41.925052642822266, 
    store_id: 10061
  }, 
  {
    city: "Panama City Beach", 
    name: "Target Panama City T-2208", 
    country: "US", 
    lng: -85.88390350341797, 
    lat: 30.22100067138672, 
    store_id: 10062
  }, 
  {
    city: "Silverdale", 
    name: "Bangor Submarine Base", 
    country: "US", 
    lng: -122.7118911743164, 
    lat: 47.68950271606445, 
    store_id: 10063
  }, 
  {
    city: "Clarksburg", 
    name: "Clarksburg", 
    country: "US", 
    lng: -80.28179931640625, 
    lat: 39.276065826416016, 
    store_id: 10064
  }, 
  {
    city: "Fort Lauderdale", 
    name: "17th St & 15th Ave", 
    country: "US", 
    lng: -80.12740325927734, 
    lat: 26.100860595703125, 
    store_id: 10065
  }, 
  {
    city: "Miami", 
    name: "10th St & South Miami Ave.", 
    country: "US", 
    lng: -80.19297790527344, 
    lat: 25.765060424804688, 
    store_id: 10067
  }, 
  {
    city: "Saint Petersburg", 
    name: "4th St & 50th Ave", 
    country: "US", 
    lng: -82.63884735107422, 
    lat: 27.817459106445312, 
    store_id: 10068
  }, 
  {
    city: "San Antonio", 
    name: "1604 & 281 - NE Corner", 
    country: "US", 
    lng: -98.4661636352539, 
    lat: 29.60959243774414, 
    store_id: 10069
  }, 
  {
    city: "Richmond", 
    name: "Grove Ave.", 
    country: "US", 
    lng: -77.51864624023438, 
    lat: 37.57326126098633, 
    store_id: 10070
  }, 
  {
    city: "Roanoke", 
    name: "Towers, VA", 
    country: "US", 
    lng: -79.95516967773438, 
    lat: 37.2548942565918, 
    store_id: 10071
  }, 
  {
    city: "Springfield", 
    name: "Springfield Plaza", 
    country: "US", 
    lng: -77.18998718261719, 
    lat: 38.77909851074219, 
    store_id: 10072
  }, 
  {
    city: "Winchester", 
    name: "Winchester Gateway", 
    country: "US", 
    lng: -78.13138580322266, 
    lat: 39.18612289428711, 
    store_id: 10074
  }, 
  {
    city: "Belfair", 
    name: "Belfair Valley Plaza-Belfair, WA", 
    country: "US", 
    lng: -122.82408142089844, 
    lat: 47.453189849853516, 
    store_id: 10075
  }, 
  {
    city: "Brighton", 
    name: "Super Target Brighton ST-2183", 
    country: "US", 
    lng: -104.79950714111328, 
    lat: 39.97169876098633, 
    store_id: 10077
  }, 
  {
    city: "Parker", 
    name: "Super Target Parker ST-2219", 
    country: "US", 
    lng: -104.77312469482422, 
    lat: 39.513301849365234, 
    store_id: 10079
  }, 
  {
    city: "Englewood", 
    name: "Broadway and Bates Ave", 
    country: "US", 
    lng: -104.98722076416016, 
    lat: 39.664268493652344, 
    store_id: 10080
  }, 
  {
    city: "Windsor", 
    name: "Target - Windsor T-2213", 
    country: "US", 
    lng: -72.65042877197266, 
    lat: 41.89280319213867, 
    store_id: 10081
  }, 
  {
    city: "Mason", 
    name: "Mason Montgomery & Irwin Simpson", 
    country: "US", 
    lng: -84.31367492675781, 
    lat: 39.314937591552734, 
    store_id: 10082
  }, 
  {
    city: "Yukon", 
    name: "I 40 & Garth Brooks", 
    country: "US", 
    lng: -97.75941467285156, 
    lat: 35.484825134277344, 
    store_id: 10083
  }, 
  {
    city: "Norman", 
    name: "Main & Flood", 
    country: "US", 
    lng: -97.45543670654297, 
    lat: 35.21805953979492, 
    store_id: 10084
  }, 
  {
    city: "Warrenton", 
    name: "Young's Bay Plaza- Warrenton", 
    country: "US", 
    lng: -123.9003677368164, 
    lat: 46.16073226928711, 
    store_id: 10085
  }, 
  {
    city: "Broomall", 
    name: "Broomall", 
    country: "US", 
    lng: -75.35712432861328, 
    lat: 39.98088455200195, 
    store_id: 10086
  }, 
  {
    city: "Lansdale", 
    name: "Lansdale", 
    country: "US", 
    lng: -75.29428100585938, 
    lat: 40.247711181640625, 
    store_id: 10087
  }, 
  {
    city: "North Myrtle Beach", 
    name: "North Myrtle Beach", 
    country: "US", 
    lng: -78.67436981201172, 
    lat: 33.83335876464844, 
    store_id: 10088
  }, 
  {
    city: "Waterbury", 
    name: "Target Waterbury T-2156", 
    country: "US", 
    lng: -73.03430938720703, 
    lat: 41.58261489868164, 
    store_id: 10090
  }, 
  {
    city: "Stamford", 
    name: "Stamford Town Center", 
    country: "US", 
    lng: -73.5372314453125, 
    lat: 41.053382873535156, 
    store_id: 10091
  }, 
  {
    city: "Tampa", 
    name: "W Gandy Blvd & S Himes", 
    country: "US", 
    lng: -82.50376892089844, 
    lat: 27.894132614135742, 
    store_id: 10094
  }, 
  {
    city: "Palm Beach Gardens", 
    name: "Gardens Mall - Lower Level", 
    country: "US", 
    lng: -80.08525848388672, 
    lat: 26.84848976135254, 
    store_id: 10095
  }, 
  {
    city: "Cary", 
    name: "High House Road", 
    country: "US", 
    lng: -78.87055969238281, 
    lat: 35.789276123046875, 
    store_id: 10097
  }, 
  {
    city: "East Amherst", 
    name: "East Amherst", 
    country: "US", 
    lng: -78.69720458984375, 
    lat: 43.03213882446289, 
    store_id: 10098
  }, 
  {
    city: "Tulsa", 
    name: "TUL Main Terminal Presecurity", 
    country: "US", 
    lng: -95.88992309570312, 
    lat: 36.190185546875, 
    store_id: 10099
  }, 
  {
    city: "Trevose", 
    name: "Neshaminy", 
    country: "US", 
    lng: -74.96269989013672, 
    lat: 40.13804244995117, 
    store_id: 10100
  }, 
  {
    city: "Williamsport", 
    name: "Williamsport", 
    country: "US", 
    lng: -76.99658203125, 
    lat: 41.24124526977539, 
    store_id: 10101
  }, 
  {
    city: "Hershey", 
    name: "Outlets at Hershey", 
    country: "US", 
    lng: -76.6484603881836, 
    lat: 40.29365158081055, 
    store_id: 10102
  }, 
  {
    city: "San Antonio", 
    name: "Target San Antonio/La Cantera T-2", 
    country: "US", 
    lng: -98.59696197509766, 
    lat: 29.606430053710938, 
    store_id: 10103
  }, 
  {
    city: "Mission", 
    name: "Target Mission T-2237", 
    country: "US", 
    lng: -98.28620147705078, 
    lat: 26.197526931762695, 
    store_id: 10104
  }, 
  {
    city: "McKinney", 
    name: "Super Target McKinney SW ST-2142", 
    country: "US", 
    lng: -96.7306900024414, 
    lat: 33.12901306152344, 
    store_id: 10105
  }, 
  {
    city: "Lubbock", 
    name: "Target Lubbock T-2190", 
    country: "US", 
    lng: -101.94664764404297, 
    lat: 33.5515022277832, 
    store_id: 10106
  }, 
  {
    city: "The Woodlands", 
    name: "Woodlands & Kuykendahl", 
    country: "US", 
    lng: -95.53538513183594, 
    lat: 30.177658081054688, 
    store_id: 10107
  }, 
  {
    city: "Houston", 
    name: "Target Houston/Steeplechase T-2144", 
    country: "US", 
    lng: -95.60518646240234, 
    lat: 29.919069290161133, 
    store_id: 10108
  }, 
  {
    city: "El Paso", 
    name: "Super Target El Paso/Far East ST-22", 
    country: "US", 
    lng: -106.26521301269531, 
    lat: 31.758790969848633, 
    store_id: 10109
  }, 
  {
    city: "Denton", 
    name: "Super Target Denton ST-2145", 
    country: "US", 
    lng: -97.1068344116211, 
    lat: 33.18794631958008, 
    store_id: 10110
  }, 
  {
    city: "McAllen", 
    name: "Target - McAllen T-2224", 
    country: "US", 
    lng: -98.25408172607422, 
    lat: 26.24445343017578, 
    store_id: 10111
  }, 
  {
    city: "Wellington", 
    name: "Super Target Wellington ST-2065", 
    country: "US", 
    lng: -80.20478820800781, 
    lat: 26.59190559387207, 
    store_id: 10059
  }, 
  {
    city: "Rosenberg", 
    name: "Target - Richmond/Rosenberg T-2205", 
    country: "US", 
    lng: -95.7511978149414, 
    lat: 29.548154830932617, 
    store_id: 10112
  }, 
  {
    city: "West Jordan", 
    name: "Target West Jordan T-2150", 
    country: "US", 
    lng: -111.98381042480469, 
    lat: 40.610198974609375, 
    store_id: 10113
  }, 
  {
    city: "Chesapeake", 
    name: "Target Chesapeake South T-2203", 
    country: "US", 
    lng: -76.23413848876953, 
    lat: 36.65855026245117, 
    store_id: 10114
  }, 
  {
    city: "Marysville", 
    name: "Target Arlington T-2192", 
    country: "US", 
    lng: -122.19218444824219, 
    lat: 48.149375915527344, 
    store_id: 10115
  }, 
  {
    city: "Milwaukee", 
    name: "Target West Allis T-2199", 
    country: "US", 
    lng: -88.04498291015625, 
    lat: 42.99699783325195, 
    store_id: 10116
  }, 
  {
    city: "Plover", 
    name: "McDill & Crossroads", 
    country: "US", 
    lng: -89.5130844116211, 
    lat: 44.496952056884766, 
    store_id: 10117
  }, 
  {
    city: "Valley Grove", 
    name: "Target Wheeling/Valley Grove T-22", 
    country: "US", 
    lng: -80.59912872314453, 
    lat: 40.056583404541016, 
    store_id: 10118
  }, 
  {
    city: "Southington", 
    name: "Southington, Queen Street", 
    country: "US", 
    lng: -72.87310028076172, 
    lat: 41.63333511352539, 
    store_id: 10120
  }, 
  {
    city: "Celebration", 
    name: "Front St & Bloom St", 
    country: "US", 
    lng: -81.54130554199219, 
    lat: 28.317657470703125, 
    store_id: 10121
  }, 
  {
    city: "Savannah", 
    name: "Kroger-Savannah #609", 
    country: "US", 
    lng: -80.97712707519531, 
    lat: 32.01628112792969, 
    store_id: 10122
  }, 
  {
    city: "Alexandria", 
    name: "Kroger - Alexandria #381", 
    country: "US", 
    lng: -92.4747543334961, 
    lat: 31.28455924987793, 
    store_id: 10123
  }, 
  {
    city: "Germantown", 
    name: "Kingsview Shopping", 
    country: "US", 
    lng: -77.27941131591797, 
    lat: 39.159847259521484, 
    store_id: 10124
  }, 
  {
    city: "Sarasota", 
    name: "Super Target Sarasota ST-2034", 
    country: "US", 
    lng: -82.4559326171875, 
    lat: 27.387372970581055, 
    store_id: 10125
  }, 
  {
    city: "Miami", 
    name: "Target Miami Central T-2188", 
    country: "US", 
    lng: -80.19384765625, 
    lat: 25.810100555419922, 
    store_id: 10126
  }, 
  {
    city: "Buckhead", 
    name: "Target Buckhead T-2171", 
    country: "US", 
    lng: -84.3643798828125, 
    lat: 33.824302673339844, 
    store_id: 10127
  }, 
  {
    city: "Conyers", 
    name: "Target Conyers T-2174", 
    country: "US", 
    lng: -84.01644134521484, 
    lat: 33.63295364379883, 
    store_id: 10128
  }, 
  {
    city: "Honolulu", 
    name: "HNL Gate 60", 
    country: "US", 
    lng: -157.92367553710938, 
    lat: 21.335023880004883, 
    store_id: 10129
  }, 
  {
    city: "Nampa", 
    name: "Target Nampa T-2206", 
    country: "US", 
    lng: -116.53710174560547, 
    lat: 43.595401763916016, 
    store_id: 10130
  }, 
  {
    city: "Aurora", 
    name: "Target North Aurora T-2177", 
    country: "US", 
    lng: -88.3604736328125, 
    lat: 41.79764938354492, 
    store_id: 10131
  }, 
  {
    city: "Pekin", 
    name: "Pekin-Court & Veterans", 
    country: "US", 
    lng: -89.59916687011719, 
    lat: 40.543052673339844, 
    store_id: 10132
  }, 
  {
    city: "Fort Wayne", 
    name: "Target Ft. Wayne/Glenbrook T-2217", 
    country: "US", 
    lng: -85.13623809814453, 
    lat: 41.11174011230469, 
    store_id: 10133
  }, 
  {
    city: "Kansas City", 
    name: "Target Kansas City T-2222", 
    country: "US", 
    lng: -94.8308334350586, 
    lat: 39.127410888671875, 
    store_id: 10134
  }, 
  {
    city: "Boston", 
    name: "125 Summer St.", 
    country: "US", 
    lng: -71.0576171875, 
    lat: 42.35316848754883, 
    store_id: 10135
  }, 
  {
    city: "North Dartmouth", 
    name: "Target North Dartmouth T-2167", 
    country: "US", 
    lng: -71.00249481201172, 
    lat: 41.638404846191406, 
    store_id: 10136
  }, 
  {
    city: "Abington", 
    name: "Target Abington T-2173", 
    country: "US", 
    lng: -70.93054962158203, 
    lat: 42.11079025268555, 
    store_id: 10137
  }, 
  {
    city: "Biddeford", 
    name: "Target Biddeford T-2166", 
    country: "US", 
    lng: -70.51359558105469, 
    lat: 43.47446823120117, 
    store_id: 10138
  }, 
  {
    city: "Southfield", 
    name: "Target Southfield T-2207", 
    country: "US", 
    lng: -83.22508239746094, 
    lat: 42.51334762573242, 
    store_id: 10140
  }, 
  {
    city: "Wyoming", 
    name: "Byron Ctr & Metro Health Dr", 
    country: "US", 
    lng: -85.72266387939453, 
    lat: 42.86032485961914, 
    store_id: 10141
  }, 
  {
    city: "Minneapolis", 
    name: "Super Target Mpls/Fridley ST-2200", 
    country: "US", 
    lng: -93.25143432617188, 
    lat: 45.066158294677734, 
    store_id: 10142
  }, 
  {
    city: "Medina", 
    name: "Target Medina T-2223", 
    country: "US", 
    lng: -93.52941131591797, 
    lat: 45.04544448852539, 
    store_id: 10143
  }, 
  {
    city: "St Louis Park", 
    name: "Super Target Knollwood ST-2189", 
    country: "US", 
    lng: -93.39244842529297, 
    lat: 44.93638610839844, 
    store_id: 10144
  }, 
  {
    city: "Greensboro", 
    name: "Target Greensboro West T-2108", 
    country: "US", 
    lng: -79.87866973876953, 
    lat: 36.11305618286133, 
    store_id: 10146
  }, 
  {
    city: "Rocky Mount", 
    name: "Target Rocky Mount T-962", 
    country: "US", 
    lng: -77.81309509277344, 
    lat: 35.97196960449219, 
    store_id: 10147
  }, 
  {
    city: "Concord", 
    name: "SuperTarget Kannapolis ST-2169", 
    country: "US", 
    lng: -80.6980972290039, 
    lat: 35.430301666259766, 
    store_id: 10148
  }, 
  {
    city: "Wilson", 
    name: "Target Wilson T-2168", 
    country: "US", 
    lng: -77.96527862548828, 
    lat: 35.74037170410156, 
    store_id: 10149
  }, 
  {
    city: "Goldsboro", 
    name: "Target Goldsboro T-964", 
    country: "US", 
    lng: -77.93877410888672, 
    lat: 35.3808708190918, 
    store_id: 10150
  }, 
  {
    city: "Bismarck", 
    name: "Target Bismarck T-2194", 
    country: "US", 
    lng: -100.78357696533203, 
    lat: 46.79901123046875, 
    store_id: 10151
  }, 
  {
    city: "Somersworth", 
    name: "Target - Somersworth T-2182", 
    country: "US", 
    lng: -70.88179779052734, 
    lat: 43.23291015625, 
    store_id: 10152
  }, 
  {
    city: "Millville", 
    name: "Target Millville T-2170", 
    country: "US", 
    lng: -75.04032135009766, 
    lat: 39.42311477661133, 
    store_id: 10153
  }, 
  {
    city: "Sicklerville", 
    name: "Target Gloucester T-2181", 
    country: "US", 
    lng: -74.99403381347656, 
    lat: 39.747318267822266, 
    store_id: 10154
  }, 
  {
    city: "Las Cruces", 
    name: "Telshore & Commerce, Las Cruces", 
    country: "US", 
    lng: -106.76513671875, 
    lat: 32.34700012207031, 
    store_id: 10155
  }, 
  {
    city: "Las Vegas", 
    name: "Target Las Vegas/Blue Dimond T-2164", 
    country: "US", 
    lng: -115.19723510742188, 
    lat: 36.03960037231445, 
    store_id: 10156
  }, 
  {
    city: "Depew", 
    name: "Target - Cheektowaga/Depew T-2191", 
    country: "US", 
    lng: -78.69882202148438, 
    lat: 42.87889099121094, 
    store_id: 10157
  }, 
  {
    city: "Irondequoit", 
    name: "Target - Irondequoit T-2211", 
    country: "US", 
    lng: -77.57627868652344, 
    lat: 43.197139739990234, 
    store_id: 10158
  }, 
  {
    city: "Zanesville", 
    name: "Zanesville, OH", 
    country: "US", 
    lng: -82.03102111816406, 
    lat: 39.99312973022461, 
    store_id: 10159
  }, 
  {
    city: "Grove City", 
    name: "Grove City, Stringtown Rd", 
    country: "US", 
    lng: -83.04119110107422, 
    lat: 39.879127502441406, 
    store_id: 10160
  }, 
  {
    city: "Norman", 
    name: "Super Target Norman ST-2220", 
    country: "US", 
    lng: -97.48273468017578, 
    lat: 35.23567199707031, 
    store_id: 10161
  }, 
  {
    city: "Harrisburg", 
    name: "Target - Harrisburg T-2186", 
    country: "US", 
    lng: -76.8064193725586, 
    lat: 40.24612045288086, 
    store_id: 10162
  }, 
  {
    city: "Pittsburgh", 
    name: "Target Pittsburgh/North Hills T-220", 
    country: "US", 
    lng: -80.00768280029297, 
    lat: 40.526554107666016, 
    store_id: 10163
  }, 
  {
    city: "Tarentum", 
    name: "Pittsburgh Mills, Tarentum", 
    country: "US", 
    lng: -79.80258178710938, 
    lat: 40.57044982910156, 
    store_id: 10164
  }, 
  {
    city: "Royersford", 
    name: "Target Providence T-2131", 
    country: "US", 
    lng: -75.49845123291016, 
    lat: 40.21095275878906, 
    store_id: 10165
  }, 
  {
    city: "Pittsburgh", 
    name: "Pittsburgh Marriott City Ctr Lobby", 
    country: "US", 
    lng: -79.99200439453125, 
    lat: 40.439735412597656, 
    store_id: 10166
  }, 
  {
    city: "Chesapeake", 
    name: "Farm Fresh-Chesapeake #676", 
    country: "US", 
    lng: -76.20217895507812, 
    lat: 36.764896392822266, 
    store_id: 10167
  }, 
  {
    city: "North Charleston", 
    name: "Int'l Blvd & Bentonville Pkwy", 
    country: "US", 
    lng: -80.01697540283203, 
    lat: 32.867393493652344, 
    store_id: 10168
  }, 
  {
    city: "Mobile", 
    name: "Bel Air Mall - First Level", 
    country: "US", 
    lng: -88.12162780761719, 
    lat: 30.673885345458984, 
    store_id: 10169
  }, 
  {
    city: "Orlando", 
    name: "Plaza Venezia", 
    country: "US", 
    lng: -81.48596954345703, 
    lat: 28.44902229309082, 
    store_id: 10172
  }, 
  {
    city: "Council Bluffs", 
    name: "Hy-Vee Foods-Council Bluffs #2", 
    country: "US", 
    lng: -95.82648468017578, 
    lat: 41.243812561035156, 
    store_id: 10178
  }, 
  {
    city: "Bloomington", 
    name: "Indiana Memorial Union-Bloomington-", 
    country: "US", 
    lng: -86.52362823486328, 
    lat: 39.16793441772461, 
    store_id: 10179
  }, 
  {
    city: "Durham", 
    name: "Kroger - Durham #332", 
    country: "US", 
    lng: -78.9480972290039, 
    lat: 36.018821716308594, 
    store_id: 10181
  }, 
  {
    city: "Apex", 
    name: "Kroger-Apex #357", 
    country: "US", 
    lng: -78.82313537597656, 
    lat: 35.7442512512207, 
    store_id: 10182
  }, 
  {
    city: "Syracuse", 
    name: "Carousel Center Mall", 
    country: "US", 
    lng: -76.17305755615234, 
    lat: 43.0699577331543, 
    store_id: 10183
  }, 
  {
    city: "Mason", 
    name: "Kroger-Mason #426", 
    country: "US", 
    lng: -84.27800750732422, 
    lat: 39.36043167114258, 
    store_id: 10184
  }, 
  {
    city: "Sacramento", 
    name: "Expo & Exposition", 
    country: "US", 
    lng: -121.45074462890625, 
    lat: 38.59836959838867, 
    store_id: 10185
  }, 
  {
    city: "Port Charlotte", 
    name: "Port Charlotte", 
    country: "US", 
    lng: -82.14761352539062, 
    lat: 27.008888244628906, 
    store_id: 10186
  }, 
  {
    city: "Peru", 
    name: "Peru-Rte 251 & I-80", 
    country: "US", 
    lng: -89.12506866455078, 
    lat: 41.371341705322266, 
    store_id: 10187
  }, 
  {
    city: "Miami", 
    name: "Intercontinental Hotel - Miami", 
    country: "US", 
    lng: -80.18531036376953, 
    lat: 25.77239990234375, 
    store_id: 10189
  }, 
  {
    city: "Melbourne", 
    name: "Melbourne Square Mall - FoodCourt", 
    country: "US", 
    lng: -80.65023803710938, 
    lat: 28.081361770629883, 
    store_id: 10190
  }, 
  {
    city: "Bolingbrook", 
    name: "Bolingbrook-Weber & Lilly Cache", 
    country: "US", 
    lng: -88.1263656616211, 
    lat: 41.690834045410156, 
    store_id: 10198
  }, 
  {
    city: "Baltimore", 
    name: "BWI Pre Security Retail", 
    country: "US", 
    lng: -76.66799926757812, 
    lat: 39.17959976196289, 
    store_id: 10200
  }, 
  {
    city: "Glen Burnie", 
    name: "Target Glen Burnie T-1003", 
    country: "US", 
    lng: -76.63455963134766, 
    lat: 39.13306427001953, 
    store_id: 10201
  }, 
  {
    city: "Franklin TWP", 
    name: "Stop & Shop-Franklin #802", 
    country: "US", 
    lng: -74.55870819091797, 
    lat: 40.42959976196289, 
    store_id: 10202
  }, 
  {
    city: "Aloha", 
    name: "Bales Thriftway Farmington", 
    country: "US", 
    lng: -122.85961151123047, 
    lat: 45.478843688964844, 
    store_id: 10205
  }, 
  {
    city: "Mesa", 
    name: "Val Vista & Southern, Mesa", 
    country: "US", 
    lng: -111.75418090820312, 
    lat: 33.39402389526367, 
    store_id: 10207
  }, 
  {
    city: "San Francisco", 
    name: "8th & Townsend", 
    country: "US", 
    lng: -122.4034652709961, 
    lat: 37.77019119262695, 
    store_id: 10208
  }, 
  {
    city: "Canoga Park", 
    name: "Canoga & Sherman Way", 
    country: "US", 
    lng: -118.5974349975586, 
    lat: 34.202823638916016, 
    store_id: 10209
  }, 
  {
    city: "Fresno", 
    name: "First & Shaw, Fresno", 
    country: "US", 
    lng: -119.77136993408203, 
    lat: 36.80829620361328, 
    store_id: 10210
  }, 
  {
    city: "Farmington", 
    name: "Target Farmington T-952", 
    country: "US", 
    lng: -108.14763641357422, 
    lat: 36.76874923706055, 
    store_id: 10211
  }, 
  {
    city: "Woodland Hills", 
    name: "Ventura & Shoup", 
    country: "US", 
    lng: -118.6159439086914, 
    lat: 34.16857147216797, 
    store_id: 10212
  }, 
  {
    city: "Cotati", 
    name: "E Cotati & Lasalle", 
    country: "US", 
    lng: -122.69752502441406, 
    lat: 38.329010009765625, 
    store_id: 10213
  }, 
  {
    city: "Westminster", 
    name: "136th & I-25- Westminster", 
    country: "US", 
    lng: -104.99246978759766, 
    lat: 39.94466018676758, 
    store_id: 10214
  }, 
  {
    city: "Glenwood Springs", 
    name: "I-70 & Midland- Glenwood Springs", 
    country: "US", 
    lng: -107.34281158447266, 
    lat: 39.554405212402344, 
    store_id: 10215
  }, 
  {
    city: "Winchester", 
    name: "Winchester & Benton, Winchester", 
    country: "US", 
    lng: -117.12378692626953, 
    lat: 33.592594146728516, 
    store_id: 10216
  }, 
  {
    city: "Santa Monica", 
    name: "Santa Monica & 26th", 
    country: "US", 
    lng: -118.47527313232422, 
    lat: 34.032718658447266, 
    store_id: 10217
  }, 
  {
    city: "Greenville", 
    name: "I-85 & Pelham Pkwy", 
    country: "US", 
    lng: -82.26461791992188, 
    lat: 34.85994338989258, 
    store_id: 10219
  }, 
  {
    city: "Spartanburg", 
    name: "N Pine Street", 
    country: "US", 
    lng: -81.93144989013672, 
    lat: 34.9652099609375, 
    store_id: 10220
  }, 
  {
    city: "Clarksville", 
    name: "Madison & Hwy 41", 
    country: "US", 
    lng: -87.27456665039062, 
    lat: 36.509307861328125, 
    store_id: 10221
  }, 
  {
    city: "Cordova", 
    name: "Houston Levee & Macon", 
    country: "US", 
    lng: -89.72809600830078, 
    lat: 35.15749740600586, 
    store_id: 10222
  }, 
  {
    city: "El Paso", 
    name: "I-10 & Mesa", 
    country: "US", 
    lng: -106.57247161865234, 
    lat: 31.83942413330078, 
    store_id: 10223
  }, 
  {
    city: "Houston", 
    name: "Hwy 59 & Wilcrest", 
    country: "US", 
    lng: -95.5671157836914, 
    lat: 29.651599884033203, 
    store_id: 10224
  }, 
  {
    city: "Clinton", 
    name: "1800 North & 2000 West-Clinton, UT", 
    country: "US", 
    lng: -112.0613784790039, 
    lat: 41.13961410522461, 
    store_id: 10225
  }, 
  {
    city: "Bristol", 
    name: "I-81 & Exit 7", 
    country: "US", 
    lng: -82.12316131591797, 
    lat: 36.631961822509766, 
    store_id: 10226
  }, 
  {
    city: "Rock Springs", 
    name: "I-80 & Dewar Dr-Rock Springs", 
    country: "US", 
    lng: -109.25176239013672, 
    lat: 41.5783576965332, 
    store_id: 10227
  }, 
  {
    city: "Los Angeles", 
    name: "Glendale & Glenfeliz", 
    country: "US", 
    lng: -118.262939453125, 
    lat: 34.11644744873047, 
    store_id: 10228
  }, 
  {
    city: "Torrance", 
    name: "Del Amo Fashion Center", 
    country: "US", 
    lng: -118.34786987304688, 
    lat: 33.83311080932617, 
    store_id: 10231
  }, 
  {
    city: "Westwood", 
    name: "Westwood Avenue", 
    country: "US", 
    lng: -74.03164672851562, 
    lat: 40.99208450317383, 
    store_id: 10232
  }, 
  {
    city: "West New York", 
    name: "West New York", 
    country: "US", 
    lng: -74.00706481933594, 
    lat: 40.782920837402344, 
    store_id: 10233
  }, 
  {
    city: "East Brunswick", 
    name: "Route 18 & Tices, East Brunswick", 
    country: "US", 
    lng: -74.40034484863281, 
    lat: 40.456424713134766, 
    store_id: 10234
  }, 
  {
    city: "Chino Hills", 
    name: "Chino Hills Pkwy & Pipeline", 
    country: "US", 
    lng: -117.71395874023438, 
    lat: 33.98343276977539, 
    store_id: 10235
  }, 
  {
    city: "Temecula", 
    name: "Rancho California & Meadows", 
    country: "US", 
    lng: -117.10244750976562, 
    lat: 33.513553619384766, 
    store_id: 10236
  }, 
  {
    city: "Chico", 
    name: "Esplanade & 9th - Chico", 
    country: "US", 
    lng: -121.85155487060547, 
    lat: 39.746578216552734, 
    store_id: 10237
  }, 
  {
    city: "San Rafael", 
    name: "Irwin & Lincoln", 
    country: "US", 
    lng: -122.52182006835938, 
    lat: 37.96808624267578, 
    store_id: 10238
  }, 
  {
    city: "Rocklin", 
    name: "Blue Oaks & Lone Tree - Rocklin", 
    country: "US", 
    lng: -121.29417419433594, 
    lat: 38.8004035949707, 
    store_id: 10239
  }, 
  {
    city: "Peoria", 
    name: "Peoria-Prospect & War Memorial", 
    country: "US", 
    lng: -89.57369232177734, 
    lat: 40.73228073120117, 
    store_id: 10243
  }, 
  {
    city: "Lafayette", 
    name: "26 & Creasy", 
    country: "US", 
    lng: -86.83938598632812, 
    lat: 40.41489791870117, 
    store_id: 10244
  }, 
  {
    city: "Louisville", 
    name: "Frankfort & Lexington", 
    country: "US", 
    lng: -85.66061401367188, 
    lat: 38.25304412841797, 
    store_id: 10245
  }, 
  {
    city: "Las Cruces", 
    name: "Valley & Rigsby, Las Cruces", 
    country: "US", 
    lng: -106.78446197509766, 
    lat: 32.290916442871094, 
    store_id: 10246
  }, 
  {
    city: "Albuquerque", 
    name: "Lomas & Broadway, Albuquerque", 
    country: "US", 
    lng: -106.64297485351562, 
    lat: 35.09049987792969, 
    store_id: 10247
  }, 
  {
    city: "New York", 
    name: "85th & Lexington", 
    country: "US", 
    lng: -73.95603942871094, 
    lat: 40.778648376464844, 
    store_id: 10249
  }, 
  {
    city: "Schenectady", 
    name: "Schenectady, Watt St.", 
    country: "US", 
    lng: -73.91361999511719, 
    lat: 42.78364181518555, 
    store_id: 10250
  }, 
  {
    city: "New York", 
    name: "21st & 5th", 
    country: "US", 
    lng: -73.99116516113281, 
    lat: 40.74038314819336, 
    store_id: 10251
  }, 
  {
    city: "Northport", 
    name: "Northport Village", 
    country: "US", 
    lng: -73.33077239990234, 
    lat: 40.89854431152344, 
    store_id: 10253
  }, 
  {
    city: "Albany", 
    name: "1244 Western Ave", 
    country: "US", 
    lng: -73.83036041259766, 
    lat: 42.678409576416016, 
    store_id: 10254
  }, 
  {
    city: "Sunnyside", 
    name: "46-09 Queens Blvd", 
    country: "US", 
    lng: -73.9183349609375, 
    lat: 40.74343490600586, 
    store_id: 10255
  }, 
  {
    city: "Westchester", 
    name: "Union Center & Floer", 
    country: "US", 
    lng: -84.42981719970703, 
    lat: 39.32315444946289, 
    store_id: 10256
  }, 
  {
    city: "Owasso", 
    name: "96th & US 169", 
    country: "US", 
    lng: -95.84171295166016, 
    lat: 36.28910446166992, 
    store_id: 10257
  }, 
  {
    city: "Chicago", 
    name: "Beverly-103rd & Longwood", 
    country: "US", 
    lng: -87.67041778564453, 
    lat: 41.70640563964844, 
    store_id: 10259
  }, 
  {
    city: "Lexington", 
    name: "Versailles & Parkers Mill", 
    country: "US", 
    lng: -84.55452728271484, 
    lat: 38.04619598388672, 
    store_id: 10260
  }, 
  {
    city: "Thibodaux", 
    name: "Canal & Glenwild", 
    country: "US", 
    lng: -90.81539916992188, 
    lat: 29.81157875061035, 
    store_id: 10261
  }, 
  {
    city: "Glen Burnie", 
    name: "Governor Plaza", 
    country: "US", 
    lng: -76.61260223388672, 
    lat: 39.19563293457031, 
    store_id: 10262
  }, 
  {
    city: "Marquette", 
    name: "Marquette, MI-Hwy 41 & Hwy 492", 
    country: "US", 
    lng: -87.45629119873047, 
    lat: 46.54882049560547, 
    store_id: 10263
  }, 
  {
    city: "Kansas City", 
    name: "41st & Main", 
    country: "US", 
    lng: -94.5860366821289, 
    lat: 39.05125045776367, 
    store_id: 10264
  }, 
  {
    city: "O'Fallon", 
    name: "SR-K & Laura Hill Rd", 
    country: "US", 
    lng: -90.69898223876953, 
    lat: 38.780906677246094, 
    store_id: 10265
  }, 
  {
    city: "Charlotte", 
    name: "Arrowood Road", 
    country: "US", 
    lng: -80.90420532226562, 
    lat: 35.1368522644043, 
    store_id: 10266
  }, 
  {
    city: "Carson City", 
    name: "College Pky & Retail Dr-Carson Cty", 
    country: "US", 
    lng: -119.75812530517578, 
    lat: 39.189762115478516, 
    store_id: 10268
  }, 
  {
    city: "Reno", 
    name: "Damonte Ranch & Steamboat Pkwy-Reno", 
    country: "US", 
    lng: -119.73815155029297, 
    lat: 39.42325973510742, 
    store_id: 10270
  }, 
  {
    city: "Moore", 
    name: "19th & Telephone", 
    country: "US", 
    lng: -97.49602508544922, 
    lat: 35.319278717041016, 
    store_id: 10272
  }, 
  {
    city: "Seattle", 
    name: "SEA SeaTac CT-26", 
    country: "US", 
    lng: -122.30216979980469, 
    lat: 47.44350051879883, 
    store_id: 10277
  }, 
  {
    city: "Lynnwood", 
    name: "168th and Highway 99-Lynnwood", 
    country: "US", 
    lng: -122.294189453125, 
    lat: 47.84600830078125, 
    store_id: 10278
  }, 
  {
    city: "Redding", 
    name: "Placer Heights - Redding", 
    country: "US", 
    lng: -122.4167709350586, 
    lat: 40.57439422607422, 
    store_id: 10281
  }, 
  {
    city: "Valencia", 
    name: "Magic Mountain & Tourney", 
    country: "US", 
    lng: -118.57926177978516, 
    lat: 34.423702239990234, 
    store_id: 10282
  }, 
  {
    city: "Fort Wayne", 
    name: "Coliseum & Coldwater", 
    country: "US", 
    lng: -85.13827514648438, 
    lat: 41.1185417175293, 
    store_id: 10283
  }, 
  {
    city: "Florence", 
    name: "Mall & Plaza", 
    country: "US", 
    lng: -84.65221405029297, 
    lat: 38.9918212890625, 
    store_id: 10284
  }, 
  {
    city: "Ruston", 
    name: "I-20 & Cooktown", 
    country: "US", 
    lng: -92.65261840820312, 
    lat: 32.53857421875, 
    store_id: 10285
  }, 
  {
    city: "Broken Arrow", 
    name: "Aspen & Kenosha", 
    country: "US", 
    lng: -95.81440734863281, 
    lat: 36.06134796142578, 
    store_id: 10286
  }, 
  {
    city: "Beaverton", 
    name: "Hall & Nimbus- Beaverton", 
    country: "US", 
    lng: -122.78934478759766, 
    lat: 45.45893478393555, 
    store_id: 10287
  }, 
  {
    city: "Portland", 
    name: "20th & Burnside- Portland", 
    country: "US", 
    lng: -122.69168853759766, 
    lat: 45.52302551269531, 
    store_id: 10288
  }, 
  {
    city: "San Antonio", 
    name: "Quincy & McCullough", 
    country: "US", 
    lng: -98.4906997680664, 
    lat: 29.43708038330078, 
    store_id: 10289
  }, 
  {
    city: "Tacoma", 
    name: "Center St. & Mullen-Tacoma", 
    country: "US", 
    lng: -122.50177001953125, 
    lat: 47.23405075073242, 
    store_id: 10290
  }, 
  {
    city: "Redmond", 
    name: "Redmond Ridge", 
    country: "US", 
    lng: -122.02456665039062, 
    lat: 47.700233459472656, 
    store_id: 10291
  }, 
  {
    city: "Grand Junction", 
    name: "City Market - Grand Junction #432", 
    country: "US", 
    lng: -108.56964874267578, 
    lat: 39.06852722167969, 
    store_id: 10293
  }, 
  {
    city: "Waycross", 
    name: "Kroger-Waycross #439", 
    country: "US", 
    lng: -82.3392105102539, 
    lat: 31.2069091796875, 
    store_id: 10294
  }, 
  {
    city: "Kapolei", 
    name: "Kapolei Pkwy & Kamokila Blvd", 
    country: "US", 
    lng: -158.08668518066406, 
    lat: 21.329147338867188, 
    store_id: 10295
  }, 
  {
    city: "Portland", 
    name: "Safeway - Portland #1451", 
    country: "US", 
    lng: -122.53841400146484, 
    lat: 45.524837493896484, 
    store_id: 10298
  }, 
  {
    city: "Junction City", 
    name: "Safeway - Junction City #386", 
    country: "US", 
    lng: -123.20636749267578, 
    lat: 44.229148864746094, 
    store_id: 10299
  }, 
  {
    city: "Rogers", 
    name: "Walnut & 46th", 
    country: "US", 
    lng: -94.1804428100586, 
    lat: 36.33469772338867, 
    store_id: 10300
  }, 
  {
    city: "Chester", 
    name: "Target Chester T-1017", 
    country: "US", 
    lng: -77.41010284423828, 
    lat: 37.350860595703125, 
    store_id: 10302
  }, 
  {
    city: "Little Rock", 
    name: "University & W. Markham", 
    country: "US", 
    lng: -92.34059143066406, 
    lat: 34.75272750854492, 
    store_id: 10304
  }, 
  {
    city: "Barstow", 
    name: "Lenwood Road & Factory Outlet Ave", 
    country: "US", 
    lng: -117.08496856689453, 
    lat: 34.85068893432617, 
    store_id: 10306
  }, 
  {
    city: "Harriman", 
    name: "Kroger - Harriman #628", 
    country: "US", 
    lng: -84.5462417602539, 
    lat: 35.89250946044922, 
    store_id: 10307
  }, 
  {
    city: "Fresno", 
    name: "FAT Pre-Security", 
    country: "US", 
    lng: -119.7624282836914, 
    lat: 36.64157485961914, 
    store_id: 10308
  }, 
  {
    city: "Mission Viejo", 
    name: "Oso & I-5", 
    country: "US", 
    lng: -117.66893005371094, 
    lat: 33.579776763916016, 
    store_id: 10309
  }, 
  {
    city: "Napa", 
    name: "Hwy 29 & Redwood", 
    country: "US", 
    lng: -122.31065368652344, 
    lat: 38.32068634033203, 
    store_id: 10310
  }, 
  {
    city: "Aurora", 
    name: "E-470 & Gartrell- Aurora", 
    country: "US", 
    lng: -104.72430419921875, 
    lat: 39.579925537109375, 
    store_id: 10311
  }, 
  {
    city: "Pomona", 
    name: "Rio Rancho & The 71, Pomona", 
    country: "US", 
    lng: -117.76078033447266, 
    lat: 34.028419494628906, 
    store_id: 10312
  }, 
  {
    city: "Denver", 
    name: "16th & California- Denver", 
    country: "US", 
    lng: -104.9924545288086, 
    lat: 39.74519348144531, 
    store_id: 10313
  }, 
  {
    city: "Naples", 
    name: "Coastland Center", 
    country: "US", 
    lng: -81.796875, 
    lat: 26.170080184936523, 
    store_id: 10314
  }, 
  {
    city: "Dallas", 
    name: "Kroger-Dallas #518", 
    country: "US", 
    lng: -96.77090454101562, 
    lat: 32.83816146850586, 
    store_id: 10315
  }, 
  {
    city: "Westminster", 
    name: "Walnut Creek-Westminster", 
    country: "US", 
    lng: -105.07640838623047, 
    lat: 39.88672637939453, 
    store_id: 10316
  }, 
  {
    city: "Colorado Springs", 
    name: "Academy & Flintridge-Colorado Spri", 
    country: "US", 
    lng: -104.76868438720703, 
    lat: 38.90227508544922, 
    store_id: 10317
  }, 
  {
    city: "Louisville", 
    name: "Dixie Hwy & Kerrick", 
    country: "US", 
    lng: -85.8359603881836, 
    lat: 38.15182113647461, 
    store_id: 10318
  }, 
  {
    city: "Vero Beach", 
    name: "Federal Hwy & 12th St", 
    country: "US", 
    lng: -80.38972473144531, 
    lat: 27.623998641967773, 
    store_id: 10319
  }, 
  {
    city: "Mandeville", 
    name: "N. Causeway & Florida", 
    country: "US", 
    lng: -90.08776092529297, 
    lat: 30.375268936157227, 
    store_id: 10320
  }, 
  {
    city: "St. Charles", 
    name: "5th & Boonslick", 
    country: "US", 
    lng: -90.49057006835938, 
    lat: 38.7738037109375, 
    store_id: 10321
  }, 
  {
    city: "Las Vegas", 
    name: "Hualapia & Desert Inn, Las Vegas", 
    country: "US", 
    lng: -115.31456756591797, 
    lat: 36.12859344482422, 
    store_id: 10323
  }, 
  {
    city: "Plano", 
    name: "75 & Spring Creek", 
    country: "US", 
    lng: -96.69171142578125, 
    lat: 33.05769729614258, 
    store_id: 10325
  }, 
  {
    city: "Colonial Heights", 
    name: "Colonial Heights", 
    country: "US", 
    lng: -77.3895034790039, 
    lat: 37.24947738647461, 
    store_id: 10326
  }, 
  {
    city: "Beckley", 
    name: "Beckley", 
    country: "US", 
    lng: -81.17926025390625, 
    lat: 37.80321502685547, 
    store_id: 10327
  }, 
  {
    city: "San Diego", 
    name: "Vons - San Diego #2134", 
    country: "US", 
    lng: -117.10404205322266, 
    lat: 32.83036422729492, 
    store_id: 10329
  }, 
  {
    city: "La Verne", 
    name: "Target La Verne T-226", 
    country: "US", 
    lng: -117.75968933105469, 
    lat: 34.10973358154297, 
    store_id: 10330
  }, 
  {
    city: "Carmel", 
    name: "Safeway - Carmel #2669", 
    country: "US", 
    lng: -121.90778350830078, 
    lat: 36.538238525390625, 
    store_id: 10331
  }, 
  {
    city: "Garner", 
    name: "Harris Teeter-Garner #283", 
    country: "US", 
    lng: -78.69989776611328, 
    lat: 35.66361618041992, 
    store_id: 10332
  }, 
  {
    city: "Akron", 
    name: "University of Akron, Polsky Buildin", 
    country: "US", 
    lng: -81.5192642211914, 
    lat: 41.078861236572266, 
    store_id: 10333
  }, 
  {
    city: "Madras", 
    name: "Safeway - Madras #1960", 
    country: "US", 
    lng: -121.12767791748047, 
    lat: 44.643680572509766, 
    store_id: 10334
  }, 
  {
    city: "Portland", 
    name: "QFC-Portland #202", 
    country: "US", 
    lng: -122.75475311279297, 
    lat: 45.515689849853516, 
    store_id: 10336
  }, 
  {
    city: "Arlington", 
    name: "Univ. TX - Arlington University Cen", 
    country: "US", 
    lng: -97.11160278320312, 
    lat: 32.731815338134766, 
    store_id: 10337
  }, 
  {
    city: "Virginia Beach", 
    name: "Farm Fresh #672", 
    country: "US", 
    lng: -76.1347885131836, 
    lat: 36.87382125854492, 
    store_id: 10338
  }, 
  {
    city: "Issaquah", 
    name: "QFC - Issaquah/Klahanie #840", 
    country: "US", 
    lng: -122.0037612915039, 
    lat: 47.56590270996094, 
    store_id: 10339
  }, 
  {
    city: "Lilburn", 
    name: "Kroger-Lilburn #394", 
    country: "US", 
    lng: -84.06058502197266, 
    lat: 33.884422302246094, 
    store_id: 10340
  }, 
  {
    city: "Winona", 
    name: "Target Winona T-1096", 
    country: "US", 
    lng: -91.62079620361328, 
    lat: 44.031925201416016, 
    store_id: 10342
  }, 
  {
    city: "Saint Petersburg", 
    name: "Central Ave & 66th St", 
    country: "US", 
    lng: -82.72810363769531, 
    lat: 27.771194458007812, 
    store_id: 10343
  }, 
  {
    city: "Kennesaw", 
    name: "Cherokee & Shiloh", 
    country: "US", 
    lng: -84.59722900390625, 
    lat: 34.050140380859375, 
    store_id: 10344
  }, 
  {
    city: "Cottage Grove", 
    name: "Safeway - Cottage Grove #1458", 
    country: "US", 
    lng: -123.05206298828125, 
    lat: 43.798301696777344, 
    store_id: 10346
  }, 
  {
    city: "Medford", 
    name: "Safeway-Medford #525", 
    country: "US", 
    lng: -122.86720275878906, 
    lat: 42.331851959228516, 
    store_id: 10347
  }, 
  {
    city: "Alpharetta", 
    name: "Crabapple Rd & Houze Rd", 
    country: "US", 
    lng: -84.3579330444336, 
    lat: 34.081668853759766, 
    store_id: 10348
  }, 
  {
    city: "Goldsboro", 
    name: "Goldsboro", 
    country: "US", 
    lng: -77.94175720214844, 
    lat: 35.37639617919922, 
    store_id: 10350
  }, 
  {
    city: "Greensboro", 
    name: "South Elm & I-85", 
    country: "US", 
    lng: -79.79308319091797, 
    lat: 36.00312423706055, 
    store_id: 10351
  }, 
  {
    city: "Somerset", 
    name: "North Center Ave, Somerset", 
    country: "US", 
    lng: -79.0784683227539, 
    lat: 40.01791763305664, 
    store_id: 10352
  }, 
  {
    city: "Virginia", 
    name: "Target Virginia T-847", 
    country: "US", 
    lng: -92.54967498779297, 
    lat: 47.51084518432617, 
    store_id: 10357
  }, 
  {
    city: "Charlotte", 
    name: "Harris-Teeter-Charlotte #258", 
    country: "US", 
    lng: -80.73910522460938, 
    lat: 35.29601287841797, 
    store_id: 10358
  }, 
  {
    city: "Lady Lake", 
    name: "US 441 & Rolling Acres", 
    country: "US", 
    lng: -81.93649291992188, 
    lat: 28.933792114257812, 
    store_id: 10359
  }, 
  {
    city: "Anchorage", 
    name: "Safeway - Anchorage #520", 
    country: "US", 
    lng: -149.82086181640625, 
    lat: 61.21641540527344, 
    store_id: 10360
  }, 
  {
    city: "Phoenix", 
    name: "Safeway-Phoenix #1591", 
    country: "US", 
    lng: -112.04914093017578, 
    lat: 33.39049530029297, 
    store_id: 10361
  }, 
  {
    city: "Vero Beach", 
    name: "Target Vero Beach T-1050", 
    country: "US", 
    lng: -80.44776153564453, 
    lat: 27.640493392944336, 
    store_id: 10356
  }, 
  {
    city: "Sun City West", 
    name: "Safeway - Sun City West #2054", 
    country: "US", 
    lng: -112.35002899169922, 
    lat: 33.655025482177734, 
    store_id: 10362
  }, 
  {
    city: "Chesapeake", 
    name: "Hanbury Village", 
    country: "US", 
    lng: -76.22438049316406, 
    lat: 36.68602752685547, 
    store_id: 10363
  }, 
  {
    city: "Chillicothe", 
    name: "Kroger - Chillicothe #348", 
    country: "US", 
    lng: -82.97443389892578, 
    lat: 39.35403823852539, 
    store_id: 10364
  }, 
  {
    city: "Edgemont", 
    name: "Edgmont", 
    country: "US", 
    lng: -75.44210815429688, 
    lat: 39.97572326660156, 
    store_id: 10365
  }, 
  {
    city: "Tempe", 
    name: "Target Tempe NE T-2176", 
    country: "US", 
    lng: -111.90523529052734, 
    lat: 33.429603576660156, 
    store_id: 10366
  }, 
  {
    city: "Virginia Beach", 
    name: "Hilltop North", 
    country: "US", 
    lng: -76.019287109375, 
    lat: 36.85289764404297, 
    store_id: 10368
  }, 
  {
    city: "Tacoma", 
    name: "Safeway - Tacoma #1978", 
    country: "US", 
    lng: -122.51526641845703, 
    lat: 47.27238464355469, 
    store_id: 10369
  }, 
  {
    city: "San Francisco", 
    name: "865 Market - SF Centre", 
    country: "US", 
    lng: -122.4075698852539, 
    lat: 37.78428649902344, 
    store_id: 10371
  }, 
  {
    city: "Orland Park", 
    name: "Orland Park-143rd & LaGrange", 
    country: "US", 
    lng: -87.85357666015625, 
    lat: 41.632102966308594, 
    store_id: 10372
  }, 
  {
    city: "Bedford", 
    name: "16th & Clinic", 
    country: "US", 
    lng: -86.51465606689453, 
    lat: 38.86125946044922, 
    store_id: 10374
  }, 
  {
    city: "Silver Spring", 
    name: "Hillandale Shopping Center", 
    country: "US", 
    lng: -76.97661590576172, 
    lat: 39.021705627441406, 
    store_id: 10375
  }, 
  {
    city: "St. Louis", 
    name: "Chippewa & Lansdowne", 
    country: "US", 
    lng: -90.30506896972656, 
    lat: 38.590675354003906, 
    store_id: 10377
  }, 
  {
    city: "Rensselaer", 
    name: "North Greenbush Road", 
    country: "US", 
    lng: -73.69734954833984, 
    lat: 42.646331787109375, 
    store_id: 10378
  }, 
  {
    city: "Bowling Green", 
    name: "Bowling Green - E Wooster St", 
    country: "US", 
    lng: -83.62451934814453, 
    lat: 41.37397766113281, 
    store_id: 10379
  }, 
  {
    city: "Portland", 
    name: "FuBonn Shopping Center- Portland", 
    country: "US", 
    lng: -122.57833862304688, 
    lat: 45.50202178955078, 
    store_id: 10380
  }, 
  {
    city: "Gahanna", 
    name: "Kroger - Gahanna #522", 
    country: "US", 
    lng: -82.86518096923828, 
    lat: 40.01114273071289, 
    store_id: 10382
  }, 
  {
    city: "Spring", 
    name: "Kroger-Spring #364", 
    country: "US", 
    lng: -95.51680755615234, 
    lat: 30.07527732849121, 
    store_id: 10383
  }, 
  {
    city: "Benton", 
    name: "I 30 & Alcoa", 
    country: "US", 
    lng: -92.53294372558594, 
    lat: 34.60527420043945, 
    store_id: 10385
  }, 
  {
    city: "Flower Mound", 
    name: "FM 3040 & Gerault", 
    country: "US", 
    lng: -97.04619598388672, 
    lat: 33.010887145996094, 
    store_id: 10387
  }, 
  {
    city: "Little Elm", 
    name: "FM 423 & Eldorado Pkwy", 
    country: "US", 
    lng: -96.88456726074219, 
    lat: 33.177825927734375, 
    store_id: 10388
  }, 
  {
    city: "Olympia", 
    name: "Cooper Point Village- Olympia", 
    country: "US", 
    lng: -122.94230651855469, 
    lat: 47.04783248901367, 
    store_id: 10389
  }, 
  {
    city: "Onalaska", 
    name: "Highway 16 & Pralle Center", 
    country: "US", 
    lng: -91.18975830078125, 
    lat: 43.87428283691406, 
    store_id: 10390
  }, 
  {
    city: "Mobile", 
    name: "Government & Catherine", 
    country: "US", 
    lng: -88.07337951660156, 
    lat: 30.680694580078125, 
    store_id: 10391
  }, 
  {
    city: "Dublin", 
    name: "Kroger - Dublin #350", 
    country: "US", 
    lng: -83.1225357055664, 
    lat: 40.09807586669922, 
    store_id: 10393
  }, 
  {
    city: "Albany", 
    name: "College St. Rose", 
    country: "US", 
    lng: -73.78549194335938, 
    lat: 42.66413116455078, 
    store_id: 10394
  }, 
  {
    city: "Mobile", 
    name: "Hillcrest & Greelot", 
    country: "US", 
    lng: -88.19029235839844, 
    lat: 30.66158676147461, 
    store_id: 10395
  }, 
  {
    city: "Campbell", 
    name: "Hamilton & Central - Campbell", 
    country: "US", 
    lng: -121.94435119628906, 
    lat: 37.294029235839844, 
    store_id: 10396
  }, 
  {
    city: "Carmichael", 
    name: "Madison & Manzanita - Carmichael", 
    country: "US", 
    lng: -121.32795715332031, 
    lat: 38.6602783203125, 
    store_id: 10397
  }, 
  {
    city: "Soquel", 
    name: "Safeway - Soquel #1929", 
    country: "US", 
    lng: -121.96342468261719, 
    lat: 36.98622131347656, 
    store_id: 10398
  }, 
  {
    city: "Chicago", 
    name: "Ontario & Wabash - River North", 
    country: "US", 
    lng: -87.62660217285156, 
    lat: 41.893409729003906, 
    store_id: 10400
  }, 
  {
    city: "Albuquerque", 
    name: "Louisiana & Indian School", 
    country: "US", 
    lng: -106.5683822631836, 
    lat: 35.102134704589844, 
    store_id: 10401
  }, 
  {
    city: "Allen", 
    name: "Kroger-Allen #568", 
    country: "US", 
    lng: -96.7003402709961, 
    lat: 33.102195739746094, 
    store_id: 10402
  }, 
  {
    city: "Victoria", 
    name: "Target Victoria T-888", 
    country: "US", 
    lng: -96.99915313720703, 
    lat: 28.865835189819336, 
    store_id: 10404
  }, 
  {
    city: "Round Rock", 
    name: "US 79 & CR 122", 
    country: "US", 
    lng: -97.61603546142578, 
    lat: 30.53205680847168, 
    store_id: 10405
  }, 
  {
    city: "Houston", 
    name: "Target Houston T-858", 
    country: "US", 
    lng: -95.50238037109375, 
    lat: 29.84903335571289, 
    store_id: 10406
  }, 
  {
    city: "Dallas", 
    name: "DFW - Term C, Gate C21", 
    country: "US", 
    lng: -97.03585052490234, 
    lat: 32.8970947265625, 
    store_id: 10407
  }, 
  {
    city: "Round Rock", 
    name: "Round Rock Premium Outlets", 
    country: "US", 
    lng: -97.6895751953125, 
    lat: 30.56659507751465, 
    store_id: 10409
  }, 
  {
    city: "Logan", 
    name: "1600 North & Main, Logan", 
    country: "US", 
    lng: -111.83384704589844, 
    lat: 41.76176834106445, 
    store_id: 10414
  }, 
  {
    city: "Cedar City", 
    name: "Providence Crossing- Cedar City", 
    country: "US", 
    lng: -113.08441925048828, 
    lat: 37.655784606933594, 
    store_id: 10416
  }, 
  {
    city: "Yorktown", 
    name: "Grafton", 
    country: "US", 
    lng: -76.45928955078125, 
    lat: 37.1471061706543, 
    store_id: 10417
  }, 
  {
    city: "Richmond", 
    name: "Oxbridge Square", 
    country: "US", 
    lng: -77.57902526855469, 
    lat: 37.44290542602539, 
    store_id: 10418
  }, 
  {
    city: "Richmond", 
    name: "North Robinson Rd.", 
    country: "US", 
    lng: -77.47085571289062, 
    lat: 37.55649948120117, 
    store_id: 10419
  }, 
  {
    city: "Monroe", 
    name: "Fred Meyer - Monroe #210", 
    country: "US", 
    lng: -121.97887420654297, 
    lat: 47.8614387512207, 
    store_id: 10421
  }, 
  {
    city: "Sequim", 
    name: "Sequim Village Market Place", 
    country: "US", 
    lng: -123.1298599243164, 
    lat: 48.07786178588867, 
    store_id: 10422
  }, 
  {
    city: "Vancouver", 
    name: "QFC-Vancouver #212 (Riverstone)", 
    country: "US", 
    lng: -122.47647857666016, 
    lat: 45.594757080078125, 
    store_id: 10423
  }, 
  {
    city: "Appleton", 
    name: "Northland & Richmond", 
    country: "US", 
    lng: -88.41468811035156, 
    lat: 44.28678894042969, 
    store_id: 10424
  }, 
  {
    city: "Ashwaubenon", 
    name: "Oneida & Ramada", 
    country: "US", 
    lng: -88.07547760009766, 
    lat: 44.47075653076172, 
    store_id: 10425
  }, 
  {
    city: "Haymarket", 
    name: "Giant-Haymarket #790", 
    country: "US", 
    lng: -77.64368438720703, 
    lat: 38.84269332885742, 
    store_id: 10367
  }, 
  {
    city: "Cypress", 
    name: "Kroger - Cypress #327", 
    country: "US", 
    lng: -95.62187957763672, 
    lat: 29.994251251220703, 
    store_id: 10381
  }, 
  {
    city: "Montgomery", 
    name: "Atlanta Hwy & McLemore", 
    country: "US", 
    lng: -86.1840591430664, 
    lat: 32.38307189941406, 
    store_id: 10426
  }, 
  {
    city: "Tucson", 
    name: "Broadway & Campbell, Tucson", 
    country: "US", 
    lng: -110.94438171386719, 
    lat: 32.221649169921875, 
    store_id: 10427
  }, 
  {
    city: "Riverside", 
    name: "3rd & Market , Riverside", 
    country: "US", 
    lng: -117.37275695800781, 
    lat: 33.98731994628906, 
    store_id: 10428
  }, 
  {
    city: "San Leandro", 
    name: "Bayfair Center - San Leandro", 
    country: "US", 
    lng: -122.12594604492188, 
    lat: 37.70290756225586, 
    store_id: 10429
  }, 
  {
    city: "El Segundo", 
    name: "Grand & Eucalyptus", 
    country: "US", 
    lng: -118.41336059570312, 
    lat: 33.91908645629883, 
    store_id: 10430
  }, 
  {
    city: "Thornton", 
    name: "168th & Washington- Thornton", 
    country: "US", 
    lng: -104.97692108154297, 
    lat: 39.99961853027344, 
    store_id: 10431
  }, 
  {
    city: "Denver", 
    name: "Cherry Creek Mall - West.", 
    country: "US", 
    lng: -104.95451354980469, 
    lat: 39.71723937988281, 
    store_id: 10432
  }, 
  {
    city: "Indianapolis", 
    name: "71st & Binford", 
    country: "US", 
    lng: -86.068359375, 
    lat: 39.881614685058594, 
    store_id: 10433
  }, 
  {
    city: "Rapid City", 
    name: "1819 Mt. Rushmore Rd", 
    country: "US", 
    lng: -103.23272705078125, 
    lat: 44.06791305541992, 
    store_id: 10435
  }, 
  {
    city: "Anthem", 
    name: "Daisy Mountain & Gavilan Peak", 
    country: "US", 
    lng: -112.13440704345703, 
    lat: 33.84333801269531, 
    store_id: 10436
  }, 
  {
    city: "Weslaco", 
    name: "Hwy 83 & Westgate", 
    country: "US", 
    lng: -98.00841522216797, 
    lat: 26.171995162963867, 
    store_id: 10437
  }, 
  {
    city: "Montgomery", 
    name: "SR-105 & Lake Conroe", 
    country: "US", 
    lng: -95.59519958496094, 
    lat: 30.359195709228516, 
    store_id: 10438
  }, 
  {
    city: "Fort Worth", 
    name: "Hulen & Ledgestone", 
    country: "US", 
    lng: -97.4010238647461, 
    lat: 32.66514587402344, 
    store_id: 10439
  }, 
  {
    city: "Orlando", 
    name: "SR 535 & Vistana Centre", 
    country: "US", 
    lng: -81.50215148925781, 
    lat: 28.369144439697266, 
    store_id: 10441
  }, 
  {
    city: "Riverside", 
    name: "Arlington & Streeter", 
    country: "US", 
    lng: -117.4162826538086, 
    lat: 33.94572448730469, 
    store_id: 10442
  }, 
  {
    city: "Pasadena", 
    name: "Arroyo & Fillmore, Pasadena", 
    country: "US", 
    lng: -118.14783477783203, 
    lat: 34.13284683227539, 
    store_id: 10443
  }, 
  {
    city: "Hollywood", 
    name: "Federal Hwy & Young Circle", 
    country: "US", 
    lng: -80.14326477050781, 
    lat: 26.012920379638672, 
    store_id: 10445
  }, 
  {
    city: "Pembroke Pines", 
    name: "Pines Blvd & 96th", 
    country: "US", 
    lng: -80.27491760253906, 
    lat: 26.00786018371582, 
    store_id: 10446
  }, 
  {
    city: "Springfield", 
    name: "Springfield-6th & Stevenson", 
    country: "US", 
    lng: -89.64530181884766, 
    lat: 39.75774383544922, 
    store_id: 10448
  }, 
  {
    city: "Camp Verde", 
    name: "Bashas  camp Verde #49", 
    country: "US", 
    lng: -111.86454010009766, 
    lat: 34.56676483154297, 
    store_id: 10449
  }, 
  {
    city: "El Segundo", 
    name: "Los Angeles Airforce Base El Segund", 
    country: "US", 
    lng: -118.38031005859375, 
    lat: 33.917083740234375, 
    store_id: 10450
  }, 
  {
    city: "Turlock", 
    name: "Main & Hwy 99 - Turlock", 
    country: "US", 
    lng: -120.8742904663086, 
    lat: 37.493080139160156, 
    store_id: 10451
  }, 
  {
    city: "Columbus", 
    name: "Bradley Park & Belfast", 
    country: "US", 
    lng: -84.97100067138672, 
    lat: 32.53204345703125, 
    store_id: 10452
  }, 
  {
    city: "Chicago", 
    name: "Armitage & Hoyne - Bucktown", 
    country: "US", 
    lng: -87.68038177490234, 
    lat: 41.91751480102539, 
    store_id: 10453
  }, 
  {
    city: "Lincoln Park", 
    name: "Southfield Rd & Dix Hwy", 
    country: "US", 
    lng: -83.19098663330078, 
    lat: 42.25398635864258, 
    store_id: 10455
  }, 
  {
    city: "Franklin", 
    name: "Farm Fresh-Franklin #674", 
    country: "US", 
    lng: -76.95281982421875, 
    lat: 36.669124603271484, 
    store_id: 10457
  }, 
  {
    city: "Arlington", 
    name: "The Concord", 
    country: "US", 
    lng: -77.05146026611328, 
    lat: 38.84872817993164, 
    store_id: 10458
  }, 
  {
    city: "Cypress", 
    name: "Houston Premium Outlets", 
    country: "US", 
    lng: -95.75708770751953, 
    lat: 29.99671173095703, 
    store_id: 10459
  }, 
  {
    city: "Largo", 
    name: "Walsingham & 137th", 
    country: "US", 
    lng: -82.82743072509766, 
    lat: 27.879756927490234, 
    store_id: 10460
  }, 
  {
    city: "Norcross", 
    name: "Peachtree Ind & S Old Peachtree", 
    country: "US", 
    lng: -84.1952133178711, 
    lat: 33.968788146972656, 
    store_id: 10461
  }, 
  {
    city: "Lafayette", 
    name: "Target Layfayette North T-2377", 
    country: "US", 
    lng: -91.99457550048828, 
    lat: 30.26182746887207, 
    store_id: 10462
  }, 
  {
    city: "Augusta", 
    name: "Target Augusta T-2315", 
    country: "US", 
    lng: -69.80653381347656, 
    lat: 44.31014633178711, 
    store_id: 10463
  }, 
  {
    city: "Omaha", 
    name: "Super Target Omaha Far SW ST-2383", 
    country: "US", 
    lng: -96.10791778564453, 
    lat: 41.2142448425293, 
    store_id: 10464
  }, 
  {
    city: "Tulsa", 
    name: "Target Tulsa SW T-2357", 
    country: "US", 
    lng: -96.01150512695312, 
    lat: 36.062599182128906, 
    store_id: 10465
  }, 
  {
    city: "Bullhead City", 
    name: "Target Bullhead City T-2368", 
    country: "US", 
    lng: -114.59152221679688, 
    lat: 35.05173873901367, 
    store_id: 10466
  }, 
  {
    city: "Queen Creek", 
    name: "Super Target Queen Creek ST-2365", 
    country: "US", 
    lng: -111.67559814453125, 
    lat: 33.277801513671875, 
    store_id: 10467
  }, 
  {
    city: "Jersey City", 
    name: "Grove Point", 
    country: "US", 
    lng: -74.04161834716797, 
    lat: 40.71947479248047, 
    store_id: 10470
  }, 
  {
    city: "Lima", 
    name: "St. Rita's Medical Center - Lobby", 
    country: "US", 
    lng: -84.1175537109375, 
    lat: 40.74066162109375, 
    store_id: 10471
  }, 
  {
    city: "Flower Mound", 
    name: "Tom Thumb-Flower Mound #3652", 
    country: "US", 
    lng: -97.03852081298828, 
    lat: 33.041324615478516, 
    store_id: 10472
  }, 
  {
    city: "Flat Rock", 
    name: "Ingles-Flat Rock #177", 
    country: "US", 
    lng: -82.43096923828125, 
    lat: 35.290321350097656, 
    store_id: 10473
  }, 
  {
    city: "Waynesville", 
    name: "Ingles-Waynesville #23", 
    country: "US", 
    lng: -82.98809051513672, 
    lat: 35.50406265258789, 
    store_id: 10474
  }, 
  {
    city: "Weaverville", 
    name: "Ingles - Weaverville #180", 
    country: "US", 
    lng: -82.56695556640625, 
    lat: 35.70271682739258, 
    store_id: 10475
  }, 
  {
    city: "San Jose", 
    name: "Alum Rock & White", 
    country: "US", 
    lng: -121.82798767089844, 
    lat: 37.36605453491211, 
    store_id: 10477
  }, 
  {
    city: "Augusta", 
    name: "Kroger-Augusta, GA #676", 
    country: "US", 
    lng: -82.02828979492188, 
    lat: 33.51144790649414, 
    store_id: 10478
  }, 
  {
    city: "Northvale", 
    name: "Northvale, NJ", 
    country: "US", 
    lng: -73.94619750976562, 
    lat: 41.01545333862305, 
    store_id: 10479
  }, 
  {
    city: "Anchorage", 
    name: "ANC Main Terminal Ticketing", 
    country: "US", 
    lng: -149.9803924560547, 
    lat: 61.17557907104492, 
    store_id: 10480
  }, 
  {
    city: "Columbia", 
    name: "Harbison Rd & Columbiana", 
    country: "US", 
    lng: -81.1584243774414, 
    lat: 34.072757720947266, 
    store_id: 10481
  }, 
  {
    city: "Amarillo", 
    name: "I 40 & Grand", 
    country: "US", 
    lng: -101.79663848876953, 
    lat: 35.19261932373047, 
    store_id: 10483
  }, 
  {
    city: "Denham Springs", 
    name: "Range Rd & Rushing Rd", 
    country: "US", 
    lng: -90.95684814453125, 
    lat: 30.457014083862305, 
    store_id: 10484
  }, 
  {
    city: "Richmond Hill", 
    name: "Kroger-Richmond Hill, GA #688", 
    country: "US", 
    lng: -81.3130874633789, 
    lat: 31.95325469970703, 
    store_id: 10482
  }, 
  {
    city: "Fernley", 
    name: "Chisholm Crossing - Fernley", 
    country: "US", 
    lng: -119.22274780273438, 
    lat: 39.60639572143555, 
    store_id: 10485
  }, 
  {
    city: "Cary", 
    name: "Harris Teeter-Cary # 330", 
    country: "US", 
    lng: -78.74342346191406, 
    lat: 35.746681213378906, 
    store_id: 10486
  }, 
  {
    city: "Clermont", 
    name: "US Hwy 27 & Cagan Crossings Blvd", 
    country: "US", 
    lng: -81.67672729492188, 
    lat: 28.356277465820312, 
    store_id: 10488
  }, 
  {
    city: "Fairfax", 
    name: "Kamp Washington", 
    country: "US", 
    lng: -77.3209228515625, 
    lat: 38.85366439819336, 
    store_id: 10489
  }, 
  {
    city: "Pigeon Forge", 
    name: "Kroger-Pigeon Forge #536", 
    country: "US", 
    lng: -83.58194732666016, 
    lat: 35.80449295043945, 
    store_id: 10490
  }, 
  {
    city: "Powell", 
    name: "Kroger-Powell #898", 
    country: "US", 
    lng: -83.09527587890625, 
    lat: 40.15663146972656, 
    store_id: 10491
  }, 
  {
    city: "Katy", 
    name: "Randalls-Katy #1772", 
    country: "US", 
    lng: -95.71920776367188, 
    lat: 29.81346321105957, 
    store_id: 10492
  }, 
  {
    city: "Susanville", 
    name: "Safeway-Susanville #1218", 
    country: "US", 
    lng: -120.63648223876953, 
    lat: 40.410362243652344, 
    store_id: 10495
  }, 
  {
    city: "Purchase", 
    name: "SUNY-Purchase-Fort Awesome", 
    country: "US", 
    lng: -73.70066833496094, 
    lat: 41.046592712402344, 
    store_id: 10496
  }, 
  {
    city: "Eagle", 
    name: "City Market-Eagle #434", 
    country: "US", 
    lng: -106.82782745361328, 
    lat: 39.66234588623047, 
    store_id: 10498
  }, 
  {
    city: "Rockledge", 
    name: "Barnes & Murrell", 
    country: "US", 
    lng: -80.7225570678711, 
    lat: 28.294858932495117, 
    store_id: 10499
  }, 
  {
    city: "Hayward", 
    name: "Safeway - Hayward #971", 
    country: "US", 
    lng: -122.0842514038086, 
    lat: 37.67915344238281, 
    store_id: 10502
  }, 
  {
    city: "Albuquerque", 
    name: "Academy and Tramway-Albuquerque", 
    country: "US", 
    lng: -106.49916076660156, 
    lat: 35.15266418457031, 
    store_id: 10503
  }, 
  {
    city: "Edgewood", 
    name: "Smith's-Edgewood #424", 
    country: "US", 
    lng: -106.18958282470703, 
    lat: 35.061649322509766, 
    store_id: 10504
  }, 
  {
    city: "Edwardsville", 
    name: "Troy & Governor's Pkwy", 
    country: "US", 
    lng: -89.95188903808594, 
    lat: 38.78879165649414, 
    store_id: 10505
  }, 
  {
    city: "Beverly", 
    name: "Beverly, 242 Elliott St", 
    country: "US", 
    lng: -70.8904037475586, 
    lat: 42.55624771118164, 
    store_id: 10506
  }, 
  {
    city: "Keizer", 
    name: "Keizer Station - Keizer", 
    country: "US", 
    lng: -123.0008544921875, 
    lat: 45.006317138671875, 
    store_id: 10507
  }, 
  {
    city: "Arlington", 
    name: "Lee Heights Shops", 
    country: "US", 
    lng: -77.11900329589844, 
    lat: 38.89836883544922, 
    store_id: 10508
  }, 
  {
    city: "Falls Church", 
    name: "Giant-Falls Church #233", 
    country: "US", 
    lng: -77.1958236694336, 
    lat: 38.86595153808594, 
    store_id: 10509
  }, 
  {
    city: "Richmond", 
    name: "Parham & Staples", 
    country: "US", 
    lng: -77.50933074951172, 
    lat: 37.63238525390625, 
    store_id: 10510
  }, 
  {
    city: "W. Richland", 
    name: "Queensgate & Duportail", 
    country: "US", 
    lng: -119.3101806640625, 
    lat: 46.25765609741211, 
    store_id: 10511
  }, 
  {
    city: "Allen", 
    name: "Hwy 121 & Watters", 
    country: "US", 
    lng: -96.67792510986328, 
    lat: 33.14400100708008, 
    store_id: 10513
  }, 
  {
    city: "Virginia Beach", 
    name: "Harris Teeter - Virginia Beach #350", 
    country: "US", 
    lng: -76.16864013671875, 
    lat: 36.794071197509766, 
    store_id: 10514
  }, 
  {
    city: "League City", 
    name: "Super Target League City ST-2320", 
    country: "US", 
    lng: -95.08488464355469, 
    lat: 29.46596336364746, 
    store_id: 10518
  }, 
  {
    city: "Magnolia", 
    name: "Target Woodlands West T-2356", 
    country: "US", 
    lng: -95.56512451171875, 
    lat: 30.21721839904785, 
    store_id: 10519
  }, 
  {
    city: "Dallas", 
    name: "Target Dallas-South T-2334", 
    country: "US", 
    lng: -96.86234283447266, 
    lat: 32.64985656738281, 
    store_id: 10520
  }, 
  {
    city: "NEWPORT", 
    name: "Safeway #1159 - Newport", 
    country: "US", 
    lng: -117.0406265258789, 
    lat: 48.18347930908203, 
    store_id: 10522
  }, 
  {
    city: "Fort Worth", 
    name: "Baylor All Saints Medical Center", 
    country: "US", 
    lng: -97.34386444091797, 
    lat: 32.728885650634766, 
    store_id: 10523
  }, 
  {
    city: "Newnan", 
    name: "Kroger -Newnan #420", 
    country: "US", 
    lng: -84.71809387207031, 
    lat: 33.39950180053711, 
    store_id: 10524
  }, 
  {
    city: "San Antonio", 
    name: "University of San Antonio", 
    country: "US", 
    lng: -98.61675262451172, 
    lat: 29.584606170654297, 
    store_id: 10527
  }, 
  {
    city: "Apple Valley", 
    name: "Super Target Apple Vly South ST-239", 
    country: "US", 
    lng: -93.1766128540039, 
    lat: 44.72373962402344, 
    store_id: 10528
  }, 
  {
    city: "Crescent City", 
    name: "Cooper & Hwy 101", 
    country: "US", 
    lng: -124.19819641113281, 
    lat: 41.76164245605469, 
    store_id: 10530
  }, 
  {
    city: "Pico Rivera", 
    name: "Whittier & Passons, Pico Rivera", 
    country: "US", 
    lng: -118.07868957519531, 
    lat: 33.9994010925293, 
    store_id: 10531
  }, 
  {
    city: "Fort Myers", 
    name: "Colonial Blvd & Forum Blvd", 
    country: "US", 
    lng: -81.79716491699219, 
    lat: 26.615053176879883, 
    store_id: 10532
  }, 
  {
    city: "Apopka", 
    name: "Bear Lake Rd & SR 436", 
    country: "US", 
    lng: -81.44165802001953, 
    lat: 28.668926239013672, 
    store_id: 10533
  }, 
  {
    city: "Doral", 
    name: "NW 79th Ave & NW 25th St", 
    country: "US", 
    lng: -80.32482147216797, 
    lat: 25.796640396118164, 
    store_id: 10534
  }, 
  {
    city: "Stony Brook", 
    name: "Stony Brook University-Long Island-", 
    country: "US", 
    lng: -73.1242904663086, 
    lat: 40.91427993774414, 
    store_id: 10536
  }, 
  {
    city: "Birmingham", 
    name: "Montclair & Elder", 
    country: "US", 
    lng: -86.71946716308594, 
    lat: 33.526756286621094, 
    store_id: 10537
  }, 
  {
    city: "Harlingen", 
    name: "Hwy 83 & Tyler", 
    country: "US", 
    lng: -97.71533203125, 
    lat: 26.189863204956055, 
    store_id: 10539
  }, 
  {
    city: "Tucson", 
    name: "Bashas' Tucson #71", 
    country: "US", 
    lng: -110.89208221435547, 
    lat: 32.306419372558594, 
    store_id: 10542
  }, 
  {
    city: "Battle Ground", 
    name: "Safeway - Battle Ground #4313", 
    country: "US", 
    lng: -122.54660034179688, 
    lat: 45.78153991699219, 
    store_id: 10545
  }, 
  {
    city: "Loganville", 
    name: "Kroger-Loganville, GA #679", 
    country: "US", 
    lng: -83.89421081542969, 
    lat: 33.83458709716797, 
    store_id: 10549
  }, 
  {
    city: "Schaumburg", 
    name: "Macy's-Schaumburg", 
    country: "US", 
    lng: -88.03765106201172, 
    lat: 42.04941940307617, 
    store_id: 10550
  }, 
  {
    city: "San Francisco", 
    name: "Powell & Sutter", 
    country: "US", 
    lng: -122.4084243774414, 
    lat: 37.78907775878906, 
    store_id: 10551
  }, 
  {
    city: "Groton", 
    name: "Groton, Rte. 1", 
    country: "US", 
    lng: -72.04863739013672, 
    lat: 41.34605026245117, 
    store_id: 10552
  }, 
  {
    city: "Yuba City", 
    name: "Franklin & Hwy 99 - Yuba City", 
    country: "US", 
    lng: -121.63610076904297, 
    lat: 39.12698745727539, 
    store_id: 10554
  }, 
  {
    city: "Baldwin Harbor", 
    name: "Waldbaums-Baldwin Harbor-#452", 
    country: "US", 
    lng: -73.6081314086914, 
    lat: 40.64067840576172, 
    store_id: 10555
  }, 
  {
    city: "Dallas", 
    name: "Fairmont Dallas", 
    country: "US", 
    lng: -96.80194854736328, 
    lat: 32.78583526611328, 
    store_id: 10556
  }, 
  {
    city: "Chapel Hill", 
    name: "UNC at Chapel Hill - Rams Head Cent", 
    country: "US", 
    lng: -79.04122924804688, 
    lat: 35.909423828125, 
    store_id: 10557
  }, 
  {
    city: "Commerce City", 
    name: "104th & Tower, Commerce City", 
    country: "US", 
    lng: -104.77235412597656, 
    lat: 39.884403228759766, 
    store_id: 10558
  }, 
  {
    city: "Tyler", 
    name: "Hwy 64 & Loop 323", 
    country: "US", 
    lng: -95.34265899658203, 
    lat: 32.35434341430664, 
    store_id: 10561
  }, 
  {
    city: "Columbia", 
    name: "Harris Teeter - Columbia #322", 
    country: "US", 
    lng: -76.86434936523438, 
    lat: 39.17023849487305, 
    store_id: 10562
  }, 
  {
    city: "West Covina", 
    name: "Azusa & Amar, West Covina", 
    country: "US", 
    lng: -117.91191864013672, 
    lat: 34.035404205322266, 
    store_id: 10563
  }, 
  {
    city: "Santa Maria", 
    name: "US 101 & E Main", 
    country: "US", 
    lng: -120.41616821289062, 
    lat: 34.95323944091797, 
    store_id: 10564
  }, 
  {
    city: "Thornton", 
    name: "136th & Colorado- Thornton", 
    country: "US", 
    lng: -104.94093322753906, 
    lat: 39.944122314453125, 
    store_id: 10565
  }, 
  {
    city: "Hanover", 
    name: "Hanover, Washington St", 
    country: "US", 
    lng: -70.84664154052734, 
    lat: 42.15287780761719, 
    store_id: 10568
  }, 
  {
    city: "Wilmington", 
    name: "Wilmington Crossing", 
    country: "US", 
    lng: -71.18109130859375, 
    lat: 42.5555419921875, 
    store_id: 10569
  }, 
  {
    city: "Hollywood", 
    name: "Sheridan Place", 
    country: "US", 
    lng: -80.1977310180664, 
    lat: 26.033018112182617, 
    store_id: 10570
  }, 
  {
    city: "Alpine", 
    name: "Alpine & South Grade, Alpine", 
    country: "US", 
    lng: -116.74955749511719, 
    lat: 32.833900451660156, 
    store_id: 10572
  }, 
  {
    city: "Huntington Beach", 
    name: "Beach & Garfield", 
    country: "US", 
    lng: -117.98844909667969, 
    lat: 33.687808990478516, 
    store_id: 10573
  }, 
  {
    city: "Miami", 
    name: "5711 NW 7th St", 
    country: "US", 
    lng: -80.28890228271484, 
    lat: 25.779804229736328, 
    store_id: 10575
  }, 
  {
    city: "Miami", 
    name: "Biscayne Blvd & 30th", 
    country: "US", 
    lng: -80.1891860961914, 
    lat: 25.80522918701172, 
    store_id: 10576
  }, 
  {
    city: "N Kingstown", 
    name: "N Kingstown Crossing", 
    country: "US", 
    lng: -71.50206756591797, 
    lat: 41.581024169921875, 
    store_id: 10577
  }, 
  {
    city: "Peoria", 
    name: "Lake Pleasant & Happy Valley", 
    country: "US", 
    lng: -112.27323150634766, 
    lat: 33.7076530456543, 
    store_id: 10578
  }, 
  {
    city: "Frederick", 
    name: "I-25 & Hwy 52, Frederick", 
    country: "US", 
    lng: -104.98548889160156, 
    lat: 40.08706283569336, 
    store_id: 10579
  }, 
  {
    city: "Saginaw", 
    name: "Bay Road & Tittabawassee", 
    country: "US", 
    lng: -83.9687271118164, 
    lat: 43.47956466674805, 
    store_id: 10580
  }, 
  {
    city: "Renton", 
    name: "I-405 & NE 44th- Renton", 
    country: "US", 
    lng: -122.19410705566406, 
    lat: 47.53195571899414, 
    store_id: 10581
  }, 
  {
    city: "Corpus Christi", 
    name: "Saratoga & Staples", 
    country: "US", 
    lng: -97.38192749023438, 
    lat: 27.68505096435547, 
    store_id: 10583
  }, 
  {
    city: "Magnolia", 
    name: "FM 1488 & FM 2978", 
    country: "US", 
    lng: -95.56712341308594, 
    lat: 30.22089385986328, 
    store_id: 10584
  }, 
  {
    city: "Grove City", 
    name: "Kroger-Grove City #842", 
    country: "US", 
    lng: -83.07479095458984, 
    lat: 39.841007232666016, 
    store_id: 10586
  }, 
  {
    city: "Rome", 
    name: "Kroger-Rome, GA #667", 
    country: "US", 
    lng: -85.16349792480469, 
    lat: 34.24871826171875, 
    store_id: 10587
  }, 
  {
    city: "Zephyr Cove", 
    name: "Safeway - Zephyr Cove #1537", 
    country: "US", 
    lng: -119.94363403320312, 
    lat: 38.986507415771484, 
    store_id: 10588
  }, 
  {
    city: "Old Bridge", 
    name: "Acme - Old Bridge #2827", 
    country: "US", 
    lng: -74.3094482421875, 
    lat: 40.38266372680664, 
    store_id: 10589
  }, 
  {
    city: "Vernon", 
    name: "Acme - Vernon #2820", 
    country: "US", 
    lng: -74.48532104492188, 
    lat: 41.18975067138672, 
    store_id: 10591
  }, 
  {
    city: "Seal Beach", 
    name: "Von's-Seal Beach #2803", 
    country: "US", 
    lng: -118.10043334960938, 
    lat: 33.74372863769531, 
    store_id: 10593
  }, 
  {
    city: "Salinas", 
    name: "Main & Bernal", 
    country: "US", 
    lng: -121.65267944335938, 
    lat: 36.691192626953125, 
    store_id: 10594
  }, 
  {
    city: "Pompton Lakes", 
    name: "Pompton Lakes", 
    country: "US", 
    lng: -74.29261779785156, 
    lat: 41.00891876220703, 
    store_id: 10595
  }, 
  {
    city: "Franklin", 
    name: "Franklin, NJ", 
    country: "US", 
    lng: -74.58081817626953, 
    lat: 41.10884475708008, 
    store_id: 10596
  }
];
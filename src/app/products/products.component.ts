import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productName: any;
  catName: any;
  subCatName: any;
  subSubCatName:any;
  productId;
  showProductDeatil: boolean = true
  mekProducts: any = [
    {
      id: 1, name: 'MEK-2300 Consistency Transmitter',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      photoURL: '../../../assets/mek/mek-2300.png'
    },
    {
      id: 2, name: 'MEK-2400 Consistency Transmitter',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      photoURL: '../../../assets/mek/mek2400.png'
    },
    {
      id: 3, name: 'MEK-2500 Consistency Transmitter',
      description: `Rotating shear force transmitter for fiber consistency from 1 – 16%
      <br>
      The MEK-2500 RotoForceTM inline transmitter measures fiber consistency of pulp suspensions in the range of 1 – 16%. This rotating shear force transmitter works practically in every measuring position in pulping, bleaching and papermaking application.
      `,
      photoURL: '../../../assets/mek/mek-2500.png'
    },
    {
      id: 4, name: 'MEK-3000 Consistency Transmitter',
      description: `Rotating shear force transmitter for fiber consistency from 1 – 16%
      <br>
      The MEK-30000 TwinTorqueTM inline transmitter measures fiber consistency of pulp suspensions in the range of 1 – 16%. This rotating shear force transmitter works practically in every measuring position in pulping, bleaching and papermaking applications.`,
      photoURL: '../../../assets/mek/mek3000.png'
    }
  ];


  products:any = [
    {
      image:'../../assets/instrument_pro/mek-3000.png',
      name:"MEK-3000 Twin Torque Consistency Transmitter",
      description:`The MEK-3000 TwinTorque takes in-line, rotating, consistency measurement state-of-the-art to a new level. Combining the most robust measuring method with the unique TwinTorque technology results in unrivalled performance in a format providing significantly reduced installation and maintenance costs. The transmitter is supplied by single-phase power via the Communication Platform (CPM). In new installations the small flange version yields minimized pipe connections, while the large flange version fits to the conventional studs and measuring vessels.`,
      benefits:[`Rotating shear-force measurement`,
                `Unique force-balance principle`,
                `Single-phase power supply, small pipe connections`,
                `Excellent accuracy and repeatability, no hysteresis; ideal for critical applications`],
      specification:[`1-16 %Cs fiber consistency`,
      `Process pressure up to PN25`]
    },
    {
      image:'../../assets/instrument_pro/act-2500.png',
      name:"ACT-2500 AmpliForce Consistency Transmitter",
      description:`The ACT-2500 is an in-line blade transmitter for measuring consistency of pulp suspensions in the range 1-7%Cs. ACT-2500 is based on a new technique for consistency measurement, using an active sensor oscillating at its resonance frequency.
      The ACT-2500 is an in-line blade transmitter for measuring consistency of pulp suspensions in the range 1-7%Cs. ACT-2500 is based on a new technique for consistency measurement, using an active sensor oscillating at its resonance frequency.
      ACT-2500 combines measurement of shear force and viscoelastic properties to obtain higher sensitivity and better signal quality than conventional blade consistency transmitters. The transmitter combines a high and dynamic sensitivity to fiber consistency with a low sensitivity to normal variations in fiber composition, freeness, black liquor content, air content, pressure etc.
      `,
      benefits:[`Shear force/viscoelastic measuring`,
                `Excellent for poor fiber quality at low Consistencies`,
                `High signal to noise ratio, precise and Dynamic
                `,`Small, light, and easy to install`],
      specification:[`1 – 7 % fiber consistency`]
    },
    {
      image:'../../assets/instrument_pro/mbt-2500.png',
      name:"MBT-2500 Moving Blade Consistency Transmitter",
      description:`The MBT-2500 is an active type of in-line blade transmitter for measuring consistency of pulp suspensions in the range 1.5-8%. It is based upon the well-known MBT concept which has been delivered in over 28 000 units. MBT-2500 is improved and refined to perfection to bring even better measuring result and less maintenance demand.
      The MBT-2500 uses the shear force principle to measure fiber consistency with a reciprocating, active sensor. This gives the transmitter virtually no sensitivity to normal variations in fiber composition, freeness, fillers, black liquor content, air content, pressure, etc.
      The active sensor measuring method makes it less sensitive to varying flow velocity compared to static blade type transmitter.`,
      benefits:[`Shear force measurement`,
                `Suitable for less demanding applications. Better result than for static blade transmitters`,
                `Minimal flow sensitivity within very large flow range`],
      specification:[`1.5 – 8 % fiber consistency`]
    },

    {
      image:'../../assets/instrument_pro/sbt-2400.png',
      name:"SBT-2400 Static Blade Consistency Transmitter",
      description:`The SBT-2400 is a static blade transmitter for measurement of the fiber consistency in pulp suspensions. 
      The transmitter uses the shear force principle to measure consistency.
      In applications where static blade transmitters are used, the SBT-2400 is a highly competitive alternative both in terms of performance and cost.
      `,
      benefits:[`Shear force measurement`,
                `Reliable and recognized consistency measurement. Suitable for less-critical consistency control applications`,
                `Multiple preset calibration curves for simple start-up. Multi-point calibration for improvement. Four separate, remotely-set, measuring ranges for different pulp grades`],
      specification:[`1.5 – 16 % fiber consistency`]
    },
     {
      image:'../../assets/instrument_pro/tcr-25xx.png',
      name:"TCR-25xx PeakTotal Consistency Transmitter",
      description:`The TCR-25 PeakTotal is a true total consistency transmitter; it is thus virtually insensitive to variations in filler and fines content as well as changes in fiber properties.
      Based on BTG’s patented Peak method for optical analysis PeakTotal covers total consistencies in the range of 0.5 to 16%.
      The transmitter is mounted in-line direct after the pump in the turbulent flow and provides real time results. The probe is unique low-maintenance probe, without electronic components attached which makes the transmitter insensitive to variations in temperature and vibration.
      Two versions exist of this transmitter type:
      • TCR-25x1 with one total consistency output
 
      • TCR-25x2 with two output, the second output can be calibrated for filler or for different fiber properties.`,
      benefits:[`In-line filler and total consistency measurement`,
                `Independent of grade and wood species`,
                `No increased process pressure needed`,
                `Retractable while process running`,
                `Also, non retractable version available`],
      specification:[`0.5 – 16 % pulp consistency`]
    },

    {
      image:'../../assets/instrument_pro/tct-25x1.png',
      name:"TCT-25x1 Peak Total Low Consistency Transmitter",
      description:`BTG’s TCT-25 PeakOne is an in-line transmitter for measuring total consistency of pulp suspensions in the range 0.01-3%. It measures the large and fine particles individually and can because of that deliver an accurate total consistency value independently of variation in fiber, fines or ash. The pulp brightness or color does not affect the measurement.
      The transmitter is mounted in-line without any special bypass arrangement and provides real time results. The PeakOne has a unique low-maintenance probe, without electronic components attached which makes the transmitter insensitive to variations in temperature and vibration.`,
      benefits:[`In-line low consistency measurement `,
                `High accuracy of true total consistency`,
                `Easy calibration with long term stability`,
                `High installation flexibility – no flushing required`,
                `Retractable while process running`,
                `Also, non retractable version available`],

      specification:[`• 0.01 – 3 % Total consistency`]
    },

    {
      image:'../../assets/instrument_pro/mct-2000.png',
      name:"MCT-2000 Microwave Consistency Transmitter",
      description:`Microwave consistency transmitters can be used throughout the entire process to determine consistency and to feed it to a control loop. 
      Microwave consistency transmitters can be used throughout the entire process to determine consistency and to feed it to a control loop. `,
      benefits:[`Microwave based measurement`,
                `Flush inner parts with no risk of spinning or deposits`,
                `Wide range 0-16 %Cs total consistency`],
      specification:[`Flow through sensor`,
      `Fits for pipe diameters: DN80 [3"], DN100 [4"], DN150[6"], DN200[8"], DN250[10"], DN300[12"]`]
    },
    {
      image:'../../assets/instrument_pro/mcs-1000.png',
      name:"TCT-25x1 Peak Total Low Consistency Transmitter",
      description:`The pulp sampler is used for manual extraction of representative pulp samples from pressurized pipes. It is pneumatically controlled by a push button. Automatic closing occurs by means of a spring, if air pressure drops.
      The sampler is designed for the MC-range (8-16% Cs) but work already from 0% Cs.
      The cutting design of the sampling piston also makes it applicable for lower consistency ranges in unscreened pulp applications. A minimum pressure requirement in the process line makes the sampler suitable for low pressure applications also. The sampler is available in two variants:
      • MCS-1000 to be used in standard applications and 
      • MCS-1010 for tougher application with for example powerful vibration such as blow line.`,
      benefits:[`Multipurpose sampler for all types of pulp`,
                `Cutting edge designed piston for unscreened pulp with shives and knots`,
                `Easy calibration with long term stability Work in high- and low-pressure applications`,
                `Work in high- and low-pressure applications`,
                `Sturdy, reliable design`],
      specification:[`0 – 16% Cs. Suspensions must be pumpable`,`Connection with NORD coupling or flange`]
    },
    {
      image:'../../assets/instrument_pro/mps-pps-1000.png',
      name:"MPS-/PPS-1000 Mechanical and Pneumatic Pulp Samplers",
      description:`The sampler is used for the extraction of representative screened pulp samples from pressurized pipes.
      There are two different models of the sampler.
      Each model can be connected flanged or threaded:
      • MPS-1000/1010, hand operated. For manual sampling.
      • PPS-1000/1010, pneumatic push button control. For manual sampling.`,
      benefits:[`Simple and reliable design`,
                `Mechanism provides consistent samples, independent of operator skill`,
                `Representative sampling, as the sample is extracted away from the water layer around the pipe wall`],
      specification:[`0 – 8% Cs. Suspensions must be pumpable`,`Connection with flange or NPT 1½" thread`]
    },
    {
      image:'../../assets/instrument_pro/spc-5500.png',
      name:"SPC-5500 Single Point Charge Analyzer",
      description:`BTG’s Single Point Charge analyzer, is an online analyzer which continuously measures the charge of colloidal dissolved substances in an aqueous sample. By automatic titration of the sample with an oppositely charged poly-electrolyte solution, it is possible to precisely quantify charge levels (cationic demand or anionic demand).
      The SPC-5500 offers a modular concept with the measuring module and titration module located in a cabinet. The analyzer can be installed up to 10 m from the sampling point, max. two  sampling points are possible. It can be used with or without a filtration device.`,
      benefits:[`Cost effective solution for a compact online charge measurement`,
                `Allows for closed loop control of fixatives and other chemical additives`,
                `Easy maintenance due to a modular concept and diagnostic tool`],
      specification:[`Measuring range ± 2000 mEq. (20 mL standard solution)`,
      `Measuring frequency 1 – 8 measurements/hour`,
      `White water measurement and/or Thick stock sampler`,
      `Thick stock 0.5 to 8 %Cs`]
    },
    {
      image:'../../assets/instrument_pro/spc-5550.png',
      name:"SPC-5550 Single Point Morphology Analyzer",
      description:`BTG’s  Single  Point  Morphology  analyzer, SPM-5550,    is    an on-line    analyzer    measuring    the geometrical  pulp  properties  such  as  length,  width, shape  for  fibers,  fines, and  other  objects such  as shives.
      The  SPM-5550  is  installed  directly  on  the  process pipe   and   an   integrated   robust   sampling   device extracts  representative  pulp  samples  under  actual process conditions providing real time results, and it can thus be used for effective process control of key process stages such as refining and screening.
      Fiber morphology data can be applied for predictions of other pulp and paper properties such as freeness and strength.
      `,
      benefits:[`Single point high frequency measurement`,
                `All-in-one sampling, dilution, and measurement `,
                `High availability, robust system with less auxiliaries and low maintenance`],
      specification:[`Fiber properties 10-20 samples per hour (depending on application)`,
      `Consistency range 1-10 %Cs`,
      `Fiber length max 10 mm [0.39”]`]
    },

    {
      image:'../../assets/instrument_pro/DRT-5500.png',
      name:"DRT-5500 Freeness Inline Analyzer",
      description:`The DRT-5500 Freeness In-line analyzer measures the drainage rate of pulp suspensions and provides fast and accurate freeness results.
      It is installed directly on the process pipe and an integrated robust sampling device extracts representative pulp samples under actual process conditions providing real time results. The special design of the DRT-5500 sample piston allows easy installation independent of the process pipe angle. The DRT-5500 is available in two versions: Standard for most applications and Peak for application with variations in ash and fines.
      Due to its robust design and unique measuring principle, the DRT-5500 measures with high frequency, high accuracy and repeatability.
      It provides a freeness output signal which is independent of the process.`,
      benefits:[`Direct in-line single point measurement`,
                `Accurate high frequency measurement`,
                `Compact design, installed in the process piping`,
                `Independent of process consistency and temperature`],

              specification:[`Freeness range`,
              `- Standard  	750 – 15 ml CSF/ 15 – 90ºSR`,
              `- Peak 	800 – 100 ml CSF/ 10 – 70 ºSR `,
              `About 20 samples per hour (depending on application)`,
              `Consistency range 1 – 6 %Cs`]
    },
    
    {
      image:'../../assets/instrument_pro/RET-5503.png',
      name:"RET-5503 Ash and Total Consistency Analyzer",
      description:`BTG’s RET-5503 PeakAsh is the perfect solution for measuring ash and total consistency of pulp suspensions in the range of 0.01-2%. Due to its LED and laser technology, it can easily be calibrated to secure stable and accurate ash consistency based on laboratory ash determination. Ash and total consistency values are independent of variation in pulp brightness or color.
      The PeakAsh sensor is mounted in a special bypass arrangement and provides real time results. The unit has a unique low-maintenance probe which is fed by a pump solution ideally suited for these applications. All modules built on a frame allow for plug & play features with shortest start-up times. High installation flexibility is achieved through a variety of customized options plus the unit’s independency of process pressure and process layout.
      `,
      benefits:[`High accuracy of ash and total consistency`,
                `Easy calibration on lab ash`,
                `Independent of process pressure`,
                `Real time results`],

              specification:[`Consistency range 0.01-2 %Cs`]
    },

    {
      image:'../../assets/instrument_pro/SPK-5500.png',
      name:"SPK-5500 Single Point Kappa, Kappa Number Analyzer",
      description:`BTG’s, Single Point Kappa Analyzer, SPK-5500, is an in-line kappa analyzer which measures the lignin content of pulp fibers. Optionally it can also measure hexenuronic acid (HexA). The analyzer is mounted directly to the pulp processing pipeline and contains all unit operations of the traditional multi point kappa analyzer. Thus, there is no need for the remote pulp sampler, associated water valves and transport lines from the sampler to the kappa analyzer. The SPK handles all operations in one unit - pulp sampling, screening, washing, and optical kappa number measurement.
      Because the SPK is dedicated to one position, it supplies kappa results at a much faster rate, 10 – 12 kappa results per hour, compared to the traditional multi point kappa analyzer’s typical 2 – 3 results per hour. This will significantly improve the accuracy of the signal applied for the process control, subsequently enhancing the performance of the production process.
      `,
      benefits:[`Single Point high frequency measurement`,
                `High accuracy UV LED-based lignin determination`,
                `Easy calibration with long term stability`,
                `All-in-one pulp sampling, screening, washing and measurement`],

              specification:[`Kappa number 2 – 120`,
              `Measurement update rate 4 – 6 minutes depending on process conditions`,
              `Consistency range 2 – 16 %Cs`]
    },
    {
      image:'../../assets/instrument_pro/GAS-60.png',
      name:"GAS-60 Gas Content Analyzer",
      description:`The main application of the GAS-60 Gas Analyzer is closed loop control of deaerator/defoamer chemicals in pulp and paper production.
      By measuring the gas content online, problems of paper machine runnability due to increased gas contents can be adjusted within a short time. In addition, online gas measurements optimize the performance of mechanical and/or chemical deaerator.
      In pulp and paper suspensions two different types of gases can be found: free and dissolved gas. The washers in the brown-stock washing process are heavily influenced by foam. Air is introduced as a surfactant with the fiber and can result in several problems. The paper machine wire and leakages in piping, machine parts and pumps are the principal locations within the stock cycle where air is entrained during papermaking.

      `,
      benefits:[`Optimum dosage of chemical deaerator /defoamer`,
                `Eliminates pinholes, Reduces deposits, Prevents foaming, Improves drainage`,
                `Creates a potential for increased production speeds`],

              specification:[`Measuring range 0 – 8 % by volume`,
              `Measuring interval 1 – 5 min`]
    },
    {
      image:'../../assets/instrument_pro/RPA-5000.png',
      name:"RPA-5000 Residual Peroxide Analyzer",
      description:`The use of chlorine-free bleaching agents in pulp bleaching processes is steadily increasing. Peroxide is the most commonly used of these chemicals for bleaching kraft, mechanical and recycled pulps. 
      Peroxide, however, is relatively expensive and, therefore,  improved control of its use in the bleaching process is beneficial for optimizing operating efficiency and product quality. Measurement of peroxide residuals after bleaching, for example, is necessary for achieving better overall control of the bleaching process.
      The RPA-5000 measures the residual peroxide content of a filtrate sample from a bleached pulp suspension.
      `,
      benefits:[`Provides accurate results in as little as four minutes`,
                `Wide range of measurement, 5-5000 ppm`,
                `– no changes in instrument settings are required`,
                `Selective – measures peroxide only`],

              specification:[`Measuring range 5-5000ppm`,
              `1 sampling point`,
              `New value every 4-5 minutes`]
    }
  ]

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.productName = params['pname'];
      this.catName = params['catname'];
      this.subCatName = params['subname'];
      this.subSubCatName = params['subsubname'];
      this.productId = params['id'];
    })

    if (this.productName != 'MEK') {
      this.showProductDeatil = false
    }
  }

}

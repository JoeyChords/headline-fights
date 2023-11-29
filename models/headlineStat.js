//Model to store counts of all choices users make
//This is for fast display of stats such as the number of times the publication
//was chosen correctly
const mongoose = require("mongoose");

const headlineStatSchema = new mongoose.Schema(
  {
    name: String,
    times_seen: Number,
    times_pub_1_chosen_correctly: Number,
    times_pub_1_chosen_incorrectly: Number,
    times_pub_2_chosen_correctly: Number,
    times_pub_2_chosen_incorrectly: Number,
    pub_1_bias_attributes: {
      sensationalism_true: Number,
      sensationalism_false: Number,
      sensationalism_neither: Number,
      undue_weight_bias_true: Number,
      undue_weight_bias_false: Number,
      undue_weight_bias_neither: Number,
      speculative_content_true: Number,
      speculative_content_false: Number,
      speculative_content_neither: Number,
      tonality_bias_true: Number,
      tonality_bias_false: Number,
      tonality_bias_neither: Number,
      concision_bias_true: Number,
      concision_bias_false: Number,
      concision_bias_neither: Number,
      coverage_bias_true: Number,
      coverage_bias_false: Number,
      coverage_bias_neither: Number,
      distortion_bias_true: Number,
      distortion_bias_false: Number,
      distortion_bias_neither: Number,
      partisan_bias_true: Number,
      partisan_bias_false: Number,
      partisan_bias_neither: Number,
      favors_or_attacks_true: Number,
      favors_or_attacks_false: Number,
      favors_or_attacks_neither: Number,
      content_bias_true: Number,
      content_bias_false: Number,
      content_bias_neither: Number,
      structural_bias_true: Number,
      structural_bias_false: Number,
      structural_bias_neither: Number,
      gatekeeping_bias_true: Number,
      gatekeeping_bias_false: Number,
      gatekeeping_bias_neither: Number,
      decision_making_bias_true: Number,
      decision_making_bias_false: Number,
      decision_making_bias_neither: Number,
      mainstream_bias_true: Number,
      mainstream_bias_false: Number,
      mainstream_bias_neither: Number,
      false_balance_bias_true: Number,
      false_balance_bias_false: Number,
      false_balance_bias_neither: Number,
    },
    pub_2_bias_attributes: {
      sensationalism_true: Number,
      sensationalism_false: Number,
      sensationalism_neither: Number,
      undue_weight_bias_true: Number,
      undue_weight_bias_false: Number,
      undue_weight_bias_neither: Number,
      speculative_content_true: Number,
      speculative_content_false: Number,
      speculative_content_neither: Number,
      tonality_bias_true: Number,
      tonality_bias_false: Number,
      tonality_bias_neither: Number,
      concision_bias_true: Number,
      concision_bias_false: Number,
      concision_bias_neither: Number,
      coverage_bias_true: Number,
      coverage_bias_false: Number,
      coverage_bias_neither: Number,
      distortion_bias_true: Number,
      distortion_bias_false: Number,
      distortion_bias_neither: Number,
      partisan_bias_true: Number,
      partisan_bias_false: Number,
      partisan_bias_neither: Number,
      favors_or_attacks_true: Number,
      favors_or_attacks_false: Number,
      favors_or_attacks_neither: Number,
      content_bias_true: Number,
      content_bias_false: Number,
      content_bias_neither: Number,
      structural_bias_true: Number,
      structural_bias_false: Number,
      structural_bias_neither: Number,
      gatekeeping_bias_true: Number,
      gatekeeping_bias_false: Number,
      gatekeeping_bias_neither: Number,
      decision_making_bias_true: Number,
      decision_making_bias_false: Number,
      decision_making_bias_neither: Number,
      mainstream_bias_true: Number,
      mainstream_bias_false: Number,
      mainstream_bias_neither: Number,
      false_balance_bias_true: Number,
      false_balance_bias_false: Number,
      false_balance_bias_neither: Number,
    },
  },
  {
    timestamps: true,
  }
);

HeadlineStat = mongoose.model("HeadlineStat", headlineStatSchema);

module.exports = HeadlineStat;

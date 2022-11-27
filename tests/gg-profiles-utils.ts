import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ggProfilesAddOperator,
  AddSupportedThirdParty,
  Burn,
  DecreaseReputation,
  IncreaseReputation,
  LinkThirdPartyToProfile,
  Mint,
  ggProfilesRemoveOperator,
  UnlinkThirdPartyToProfile,
  Update
} from "../generated/ggProfiles/ggProfiles"

export function createggProfilesAddOperatorEvent(
  _operator: Address
): ggProfilesAddOperator {
  let ggProfilesAddOperatorEvent = changetype<ggProfilesAddOperator>(
    newMockEvent()
  )

  ggProfilesAddOperatorEvent.parameters = new Array()

  ggProfilesAddOperatorEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )

  return ggProfilesAddOperatorEvent
}

export function createAddSupportedThirdPartyEvent(
  _name: string
): AddSupportedThirdParty {
  let addSupportedThirdPartyEvent = changetype<AddSupportedThirdParty>(
    newMockEvent()
  )

  addSupportedThirdPartyEvent.parameters = new Array()

  addSupportedThirdPartyEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )

  return addSupportedThirdPartyEvent
}

export function createBurnEvent(_userAddress: Address): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )

  return burnEvent
}

export function createDecreaseReputationEvent(
  _userAddress: Address,
  _amount: BigInt
): DecreaseReputation {
  let decreaseReputationEvent = changetype<DecreaseReputation>(newMockEvent())

  decreaseReputationEvent.parameters = new Array()

  decreaseReputationEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  decreaseReputationEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return decreaseReputationEvent
}

export function createIncreaseReputationEvent(
  _userAddress: Address,
  _amount: BigInt
): IncreaseReputation {
  let increaseReputationEvent = changetype<IncreaseReputation>(newMockEvent())

  increaseReputationEvent.parameters = new Array()

  increaseReputationEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  increaseReputationEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return increaseReputationEvent
}

export function createLinkThirdPartyToProfileEvent(
  _userAddress: Address,
  _thirdPartyId: BigInt,
  _thirdPartyUserId: BigInt
): LinkThirdPartyToProfile {
  let linkThirdPartyToProfileEvent = changetype<LinkThirdPartyToProfile>(
    newMockEvent()
  )

  linkThirdPartyToProfileEvent.parameters = new Array()

  linkThirdPartyToProfileEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  linkThirdPartyToProfileEvent.parameters.push(
    new ethereum.EventParam(
      "_thirdPartyId",
      ethereum.Value.fromUnsignedBigInt(_thirdPartyId)
    )
  )
  linkThirdPartyToProfileEvent.parameters.push(
    new ethereum.EventParam(
      "_thirdPartyUserId",
      ethereum.Value.fromUnsignedBigInt(_thirdPartyUserId)
    )
  )

  return linkThirdPartyToProfileEvent
}

export function createMintEvent(_userAddress: Address, _pseudo: string): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("_pseudo", ethereum.Value.fromString(_pseudo))
  )

  return mintEvent
}

export function createggProfilesRemoveOperatorEvent(
  _operator: Address
): ggProfilesRemoveOperator {
  let ggProfilesRemoveOperatorEvent = changetype<ggProfilesRemoveOperator>(
    newMockEvent()
  )

  ggProfilesRemoveOperatorEvent.parameters = new Array()

  ggProfilesRemoveOperatorEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )

  return ggProfilesRemoveOperatorEvent
}

export function createUnlinkThirdPartyToProfileEvent(
  _userAddress: Address,
  _thirdPartyId: BigInt
): UnlinkThirdPartyToProfile {
  let unlinkThirdPartyToProfileEvent = changetype<UnlinkThirdPartyToProfile>(
    newMockEvent()
  )

  unlinkThirdPartyToProfileEvent.parameters = new Array()

  unlinkThirdPartyToProfileEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  unlinkThirdPartyToProfileEvent.parameters.push(
    new ethereum.EventParam(
      "_thirdPartyId",
      ethereum.Value.fromUnsignedBigInt(_thirdPartyId)
    )
  )

  return unlinkThirdPartyToProfileEvent
}

export function createUpdateEvent(
  _userAddress: Address,
  _pseudo: string
): Update {
  let updateEvent = changetype<Update>(newMockEvent())

  updateEvent.parameters = new Array()

  updateEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  updateEvent.parameters.push(
    new ethereum.EventParam("_pseudo", ethereum.Value.fromString(_pseudo))
  )

  return updateEvent
}

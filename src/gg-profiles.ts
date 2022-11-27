import {
  ggProfilesAddOperator as ggProfilesAddOperatorEvent,
  AddSupportedThirdParty as AddSupportedThirdPartyEvent,
  Burn as BurnEvent,
  DecreaseReputation as DecreaseReputationEvent,
  IncreaseReputation as IncreaseReputationEvent,
  LinkThirdPartyToProfile as LinkThirdPartyToProfileEvent,
  Mint as MintEvent,
  ggProfilesRemoveOperator as ggProfilesRemoveOperatorEvent,
  UnlinkThirdPartyToProfile as UnlinkThirdPartyToProfileEvent,
  Update as UpdateEvent
} from "../generated/ggProfiles/ggProfiles"
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
} from "../generated/schema"

export function handleggProfilesAddOperator(
  event: ggProfilesAddOperatorEvent
): void {
  let entity = new ggProfilesAddOperator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._operator = event.params._operator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddSupportedThirdParty(
  event: AddSupportedThirdPartyEvent
): void {
  let entity = new AddSupportedThirdParty(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._name = event.params._name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreaseReputation(event: DecreaseReputationEvent): void {
  let entity = new DecreaseReputation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreaseReputation(event: IncreaseReputationEvent): void {
  let entity = new IncreaseReputation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLinkThirdPartyToProfile(
  event: LinkThirdPartyToProfileEvent
): void {
  let entity = new LinkThirdPartyToProfile(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._thirdPartyId = event.params._thirdPartyId
  entity._thirdPartyUserId = event.params._thirdPartyUserId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._pseudo = event.params._pseudo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleggProfilesRemoveOperator(
  event: ggProfilesRemoveOperatorEvent
): void {
  let entity = new ggProfilesRemoveOperator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._operator = event.params._operator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnlinkThirdPartyToProfile(
  event: UnlinkThirdPartyToProfileEvent
): void {
  let entity = new UnlinkThirdPartyToProfile(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._thirdPartyId = event.params._thirdPartyId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdate(event: UpdateEvent): void {
  let entity = new Update(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._pseudo = event.params._pseudo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
